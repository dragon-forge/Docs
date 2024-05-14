---
sidebar_position: 0
---

# 📝 Registration
In this page we're going to see how geometries are stored, registered and accessed.

## 🪣 Geometry storage
Similarly to animations, geometries are stored in container files (usually with `.geo.json` suffix)
Each container may have only one model stored inside.

To register a given geometry container into the game, HammerAnimation provides a separate registry.

Each element of said registry is an instance of `org.zeith.hammeranims.api.geometry.IGeometryContainer`.

:::tip
HammerLib already provides us with a simple content registration pipeline (see [`📝 Content Registration`](/docs/api/hammerlib/basics/content_registration))

This is what we're going to use to get models registered properly and easily.
:::

## ☕ Registration (Java)

### ⌨️ ModGeometries Class
To store our geometry containers, create an interface `ModGeometries` inside your init package.

The result should look something like this:
```java
package com.yourname.yourmod.init;

import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModGeometries
{
}
```

### 📦 Adding containers
To add a new geometry container into the mod, simply create a new field inside `ModGeometries` containing the return value of `IGeometryContainer.create()`, and annotating the field with `@RegistryName("name")`. The "name" must be unique.
```java
package com.yourname.yourmod.init;

import org.zeith.hammeranims.api.geometry.*;
import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModGeometries
{
    @RegistryName("your_model")
    IGeometryContainer YOUR_MODEL = IGeometryContainer.create();
}
```

## 🔃 Resource loading
To make the models actually load, you need to put the geometry files into your mod's resources.

They are generally stored in `/assets/yourmod/bedrock/geometry/` folder.

Thus, the model from our example should be located at `/assets/yourmod/bedrock/geometry/your_model.geo.json`.
:::tip
If you want to simplify the `.geo.json` suffix to just `.json`, replace `IGeometryContainer.create()` call with `IGeometryContainer.createNoSuffix()`
:::

## 📤 Getting models from container
Your geometry container is now loaded into the game.
But what can we do with it?

There are two models (both subclasses of `IGenericModel`) that get created upon loading a geometry file:
- `IGeometricModel` (CLIENT SIDE ONLY) - a renderable model reference, containing all boxes.
  - Obtainable via `IGeomeryContainer.createModel`, please refer to [🍋 Generic Rendering](./generic_rendering) on the proper handling of this.
- `IPositionalModel` (Universal) - usable on both client and server to calculate exact position (with offset) of any given bone.
  - Obtainable via `IGeomeryContainer.getPositionalModel`

Applying an animation system to a model must be done before rendering the model, or before obtaining positional data for bones:
```java
IGenericModel model = ...
AnimationSystem system = ...
float partialTime = 1F; // 1 for positional stuff. For rendering, you can use your partialTime provided by Minecraft.

model.applySystem(partialTime, system);

...
```

Alternatively, there is `void applySystem(float partialTime, AnimationSystem system, Predicate<AnimationLayer> layerMask)` which allows filtering out bones to be animated.

If you want to apply multiple systems....
```java
float partialTime = ...
IGenericModel model = ...

AnimationSystem system1 = ...
AnimationSystem system2 = ...

GeometryPose pose = model.emptyPose(); // resets model pose and retrieves its default pose.
// Or you can create a new GeometryPose. That works too.

system1.applyAnimation(partialTime, pose);
system2.applyAnimation(partialTime, pose);

model.applyPose(pose); // Apply the bone transforms from the pose to the model.
```

If you are creating a new GeometryPose, you may reuse it for multiple models.

When creating clothing system, you might find that creating a pose and applying entity animation system just once, then applying the pose to the entity model and all of the armor sub-models would be much more time-efficient and cause less overall computations to be performed.

## 🌐 IPositionalModel

HammerAnimations provides a way to get the global position with any offset of a given bone, even with animations applied.
This allows calculating forward directions, relative offsets and much more.

This must be done with `IPositionalModel` as it does not store the actual boxes, only the bone positions and their relations.

`IPositionalModel` offers one key method to calculating bone position...
- `IPositionalModel.applyBoneTransforms(@Nonnull Matrix4f base, String bone);` (returns boolean)

This method takes in a base (JOML) `Matrix4f` and cascades all parent bones of the input bone to be applied in the correct order.

You will have to make the Matrix4f yourself, but here is an example that is both memory efficient and simple enough:
```java
protected final Matrix4f mat = new Matrix4f(); // created once per entity/tile

public Vec3 getGlobalPos(String bone, Vec3 offset)
{
	Vec3 worldPos = Vec3.atBottomCenterOf(worldPosition);
	
	mat.identity()
			.translate((float) worldPos.x, (float) worldPos.y, (float) worldPos.z)
	// You might want to add rotation around Y axis here:
	//		.rotateY((float) (Mth.DEG_TO_RAD * 0))
	;
	
	// Replace this with your model
	IPositionalModel posMod = ModGeometries.YOUR_MODEL.getPositionalModel();
	
	// Apply the system to our model
	posMod.applySystem(1F, animations);

	// Apply transforms to our matrix
	if(posMod.applyBoneTransforms(mat, bone))
	{
		Vector3f relativePos = new Vector3f((float) offset.x, (float) offset.y, (float) offset.z);
		mat.transformPosition(relativePos);
		return new Vec3(relativePos.x, relativePos.y, relativePos.z);
	}
	
	// Bone not found, we just take in the base pos...
	return worldPos.add(offset);
}
```