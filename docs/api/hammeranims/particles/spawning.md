---
sidebar_position: 1
---

# ✨ Spawning particles

When you have a particle, it's only logical to spawn it somehow.

Let's see a few ways you could do it...

### 📦 Java Code

To spawn particles, HammerAnimations offers a simple class `BedrockParticleSpawner`.
:::tip Note
`BedrockParticleSpawner` is supposed to be called from server side, and will send a single packet to clients who are tracking the position of the particle.
:::

Currently, `BedrockParticleSpawner` offers these methods:
- `void spawnAt(ServerLevel world, Vec3 pos, IParticleContainer effect)`
- `void spawnAt(ServerLevel world, Vec3 pos, ResourceLocation effect)`
- `void spawnAt(IAnimatedObject pos, IParticleContainer effect)`
- `void spawnAt(IAnimatedObject pos, ResourceLocation effect)`

### ⚙️ Commands

You can spawn particles via commands, using the `/bedrockmc` command.

Here is an example of spawning poof particle:
- `/bedrockmc particle spawn hammeranims:poof`

And here is an example of that, but with an offset:
- `/bedrockmc particle spawn hammeranims:poof ~ ~1 ~`