---
sidebar_position: 2
---

# ⚙️ Commands

## 📃 Everything of importance

### ✨ `/bedrockmc particle spawn`
You can spawn particles via commands, using the `/bedrockmc` command.

Here is an example of spawning poof particle:
- `/bedrockmc particle spawn hammeranims:poof`

And here is an example of that, but with an offset:
- `/bedrockmc particle spawn hammeranims:poof ~ ~1 ~`

### ❓ `/execute` extras
If you have a custom particle, offered by a resource pack, you might want to check if player has it for any reason, you can use the extra execute condition provided by HammerAnimations out of box:

This command will fire because HammerAnimaations provides the `poof` effect:
- `/execute if hasbedrockparticle hammeranims:poof run say hi`

This command will fail since the `poof` exists:
- `/execute unless hasbedrockparticle hammeranims:poof run say hi`

This accepts any id, and the tab completions are based on the java-registered effects plus the local effects you have added with resource packs.

### 🔁 `/hammeranims reload`
If you're have local changes in your resource pack, you can reload only HammerAnimations content.

By executing `/hammeranims reload`, your game will reload all animations, geometries and particle effects in background.

This comes in handy when working on a resource pack, allowing better fine-tuning of things without waiting for entire resource stack to reload.