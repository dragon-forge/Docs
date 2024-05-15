---
sidebar_position: 3
---

# 🧱 Particle components

Whenever creating a particle effect, it will always be composed of so-called "components".

There is a `"components"` JSON object inside every effect that describes its behavior.

```json
{
	"format_version": "1.10.0",
	"particle_effect": {
		"components": {
			"minecraft:emitter_lifetime_once": {
				"active_time": 1
			},
			...
		}
```
Here we have a component`minecraft:emitter_lifetime_once`, which has active time set to 1 second. The duration may be either a constant (as shown here), or an expression.

Now, asides vanilla components, HammerAnimation offers a bit on top!

## 🎆 Particle sub-emitter
- Component ID: `hammeranims:particle_expiry_sub_emitter`

This component will create a new emitter by the ID upon particle expiry.

Fields:
- (required) `sub_emitter` (ResourceLocation) - the ID of the effect to spawn.
- (optional) `offset` (Number[3]) - the offset relative to the particle where to spawn the system. Elements may either be constants, or  expressions.

Example:
```json
{
	"format_version": "1.10.0",
	"particle_effect": {
		"components": {
			"hammeranims:particle_expiry_sub_emitter": {
				"sub_emitter": "hammeranims:poof",
				"offset": [ 0, "math.random(-1, 1)", 0 ]
			},
			...
		}
```

:::danger Recursivity
Please avoid too many recursive emitters, or you're risking causing major lags.
To prevent infinite recursions, HammerAnimations imposes a strict limit to 6 generations of emitters.

As an emitter spawns sub-emitter, the generation is incremented for sub-emitter.
When crossing the limit, new sub-emitters will not spawn.
:::