---
sidebar_position: 2
---

# 🌐 Level Actions
:::warning
This feature is available from 1.20.1 and above.
:::

Defering an action to be executed later on the server can be a bit tricky. Let alone making sure it happens even between world reloads, or even game restarts.

This is where `LevelAction`s come in.

The layout is similar to `IObjectSourceType` and `IObjectSource` in a way. We have a type that reads an instance from NBT. This is quite similar here.

The `LevelAction` itself is an abstract serializable piece of data that doesn't really do anything on its own.

However, HammerLib offers two commonly used implementations to use:
- `RunnableLevelAction` - Contains a unit of work, represented by abstract method `run(ServerLevel)`, and is executed once.
   An example of such action is `MethodHandleLevelAction` which we'll go over in [🍏 The simple stuff](#-the-simple-stuff).
   Additionally `RunnableLevelAction` has these utility methods:
  - `enqueue(ServerLevel)` - Submit the instance of `RunnableLevelAction` to `ServerLevel` to be executed on next server tick. 
  - `delay(int)` - Create delayed action that will fire this instance's `run(ServerLevel)` code after the given amount of ticks pass.
- `ContinuousLevelAction` - extends `RunnableLevelAction` and provides additional method `boolean isDone()`, letting HammerLib know if the action should continue executing or be marked as complete and discarded.
  An example of continuous action would be `DelayedLevelAction` which keeps on ticking until the delay has passed, and then it executes the child instance once, unless it's also `ContinuousLevelAction`, in which case it would continue executing until the child action is complete.

## 🍏 The simple stuff

If you don't want to get too into details and are looking for a way to easily call a method with parameters, consider using `MethodHandleLevelAction` which already exists for you.

The `MethodHandleLevelAction` has a 1-argument constructor, taking in `SerializableMethodHandle`.

### 🌲 SerializableMethodHandle

Let's say we want to execute a method with given set of data, but we can't really make the lambda persist between world saves. This would bring us to having to create custom actions for every action we want to implement.

Instead of doing that, you can create a public static method that takes in a fixed set of data, and performs some sort of work.

Let's make an example that will destroy a block as a method handle.

We are going to create a new class (you can reuse any class you want though!) and call it `BreakBlockHandle`, and we're going to put a static method `breakBlock` inside. The method needs a position of a block, a dimension where it happens and a parameter if we want to drop items. Luckily, Minecraft provides `GlobalPos` class, which we're going to reuse here.

```java
import net.minecraft.core.GlobalPos;
import org.zeith.hammerlib.annotations.ExposedToLevelAction;

public class BreakBlockHandle
{
	@ExposedToLevelAction
	public static void breakBlock(GlobalPos globalPos, boolean dropResources)
	{
	}
}
```
The only catch is, this method handle won't really work. To make it work, we have to expose it to level actions. This has to be done explicitly for security reasons we're not going to get into. To expose the method, use **`@ExposedToLevelAction`** (located at `org.zeith.hammerlib.annotations.ExposedToLevelAction`)

Now let's get a level from the global position in question and actually break a block!
```java
import net.minecraft.core.GlobalPos;
import net.minecraft.server.level.ServerLevel;
import org.zeith.hammerlib.annotations.ExposedToLevelAction;
import org.zeith.hammerlib.util.mcf.LogicalSidePredictor;

public class BreakBlockHandle
{
	@ExposedToLevelAction
	public static void breakBlock(GlobalPos globalPos, boolean dropResources)
	{
		ServerLevel level = LogicalSidePredictor.getLevel(globalPos.dimension());
		if(level == null) return;
		
		level.destroyBlock(globalPos.pos(), dropResources);
	}
}
```

**But wait, you say, how are the GlobalPos and boolean saved between game sessions?**

The way HammerLib remembers arguments passed through a method handle uses our [NBTSerializationHelper](/docs/api/hammerlib/advanced/nbt_serialization). Thus, if an argument does not have a serializer, it will not work. Additionally, no instances of `INBTSerializable<?>` may be used unless they explicitly have registered an `INBTSerializer<?>` that can create and deserialize new instances from NBT.

Now that we have our method handle ready and know how it works, let's write an action now!

### ⚙️ Example

You can set up a delay to the newly created action using `.delay(N)`, where N is number of ticks before the task will get executed.

HammerLib provides an example method handle for you to test on, it's located inside `org.zeith.hammerlib.core.test.MethodHandleTest`.

```java
public static void enqueueBlockBreak(ServerLevel serverLevel, BlockPos blockPos, int delay, boolean dropResources)
{
	var globalPos = GlobalPos.of(serverLevel.dimension(), blockPos.immutable());
	
	var handle = SerializableMethodHandle
                    .create(BreakBlockHandle.class, "breakBlock", null, globalPos, dropResources);
	
	new MethodHandleLevelAction(handle)
			.delay(delay)
			.enqueue(serverLevel);
}
```

We're done! Now calling `enqueueBlockBreak` with correct arguments will cause our block to break after a given delay, optionally dropping its items.

## 💥 Custom actions

To create a new `LevelAction`, you're going to have to create a new type for it as well.

When creating a new action, you should pick one of the following options:
- `ContinuousLevelAction` *(extends RunnableLevelAction)* for actions that will be called every tick until they are done;
- `RunnableLevelAction` for any action that will be fired on next server tick, or after a certain period of time;
- `LevelAction` a generic level action not doing anything on its own. Might be useful if you can call static `LevelAction.write` and `LevelAction.read` methods to read/write the action whereever you need it.

Let's create a continuous action that will be ran while the world is ticking and spawning particles on player's position until the player dies.

First off, let's declare our action class:
```java
import net.minecraft.nbt.CompoundTag;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.level.Level;
import org.zeith.hammerlib.abstractions.actions.*;

public class ParticleAction
		extends ContinuousLevelAction
{
	public ParticleAction(ILevelActionType type)
	{
		super(type);
	}
	
	@Override
	public boolean isDone()
	{
		return false;
	}
	
	@Override
	public void run(ServerLevel level)
	{
		
	}
	
	@Override
	public CompoundTag write(Level level)
	{
		CompoundTag nbt = new CompoundTag();
		
		return nbt;
	}
}
```

Now let's add our player information in here...
```java
public class ParticleAction
		extends ContinuousLevelAction
{
	protected final UUID playerId;
	
	public ParticleAction(ILevelActionType type, UUID playerId)
	{
		super(type);
		this.playerId = playerId;
	}
    ...
```

Write a method to get ServerPlayer from ServerLevel...
```java
@Nullable // <- This is here just to make it obvious that the player may not be online.
protected ServerPlayer getPlayer(ServerLevel level)
{
	return level.getServer().getPlayerList().getPlayer(playerId);
}
```

Afterwards, we need to add a way to stop the action at some point...
```java
public class ParticleAction
		extends ContinuousLevelAction
{
	protected final UUID playerId;
	protected boolean isPlayerDead;

    ...
```

```java
...

@Override
public boolean isDone()
{
	return isPlayerDead;
}

...
```

Now the particle spawning part and completing the task if player dies:
```java
@Override
public void run(ServerLevel level)
{
	var player = getPlayer(level);
	if(player == null) return;
	
	if(player.isDeadOrDying())
	{
		isPlayerDead = true;
		return;
	}
	
	var rng = player.getRandom();
	var pos = player.position();
	
	float xSpread = 0.3F;
	float ySpread = 0.125F;
	float zSpread = 0.3F;
	int particleCount = rng.nextInt(1, 3);
	float speed = rng.nextFloat() * 0.01F + 0.005F;
	
	level.sendParticles(ParticleTypes.FLAME, pos.x, pos.y + 0.125F, pos.z, particleCount, xSpread, ySpread, zSpread, speed);
}
```

Finally, we need NBT writing code...
```java
@Override
public CompoundTag write(Level level)
{
	CompoundTag nbt = new CompoundTag();
	nbt.putUUID("Player", playerId);
	nbt.putBoolean("IsDead", isPlayerDead);
	return nbt;
}
```

### ⚓ ILevelActionType

Action types are factories for creating (reading) action instances from NBT into runtime.

Let's continue our example above and write a type for it! *(I prefer keeping the types inside instances for easier readability, but feel free to make it any way you like!)*

First off we need a custom constructor for `ParticleAction` to read from NBT:
```java
public ParticleAction(ILevelActionType type, Level level, CompoundTag tag)
{
	this(type, tag.getUUID("Player"));
	this.isPlayerDead = tag.getBoolean("IsDead");
}
```

```java
ILevelActionType TYPE = new ILevelActionType()
{
    @Override
    public LevelAction read(Level level, CompoundTag tag)
    {
        var id = tag.getUUID("Player");
        ParticleAction action = new ParticleAction(this, id);
        action.isPlayerDead = tag.getBoolean("IsDead");
        return action;
    }
};
```

And obviously it must be registered, I recommend using [@SimplyRegister](/docs/api/hammerlib/basics/content_registration) and creating a new interface `ModLevelActionTypes`.
```java
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.level.Level;
import org.zeith.hammerlib.abstractions.actions.*;
import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModLevelActionTypes
{
	@RegistryName("continuous_particles")
	ILevelActionType CONTINUOUS_PARTICLES = new ILevelActionType()
	{
		@Override
		public LevelAction read(Level level, CompoundTag tag)
		{
			return new ParticleAction(this, level, tag);
		}
	};
}
```

### 👀 Upcoming

Instead of having to create new instances of ILevelActionType as separate classes,  starting from .28 builds HammerLib will have `ILevelActionType.simple`, which is going to simplify the above code into:

```java
@RegistryName("continuous_particles")
ILevelActionType CONTINUOUS_PARTICLES = ILevelActionType.simple(ParticleAction::new);
```

Notice how we got rid of the annonymous class altogether and replaced it with lambda.

### 🗺️ The complete example

```java
import net.minecraft.core.particles.ParticleTypes;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.Nullable;
import org.zeith.hammerlib.abstractions.actions.ContinuousLevelAction;
import org.zeith.hammerlib.abstractions.actions.ILevelActionType;

import java.util.UUID;

public class ParticleAction
		extends ContinuousLevelAction
{
	protected final UUID playerId;
	protected boolean isPlayerDead;
	
	public ParticleAction(Player player)
	{
		this(ModLevelActionTypes.CONTINUOUS_PARTICLES, player.getGameProfile().getId());
	}
	
	public ParticleAction(ILevelActionType type, UUID playerId)
	{
		super(type);
		this.playerId = playerId;
	}
	
	public ParticleAction(ILevelActionType type, Level level, CompoundTag tag)
	{
		this(type, tag.getUUID("Player"));
		this.isPlayerDead = tag.getBoolean("IsDead");
	}
	
	@Nullable // <- This is here just to make it obvious that the player may not be online.
	protected ServerPlayer getPlayer(ServerLevel level)
	{
		return level.getServer().getPlayerList().getPlayer(playerId);
	}
	
	@Override
	public boolean isDone()
	{
		return isPlayerDead;
	}
	
	@Override
	public void run(ServerLevel level)
	{
		var player = getPlayer(level);
		if(player == null) return;
		
		if(player.isDeadOrDying())
		{
			isPlayerDead = true;
			return;
		}
		
		var rng = player.getRandom();
		var pos = player.position();
		
		float xSpread = 0.3F;
		float ySpread = 0.125F;
		float zSpread = 0.3F;
		int particleCount = rng.nextInt(1, 3);
		float speed = rng.nextFloat() * 0.01F + 0.005F;
		
		level.sendParticles(ParticleTypes.FLAME, pos.x, pos.y + 0.125F, pos.z, particleCount, xSpread, ySpread, zSpread, speed);
	}
	
	@Override
	public CompoundTag write(Level level)
	{
		CompoundTag nbt = new CompoundTag();
		nbt.putUUID("Player", playerId);
		nbt.putBoolean("IsDead", isPlayerDead);
		return nbt;
	}
}
```

```java
import org.zeith.hammerlib.abstractions.actions.ILevelActionType;
import org.zeith.hammerlib.annotations.RegistryName;
import org.zeith.hammerlib.annotations.SimplyRegister;

@SimplyRegister
public interface ModLevelActionTypes
{
	@RegistryName("continuous_particles")
	ILevelActionType CONTINUOUS_PARTICLES = ILevelActionType.simple(ParticleAction::new);
}
```