---
sidebar_position: 0
---

# Content Registration
Here we go over how to registar stuff with HammerLib.

In order to register your objects into the game, HammerLib offers annotation-based solution.

## Peparations

Start by creating an `interface` class, which will store your objects-of-choice.
This objects may be anything that needs to be registered into IForgeRegistries (or vanilla regitries)

:::info
These interfaces do NOT need to be subscribed into HammerLib.

They automagically get subscribed when loading the game, and do not need any special registration.
:::

You will need to import HammerLib annotations:
```java
import org.zeith.hammerlib.annotations.*;
```

Annotate your interface with `@SimplyRegister`.
:::tip
There is an optional `prefix` parameter to insert the given prefix into all registry names of contents declared in the interface.

An example of prefixed annotation would be `@SimplyRegister(prefix = "furniture/")`.
:::

The result should look something like this:
```java
package com.yourname.yourmod.init;

import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModBlocks
{
}
```

### Adding contents

Adding new things is as simple as adding a variable of given type, and annotating it with `@RegistryName("name")`.
The "name" must be unique value.

```java
package com.yourname.yourmod.init;

import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModBlocks
{
    @RegistryName("your_block")
    YourBlock YOUR_BLOCK = new YourBlock();
}
```

### @OnlyIf

Some registries are considered "intrusive", which means that as soon as you create an instance of registry entry, you must register it, or the game is going to crash.

By default, we treat all vanilla registries as intrusive.

All non-intrusive registries (such as your custom registries) may use the `@OnlyIf` annotation on per-field basis.
Each entry of non-intrusive registry will be checked against this annotation to determine if it should be registered or not.

:::danger
Be careful when referencing such objects!
They may not have a registry key, since they were not registered, and thus may cause unexpected issues to arise.
I advise you to avoid using `@OnlyIf`s when possible.
:::

An example of conditional annotation would be `@OnlyIf(owner = ModHelper.class, member = "inDev", invert = false)`.
This will call `public static boolean inDev()` method inside `ModHelper`.
`invert` is used to apply !(owner.member()). In other words, if we set `invert = true`, then `inDev` must return `false` for the object to get registered.

Here is an example from [ImprovableSkills](https://modrinth.com/mod/improvable-skills):
```java
package com.yourname.yourmod.init;

import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModBlocks
{
    @RegistryName("your_block")
    YourBlock YOUR_BLOCK = new YourBlock();
}
```

### Custom registrars

For more complex solutions (like fluids) which require more than one object to be registered (into multiple registries), you should create a class that implements `ICustomRegistrar` from package `org.zeith.hammerlib.api.fml`.

There is only one method that you must implement: 
```java
/**
 * Perform the registration via RegisterEvent.
 * This gets called for all registries there are, please filter things out.
 * Use the ResourceLocation id
 */
void performRegister(RegisterEvent event, ResourceLocation id)
```

You should put the custom registrars as any other registry object inside your content interface.

HammerLib has an example of such implementation, being `org.zeith.hammerlib.api.fluid.FluidFactory`.

### Fluid registration

`FluidFactory` is what HammerLib offers to regiter fluids, alongside their bucket item, fluid block, fluid type, still & flowing fluids. (Basically a lot of things packed in one!)

Here is an example of adding custom water fluid into the game:

```java
package com.yourname.yourmod.init;

import net.minecraft.core.BlockPos;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.material.FluidState;
import net.minecraftforge.common.SoundActions;
import net.minecraftforge.fluids.*;
import org.zeith.hammerlib.annotations.*;
import org.zeith.hammerlib.api.fluid.FluidFactory;
import org.zeith.hammerlib.proxy.HLConstants;

@SimplyRegister
public interface ModFluids
{
	@RegistryName("water")
	FluidFactory WATER = FluidFactory.builder(FluidType.Properties.create()
					.canSwim(true)
					.canDrown(true)
					.canConvertToSource(true)
					.sound(SoundActions.BUCKET_FILL, SoundEvents.BUCKET_FILL)
					.sound(SoundActions.BUCKET_EMPTY, SoundEvents.BUCKET_EMPTY)
					.sound(SoundActions.FLUID_VAPORIZE, SoundEvents.FIRE_EXTINGUISH)
			)
			.withBlock()
			.withBucket()
			.addToTab(HLConstants.HL_TAB)
			.propertyModifier(p -> p.levelDecreasePerBlock(2))
			.build();
}
```

## Special treatment for Blocks

Blocks are special in a way that they have their Items.
HammerLib automagically registers a default `BlockItem` for every `Block`.

There are three interfaces for a custom `Block` class that may alter what/how `BlockItem` will be registered.

### Adding default `BlockItem` to creative tab
To add default instance of `BlockItem` to a creative tab, you should implement `ICreativeTabBlock` from package `org.zeith.hammerlib.api.blocks`.
You will have to implement `getCreativeTab` method, which should return the tab to which the item will be assigned.

### Disabling `BlockItem`
To prevent `BlockItem` from being registered altogether, you should implement `INoItemBlock` from package `org.zeith.hammerlib.api.blocks`.
This behavior would be similar to how Minecraft does not register items for fluids, fire and similar blocks without an item.

### Tweaking default `BlockItem`
If you wish to change item properties of a default `BlockItem` implementation, like stack size, you will have implement `IItemPropertySupplier` from package `org.zeith.hammerlib.api.blocks`.
You will have to implement `createItemProperties` method, which should return the first parameter (`Item.Properties`) back, but modified.

### Custom `BlockItem`
In order to change what `BlockItem` is going to be created for a given block, you should implement `ICustomBlockItem` from package `org.zeith.hammerlib.api.blocks`.
You will have to implement `createBlockItem` method, which should return a new `BlockItem` instance bound to the current `Block` instance.

## BlockEntities

HammerLib offers built-in tiles for two use cases:
- Static block entity - `TileSyncable`
- Ticking block entity - `TileSyncableTickable`
  - :::info This will require a ticker method inside your `Block` class. 
  ```java
	@Nullable
	@Override
	public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level pLevel, BlockState pState, BlockEntityType<T> pBlockEntityType)
	{
		return BlockAPI.ticker(pLevel);
	}
  ```

To create BlockEntityType\<?>, use `BlockAPI` from package `org.zeith.hammerlib.api.forge`.

You will be using `BlockAPI.createBlockEntityType(DynamicBlockEntitySupplier<T> generator, Block... blocks)` method.

You must add a vanilla constructor into your `BlockEntity`: `public BlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state)`

## Client-side rendering

Some vanilla client-side rendering registration may be simplified using annotation-based binding, offered by HammerLib.

:::info
You must be using annotation-based registration system (`@SimplyRegister`) for these features to work.
:::

### BlockEntityType\<?>

To add renderer to your BlockEntity, add `@TileRenderer(RenderModTile.class)` annotation.

Here is an example of 

```java
package com.yourname.yourmod.init;

import com.yourname.yourmod.client.render.tile.*;
import com.yourname.yourmod.init.ModBlocks;

import org.zeith.hammerlib.annotations.*;
import org.zeith.hammerlib.annotations.client.TileRenderer;

@SimplyRegister
public interface ModTiles
{
    @RegistryName("example")
	@TileRenderer(RenderExampleTile.class)
	BlockEntityType<TileExample> EXAMPLE_TILE = BlockAPI.createBlockEntityType(TileExample::new, ModBlocks.EXAMPLE_BLOCK);
}
```

Your `RenderExampleTile` from the example above should implement `BlockEntityRenderer<TileExample>` and have one constructor from the list below:
- no-args constructor (`public RenderExampleTile() {}`)
- 1-parameter constructor (`public RenderExampleTile(BlockEntityRendererProvider.Context ctx) {}`)

### ParticleType\<?>

```java
package com.yourname.yourmod.init;

import com.mojang.serialization.Codec;
import net.minecraft.core.particles.*;
import org.zeith.hammerlib.annotations.*;
import org.zeith.hammerlib.annotations.client.Particles;
import com.yourname.yourmod.client.particle.ClientTestParticle;
import com.yourname.yourmod.content.particles.ParticleWisp;

@SimplyRegister
public interface ParticlesWL
{
	@RegistryName("wisp")
	@Particles(ClientTestParticle.Provider.class)
	ParticleType<ParticleTest> WISP = create(false, ParticleTest.DESERIALIZER, ParticleTest.CODEC);
	
	static SimpleParticleType simple(boolean pOverrideLimiter)
	{
		return new SimpleParticleType(pOverrideLimiter);
	}
	
	static <T extends ParticleOptions> ParticleType<T> create(boolean pOverrideLimiter, ParticleOptions.Deserializer<T> pDeserializer, final Codec<T> pCodec)
	{
		return new ParticleType<>(pOverrideLimiter, pDeserializer)
		{
			@Override
			public Codec<T> codec()
			{
				return pCodec;
			}
		};
	}
}
```

The provider from `ClientTestParticle.Provider` must implement one interface from the list:
- `ParticleProvider.Sprite`
  - and have default 0-arg constructor.
  - Used for creating instances of `TextureSheetParticle` which pick their sprite natively.
  - Requires particle json.
- `ParticleEngine.SpriteParticleRegistration`
  - and have default 0-arg constructor.
  - Used for creating custom `ParticleProvider<?>` with a sprite set.
  - Requires particle json.
- `ParticleProvider<?>`
  - and have default 1-arg constructor `public Provider(SpriteSet set)`.
  - Used for creating standard particles with sprite set which is used for picking sprite by a particle.
  - Requires particle json.
- sprite-less `ParticleProvider<?>`
  - and have default 0-arg constructor.
  - Used for creating special particles with no sprites to pick.
  - This means that there must be NO particle json.