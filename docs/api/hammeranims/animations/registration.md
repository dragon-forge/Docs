---
sidebar_position: 1
---

# 📝 Registration
In this page we're going to see how animations are stored, registered and accessed.

## 🪣 Animation storage
Bedrock animations are stored in animation container files (usually with `.animation.json` suffix)
Each container may have one or more animations stored inside them. Said animations are what HammerAnimation uses to animate geometries.

To register a given animation container into the game, HammerAnimation provides a separate registry.

Each element of said registry is an instance of `org.zeith.hammeranims.api.animation.IAnimationContainer`.

:::tip
HammerLib already provides us with a simple content registration pipeline (see [`Content Registration`](/docs/api/hammerlib/basics/content_registration))

This is what we're going to use to get animations registered properly and easily.
:::

## ☕ Registration (Java)

### ⌨️ ModAnimations Class
To store our animation containers, create an interface `ModAnimations` inside your init package.

The result should look something like this:
```java
package com.yourname.yourmod.init;

import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModAnimations
{
}
```

### 📦 Adding containers
To add a new animation container into the mod, simply create a new field inside `ModAnimations` containing the return value of `IAnimationContainer.create()`, and annotating the field with `@RegistryName("name")`. The "name" must be unique.
```java
package com.yourname.yourmod.init;

import org.zeith.hammeranims.api.animation.*;
import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModAnimations
{
    @RegistryName("your_animation")
    IAnimationContainer YOUR_ANIMATION = IAnimationContainer.create();
}
```

## 🔃 Resource loading
To make the animation actually load, you need to put the animation into your mod's resources.

They are generally stored in `/assets/yourmod/bedrock/animations/` folder.

Thus, the animation from our example should be located at `/assets/yourmod/bedrock/animations/your_animation.animation.json`.
:::tip
If you don't want to simplify the `.animation.json` suffix to just `.json`, replace `IAnimationContainer.create()` call with `IAnimationContainer.createNoSuffix()`
:::

## 📤 Getting animations from container
Your animation container is now loaded into the game.
Question is, how do you get the animation out of the container?

It's surprisingly simple, actually.
After creating the animation container inside our interface, we may then use the container as `IAnimationSource` directly and send it into the `AnimationSystem` or what have you.
This, however, is going to work ONLY IF the animation container has EXACTLY ONE (1) animation inside the container.

For multiple animations per container, `AnimationHolder` would come in handy.
We could make one by calling `YOUR_ANIMATION.holder("anim")` and store its result in a final field. This holder will dynamically retrieve the animation, even after a reload.

Say, our example animation container has animations "idle" and "walk" inside it. We could extract them and store as fields (that we're going to be referencing elsewhere):
```java
package com.yourname.yourmod.init;

import org.zeith.hammeranims.api.animation.*;
import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModAnimations
{
    @RegistryName("your_animation")
    IAnimationContainer YOUR_ANIMATION = IAnimationContainer.create();
    
    AnimationHolder YOUR_ANIMATION_IDLE = YOUR_ANIMATION.holder("idle");
    AnimationHolder YOUR_ANIMATION_WALK = YOUR_ANIMATION.holder("walk");
}
```

Both `IAnimationContainer` and `AnimationHolder` implement `IAnimationSource` internally, which provides `ConfiguredAnimation configure()` method, as well as `AnimationLocation getLocation()`.

## 🗺️ AnimationLocation

This class is responsible for pointing to a specific animation inside a container.
It's like a `ModelResourceLocation` inside Minecraft, but instead of pointing to a model variant (ex. "inventory"), our location points to a name inside the container.

The `toString()` result of calling on `AnimationLocation` from `ModAnimations.YOUR_ANIMATION_IDLE.getLocation()` should be `yourmod:your_animation!idle`.

There is also a method of resolving animation from location inside the class, `Optional<Animation> resolve()`.
It's going to return an animation if and only if the animation container is registered, and the animation name exists inside the container.

The returned animation does not change after calling `/hammeranims reload`, so avoid storing its result long-term. Store `AnimationHolder` instead. (where possible)