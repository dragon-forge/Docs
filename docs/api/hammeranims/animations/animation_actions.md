---
sidebar_position: 3
---

# 🏃‍♂️ AnimationAction
If you want to perform an action after the animation is done player, you would want to look into using `AnimationAction`.

It is separated into action types and instances. Type is responsible for creating and executing action instance, while the instance itself is tasked with holding and serializing context information applicable to your action.

If you don't need to store much information, you can just use an empty default `AnimationActionInstance`. It still offers storage of data through NBT, using `AnimationActionInstance.getExtra()` method (you can create instance with extra data and execute it that way).

If you want to create custom action instance for storing data, you will need to override `AnimationAction.createInstance` method to return a new unconfigured instance of your action.

## ☕ Registration (Java)

### ⌨️ ModAnimations Class
To bind actions, create an interface `ModAnimationActions` inside your init package.

The result should look something like this:
```java
package com.yourname.yourmod.init;

import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModAnimationActions
{
}
```

### 📦 Adding action types
To add a new animation container into the mod, simply create a new field inside `ModAnimationActions` of type `AnimationAction`, assign it a new AnimationAction type instance, and annotating the field with `@RegistryName("name")`. The "name" must be unique.
```java
package com.yourname.yourmod.init;

import org.zeith.hammeranims.api.animation.*;
import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModAnimationActions
{
    @RegistryName("my_action")
    AnimationAction MY_ACTION = new MyAnimationAction();
}
```

## 🆕 Creating action type
To start off, let's create a new action type: `MyAnimationAction`, it will damage information to indicate how much damage to deal to nearby entities, and radius of action.

### AnimationActionInstance
Our class will be named `MyActionInstance`. It requires a default constructor with the action type, here's the example of our action:
```java
public class MyActionInstance
		extends AnimationActionInstance
{
	public float damage;
	public float range;
	
	public MyActionInstance(AnimationAction action)
	{
		super(action);
	}
	
	public MyActionInstance configure(float damage, float range)
	{
		this.damage = damage;
		this.range = range;
		return this;
	}
	
	@Override
	public CompoundTag serializeNBT()
	{
		var tag = super.serializeNBT();
		tag.putFloat("Damage", damage);
		tag.putFloat("Range", range);
		return tag;
	}
	
	@Override
	public void deserializeNBT(CompoundTag nbt)
	{
		this.damage = nbt.getFloat("Damage");
		this.range = nbt.getFloat("Range");
		super.deserializeNBT(nbt);
	}
}
```

### AnimationAction
In our action type class, let's implement the first required method (`execute`):
```java
@Override
public void execute(AnimationActionInstance instance, AnimationLayer layer)
{
    var owner = layer.system.owner;
    if(instance instanceof MyActionInstance inst)
    {
        var world = owner.getAnimatedObjectWorld();
        
        DamageSource source;
        if(owner instanceof LivingEntity living)
            source = world.damageSources().mobAttack(living);
        else
            source = world.damageSources().magic();
        
        var pos = owner.getAnimatedObjectPosition();
        var hitBox = new AABB(pos, pos).inflate(inst.range);
        for(var ent : world.getEntitiesOfClass(LivingEntity.class, hitBox))
        {
            // Don't damage ourselves!
            if(owner == ent) continue;
            
            ent.hurt(source, inst.damage);
        }
    }
}
```

And finally, in order for the execution to happen, we definitely need to change the associated action instances:
```java
@Override
protected @NotNull MyActionInstance createInstance()
{
	return new MyActionInstance(this);
}
```

While we're at it, consider creating a helper method to create configured and bound action instances:
```java
public static AnimationActionInstance create(float damage, float range)
{
	return new MyActionInstance(ModAnimationActions.MY_ACTION).configure(damage, range);
}
```

## 🎬 Using AnimationAction

To add your action into an animation's finish action list, simply call `ConfiguredAnimation.onFinish`, passing a configured action instance:

```java
ModAnimations.MY_ANIMATION.configure().onFinish(MyAnimationAction.create(4, 12));
```