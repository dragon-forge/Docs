---
sidebar_position: 1
---

# 🌳 Zero-code NBT serialization

HammerLib offers easy to use, annotation-based NBT serialization mechanism.
The easiest way to get started with it is implementing your object with `IAutoNBTSerializable`.
:::info
Internally, this interface is a layer on top of Forge's INBTSerializable interface:
```java
public interface IAutoNBTSerializable extends INBTSerializable<CompoundTag>
{
    @Override
    default CompoundTag serializeNBT() { return NBTSerializationHelper.serialize(this); }

    @Override
    default void deserializeNBT(CompoundTag nbt) { NBTSerializationHelper.deserialize(this, nbt); }
}
```
:::

As you can see, this interface defaults both serialization methods into `NBTSerializationHelper`. Technically you can use those same methods in your code, if `IAutoNBTSerializable` is not an option.

## ⚙️ Mechanism
The serializer goes over all `@NBTSerializable`-annotated fields in an instance, and attempts to serialize each field.
:::tip
The serialized name is going to be the same as the field name itself.
If you want to override it, simply put the name into the annotation: `@NBTSerializable("SerializedName")`
:::

The field may be serialized on one of these conditions:
- The field is **final** and its type `T` is instanceof `INBTSerializable`, and it is **not null**. In this case, the `INBTSerializable.serializeNBT` and `INBTSerializable.deserializeNBT` are called with a tag.
- The field is **non-final** and its type `T` has a linked `INBTSerializer<T>`.
- The field is **non-final** and its type is any dimensional (`T[]`, `T[][]`, `T[][]` etc) array of a type has a linked `INBTSerializer<T>`.
- The field is **non-final** and its type is any enum value, or null. (all enums are supported out of box)

A NBT tag compound will be created, storing each named field inside it, storing its respective tag type.

### 🔧 `INBTSerializer<T>`

To put it simply, this interface allows reading of complex objects to and from NBT, creating a new instance when reading.

If your object of interest has a codec, you might want to register a serializer using `BaseCodecSerializer<T>`

Here is an example on BlockState from HammerLib:
```java
package org.zeith.hammerlib.api.io.serializers;

import com.google.common.base.Suppliers;
import com.mojang.serialization.Codec;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.BlockState;
import org.zeith.hammerlib.api.io.NBTSerializer;

import java.util.function.Supplier;

@NBTSerializer(BlockState.class)
public class BlockStateSerializer
        extends BaseCodecSerializer<BlockState>
{
    public BlockStateSerializer()
    {
        super(BlockState.CODEC, Suppliers.memoize(Blocks.AIR::defaultBlockState)); // supplier is the default value for when the state was not found
    }
}
```

For something that doesn't use codec, you may as well write the basic implementation. Here is another example from HammerLib:
```java
package org.zeith.hammerlib.api.io.serializers;

import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.Tag;
import net.minecraft.world.item.ItemStack;
import org.jetbrains.annotations.NotNull;
import org.zeith.hammerlib.api.io.NBTSerializer;

@NBTSerializer(ItemStack.class)
public class ItemStackSerializer
        implements INBTSerializer<ItemStack>
{
    @Override
    public void serialize(CompoundTag nbt, String key, @NotNull ItemStack value)
    {
        if(!value.isEmpty())
            nbt.put(key, value.serializeNBT());
    }

    @Override
    public ItemStack deserialize(CompoundTag nbt, String key)
    {
        return nbt.contains(key, Tag.TAG_COMPOUND) ? ItemStack.of(nbt.getCompound(key)) : ItemStack.EMPTY;
    }
}
```

### 📦 Out-of-box serializers
HammerLib provides a wide support of Minecraft's objects to be serialized.
As of HammerLib 19.3.81 (1.19.2), the list of supported objects are:
- All Java primitive types (both primitive and wrapped) (both `int` and `Integer`)
- byte[]
- int[]
- long[]
- BlockPos
- ChunkPos
- GlobalPos
- BlockState
- Component
- FluidStack
- FluidIngredient
- FluidIngredientStack
- ItemStack
- BigInteger
- BigDecimal
- ParticleOptions
- ResourceLocation
- ResourceKey\<?\>
- String
- UUID
- Vec3
- Vector3d

### ⁉️ Null support?
- All OOB serializers are compatible with null values and should work effortlessly.

## ☕ Example
Let's contextualize this knowledge and provide a meaningful example!

```java
@ToString
public class TestSerializable
        implements IAutoNBTSerializable
{
    @NBTSerializable("Progress")
    public final WorkInfo workInfo = new WorkInfo();
    
    @NBTSerializable("Energy")
    public int energy;
    
    @NBTSerializable
    public ResourceLocation texture = new ResourceLocation("yourmod", "textures/entity/test.png");
    
    @ToString
    public static class WorkInfo
            implements IAutoNBTSerializable
    {
        @NBTSerializable("Cur")
        public int progress;
        
        @NBTSerializable("Max")
        public int maxProgress;
    }
}
```
:::info
The `@ToString` is from Lombok and is used to generate toString result. You can safely ignore these annotations.
:::

Let's configure and serialize our `TestSerializable` object:
```java
TestSerializable t = new TestSerializable();
t.energy = 356;
t.workInfo.progress = 10;
t.workInfo.maxProgress = 200;
t.texture = new ResourceLocation("yourmod", "textures/entity/test_active.png");

var tag = t.serializeNBT();
System.out.println(tag);
```

The result we should see would look like this:
```js
{Energy:356,Progress:{Cur:10,Max:200},texture:"yourmod:textures/entity/test_active.png"}
```

Let's reconstruct our object back from the tag and see if it's correct!
```java
var test = new TestSerializable();
test.deserializeNBT(tag);
System.out.println(test);
```
And as expected, the result looks pretty much correct!
```
TestSerializable(workInfo=TestSerializable.WorkInfo(progress=10, maxProgress=200), energy=356, texture=yourmod:textures/entity/test_active.png)
```