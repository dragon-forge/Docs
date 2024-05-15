---
sidebar_position: 0
---

# 📝 Registration
In this page we're going to see how particles are stored, registered and accessed.

## 🪣 Particle storage
As usual, particles are stored in container files (usually with `.particle.json` suffix)
Each container may have only one effect stored inside.

To register a given particle container into the game, HammerAnimation provides a separate registry.

Each element of said registry is an instance of `org.zeith.hammeranims.api.particles.IParticleContainer`.

:::tip
HammerLib already provides us with a simple content registration pipeline (see [`📝 Content Registration`](/docs/api/hammerlib/basics/content_registration))

This is what we're going to use to get particles registered properly and easily.
:::

Additionally, there is resource-driven (not data-driven!) way of loading additional particles without explicitly registering them, but this is advised to be kept for resource pack makers only.

## ☕ Registration (Java)

### ⌨️ ModParticles Class
To store our particle containers, create an interface `ModParticles` inside your init package.

The result should look something like this:
```java
package com.yourname.yourmod.init;

import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModParticles
{
}
```

### 📦 Adding containers
To add a new particle container into the mod, simply create a new field inside `ModParticles` containing the return value of `IParticleContainer.create()`, and annotating the field with `@RegistryName("name")`. The "name" must be unique.
```java
package com.yourname.yourmod.init;

import org.zeith.hammeranims.api.particles.*;
import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModParticles
{
    @RegistryName("your_particle")
    IParticleContainer YOUR_MODEL = IParticleContainer.create();
}
```

## 🔃 Resource loading
To make the particles actually load, you need to put the effect files into your mod's resources.

They are generally stored in `/assets/yourmod/bedrock/particles/` folder.

Thus, the particle effect from our example should be located at `/assets/yourmod/bedrock/particles/your_particle.particle.json`.
:::tip
If you want to simplify the `.particle.json` suffix to just `.json`, replace `IParticleContainer.create()` call with `IParticleContainer.createNoSuffix()`
:::