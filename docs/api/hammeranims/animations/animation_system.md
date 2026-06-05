---
sidebar_position: 2
---

# 💃 Animation Systems
What are they and how they play?

## Essentials
Running our newly registered animations requires an object that may combine multiple animations, transition between them and keep them in sync between server and clients.

This is where `AnimationSystem` comes into play.

### 🪨 IAnimatedObject
Your animated object must implement `IAnimatedObject`.
HammerAnimations provides you with two presets to use:
- `IAnimatedEntity` for entities with animation system
- `IAnimatedTile` for block entities (or tile entities) with animation system
Implementing your own object type does mean that you're going to need to register `IObjectSource` from HammerLib.
:::info
If you're using HammerMultipart, there is `PartSourceType` provide `IObjectSource<PartEntity>` using `PartSourceType.of(PartEntity part)` method.
:::

Any animation system has one or more animation layers inside it, used to play and update animations.

### 🥬 Animation Layers
Each animation layer stores active animation, while also having some configuration on its part.


## ☕ Creating animation system

To create and store a new instance of `AnimationSystem` for your object, create it as following:
```java
protected final AnimationSystem animations;

public MyAnimatedObject(...) {
    super(...);
    this.animations = AnimationSystem.create(this);
}
```

To update your newly created system, you must update it every game tick.
In our example we are using `TileSyncableTickable` as base, so we're going to add ticking code into `update` method.
```java
@Override
public void update()
{
    super.update();
    animations.tick();
}
```

## ⚙️ Configuring
To configure the animation system, our object must override `setupSystem` method.

### 🧱 AnimationSystem.Builder
Defaults:
- canSync: true
- autoSync: true
- syncTime: false
- defaultUseNanoTime: true
- geometry: none

AnimationSystem.Builder has the following methods:
- `disableSync()` - completely disable all synchronization of this AnimationSystem;
- `addLayers(AnimationLayer.Builder... layers)` - register multiple animation layers into the system;
- `addHeadLookLayer()` - Used for entites that have a head, adds minecraft head rotation element to the animation system for you;
- `geometry(IGeometryContainer geo)` - Used in bone position calculations that are provided by default methods inside `IAnimatedObject`;
- **Deprecated methods:** 
  - `syncTime(boolean syncTime)` - toggles if the animation time should be synchronized;
  - `autoSync(boolean autoSync)` - toggle if animation system should sync to clients when animation on any given layer changes. Does not matter when `disableSync()` is called;
  - `canSync(boolean canSync)` - toggle if the animation system can perform any sort of sync;
  - `defaultUseNanoTime(boolean defaultUseNanoTime)` - toggle if the animation system should use nanosecond time. Enabled by default since it eliminates visual stutters that happened with tick-based approach;

### 🧱 AnimationLayer.Builder
AnimationLayer.Builder is created with `AnimationLayer.builder(String name)` method
:::tip
It is recommended to use layer names provided by `CommonLayerNames` when possible!
:::

Defaults:
- query: global query instance (One instance per animation system, provided by `IAnimatedObject.createQuery()`)
- mask: none (permit all bone transforms)
- weight: 1
- blendMode: ADD
- allowAutoSync: true
- persistent: true
- useNanoTime: inherited from AnimationSystem
- defaultTransitionTime: 0.25 seconds
- initialAnimation: none

AnimationLayer.Builder provides following methods:
- `query(Query query)` - used for providing additional information to animations using formulas;
- `mask(ILayerMask mask)` - restricts animations playing on this layer based on a bone name predicate;
- `weight(float weight)` - adjusts the weight of all animations played on this layer in range of `[0; 1]`. This value gets multiplied by the weight of invidual animation for a final weight result;
- `blendMode(BlendMode blendMode)` - changes how animation from this layer blends with all layers prior to current one; The options for blending are:
  - `BlendMode.OVERRIDE` - Replace bone transforms from previous layer (this also counts weights from both layer and animation, lerping the transforms) with this layer. Affects only those bones which are currently being animated;
  - `BlendMode.ADD` (default) - Adds the bone transforms on top of all previous layers. This is generally the recommended behavior to use;
  - `BlendMode.SUBTRACT` - Subtracts the bone transforms. This is kind of like setting negative weight to the layer. More of a proof of concept, but may be useful to some;
- `allowAutoSync(boolean allowAutoSync)` and `preventAutoSync()` - determines if this layer should cause animation system to sync when a different animation is started on this layer. Only matters if the AnimationSystem owning this layer has synchronization AND auto-sync enabled;
- `persistent(boolean persistent)` and `nonPersistent()` - determines if the animation layer should be stored to disk. This also prevents it from being synchronized when the animation system performs sync;
- `query(Query q)` and `defaultQuery(Query q)` - set the query object (or the default one, if none are provided) for this animation layer. `defaultQuery` gets called by AnimationSystem's build event, when assigning the global query instance created from `IAnimatedObject`;
- `useNanoTime(boolean useNanoTime)` - toggle if this layer should use nano time or the tick-based approach;
- `defaultTransitionTime(float defaultTransitionTime)` - changes the default transition time for the animations that have been started with `IAnimationSource` interface instead of `ConfiguredAnimation`;
- `initialAnimation(IAnimationSource initialAnimation)` or `initialAnimation(ConfiguredAnimation initialAnimation)` - set the starting animation on this layer to be displayed as soon as the animation system constructs. Can be used to setup spawn animations;

### ☕ Writing `setupSystem`
Here is an example of animation system which has unsynced ambient layer, as well as synced action layer:
```java
@Override
public void setupSystem(AnimationSystem.Builder builder)
{
    builder.addLayers(
        AnimationLayer.builder(CommonLayerNames.AMBIENT).preventAutoSync(),
        AnimationLayer.builder(CommonLayerNames.ACTION)
    ).autoSync();
}
```

## ✅ Complete example
```java
package com.storyteam.storytelling.content.tiles;

import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;
import org.zeith.hammeranims.api.animsys.*;
import org.zeith.hammeranims.api.animsys.layer.AnimationLayer;
import org.zeith.hammeranims.api.tile.IAnimatedTile;
import org.zeith.hammerlib.tiles.*;

public class MyTile
        extends TileSyncableTickable
        implements IAnimatedTile
{
    protected final AnimationSystem animations = AnimationSystem.create(this);
    
    public MyTile(BlockEntityType<?> type, BlockPos pos, BlockState state)
    {
        super(type, pos, state);
    }
    
    @Override
    public void update()
    {
        super.update();
        animations.tick();
    }
    
    @Override
    public void setupSystem(AnimationSystem.Builder builder)
    {
        builder.addLayers(
            AnimationLayer.builder(CommonLayerNames.AMBIENT).preventAutoSync(),
            AnimationLayer.builder(CommonLayerNames.ACTION)
        ).autoSync();
    }
    
    @Override
    public AnimationSystem getAnimationSystem()
    {
        return animations;
    }
    
    @Override
    public void saveAdditional(CompoundTag nbt)
    {
        super.saveAdditional(nbt);
        nbt.put("Animations", animations.serializeNBT());
    }
    
    @Override
    public void load(CompoundTag nbt)
    {
        super.load(nbt);
        animations.deserializeNBT(nbt.getCompound("Animations"));
    }
}
```
:::tip
`TileSyncableTickable` and `TileSyncable` both use [NBTSerializationHelper](/docs/api/hammerlib/advanced/nbt_serialization) for reading&writing data.

Instead of writing `saveAdditional(CompoundTag nbt)` and `load(CompoundTag nbt)` methods, you can put an annotation onto the animation system field:
```java
@NBTSerializable("Animations")
protected final AnimationSystem animations = AnimationSystem.create(this);
```
:::

Now our tile is set up with animation system and is ready to run all of your wonderful animations!

## ⏯️ Playing animations

Now that we have our animation system, as well as [animations](/docs/api/hammeranims/animations/registration#-getting-animations-from-container), they can be started in a multitude of ways.

We're going to be starting them via `startAnimationAt(String layer, ConfiguredAnimation|IAnimationSource animation)` method.
```java
animations.startAnimationAt(CommonLayerNames.AMBIENT, ModAnimations.YOUR_ANIMATION_IDLE);
```
This is going to start the idle animation on the `AnimationSystem` (you can put it into tick function), using default transition time for that layer.

The animation itself will not restart unless it is a different animation from currently running animation, or the ConfiguredAnimation has `important` flag set to true.

If we'd like to restart or configure the animation, you're going to need to configure the animation source:
```java
animations.startAnimationAt(CommonLayerNames.AMBIENT, ModAnimations.YOUR_ANIMATION_IDLE.configure());
```
There are a few calls that could be chained after `.configure()`, you can [see them here](/docs/api/hammeranims/animations/configured_animation#%EF%B8%8F-settings).