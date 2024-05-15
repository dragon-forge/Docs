---
sidebar_position: 0
---

# 🌟 Custom Particles
In this page we're going to see how particles are stored, registered and accessed.

## 🎁 Registration (Resource Packs)
Although this is perfectly possible within a mod (And HammerAnimations does it too for sanity checking), this is suggested to be kept for resource packs.

With that out of the way, first of all you're going to need to make a new json file letting HammerAnimations know what to load...
The file in question will ALWAYS be located in `/assets/hammeranims/bedrock/custom_particles.json`
Put all extra particle effects that you wish to load.

Example:
```json
{
  "load": [
    "yourmod:tornado"
  ]
}
```

This loads particle effect from `/assets/yourmod/bedrock/particles/tornado.particle.json` when reloading resource packs, or via `/hammeranims reload`.

## 🔃 Resource loading
To make the particles actually load, you need to put the effect files into your mod's resources.

They are generally stored in `/assets/yourmod/bedrock/particles/` folder.

Thus, the particle effect from our example should be located at `/assets/yourmod/bedrock/particles/your_particle.particle.json`.
:::tip
If you want to simplify the `.particle.json` suffix to just `.json`, replace `IParticleContainer.create()` call with `IParticleContainer.createNoSuffix()`
:::