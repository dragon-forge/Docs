---
sidebar_position: 2
---

# 🔧 ConfiguredAnimation
This is a class that stores a lot of configurations for an animation.
:::danger
This is a **mutable** class, so please be careful of where you're using it, and be sure to copy it whenever necessary!
:::

## 🫴 Obtaining instance
Generally speaking, you should either create instances in one of two ways:
- `new ConfiguredAnimation(ConfiguredAnimation toCopy)` - copying constructor.
- `IAnimationSource.configure()` - Called on `IAnimationContainer`, `AnimationHolder` or `Animation`.

## ⚙️ Settings
These are all functions that may be adjusted to your liking on any animation.
- `weight(float weight)` - Adjusts the weight of a given animation. 0 negates any effects of the animation, rendering it invisible. 1 is normal weight.
- `speed(float speed)` - Changes how fast the animation plays. Increasing the speed reduces the duration.
- `startTime(float startTime)` - Shifts the starting point of animation. Say, if your animation pull the sword to the player's back from 0s to 1s, and then swings it afterwards (from 1s), and if you want to skip the sword drawing part, swinging immediately, then you would set the `.startTime(1)`
- `freezeAt(float time)` - Starts the animation at given time and freezes it. Same as `.startTime(time).speed(0.0f)`.
- `reversed(boolean reverse)` and `reversed()` - Allows animation to play backwards. Useful in cases where the animation holds on last frame. Say, you pull the stick from the pocket and position it forwards. Instead of writing the reverse animation, you could just make the animation reversed and it is going to pull the stick back.
- `transitionTime(float transitionTime)` and `transitionTime(Duration transitionTime)` - Configures how quickly this animation takes over the last active animation. Useful when items change and animations must be instantly swapped, then setting the transitionTime to 0 is the solution. The default value is `0.25F`.
- `timeFunction(TimeFunctionInstance timeFunction)` - Changes how time flows on this animation. One example of this is animation time normalization, using `DefaultsHA.NORMALIZED_TIME.of(float time)` function, which will make the animation duration fixed, thus speeding/slowing it up/down depending on its original duration.
- `mask(SerializableMask mask)` - Applies a mask to this animation. See [`⚙️ SerializableMask`](#️-serializablemask)
- `loopMode(LoopMode loopMode)` - Overrides the animation loop mode. Has 3 values:
  - `LoopMode.ONCE` - Shows the first frame after the animation was completed;
  - `LoopMode.HOLD_ON_LAST_FRAME` - Holds on last frame after the animation was completed.
  - `LoopMode.LOOP` - Loops the animation to the first frame after it reaches the last frame.
- `important(boolean important)` and `important()` - Forces this animation to start on the layer even if this animation is configured in exactly the same way otherwise.
- `onFinish(AnimationActionInstance action)` - Adds an action that will be ran once this animation is complete.
- `next(ConfiguredAnimation next)` - Specifies the next animation to start after this one is complete. Does not work with looping animations!

### 🎭 SerializableMask
This class allows excluding bones from animation, or adjusting weights for individual bones.

To create a mask, call `SerializableMask.builder()` to create a new instance of a builder.
After you're done configuring the builder, call `.build()`

There are a few methods to configure a mask through a builder:
- `exclude(String bone)` - Excludes passed bone from being animated.
- `excludeAll(String... bones)` - Excludes passed in bones from being animated.
- `excludes(Collection<? extends String> excludes)` - Excludes passed in bones from being animated.
- `boneWeight(String bone, float weight)` - Adjusts weight to one specific bone.

Here's an example:
```java
SerializableMask mask = SerializableMask.builder()
		.exclude("Head")
		.excludeAll("LeftLeg", "RightLeg")
		.boneWeight("RightArm", 0.5F)
		.build();
```