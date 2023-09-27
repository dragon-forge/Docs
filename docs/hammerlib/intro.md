---
sidebar_position: 1
---

# Getting Started

:::danger Warning!
This documentation describes HammerLib 1.19.2 and newer.
:::

With that being said...
## Prerequisites!

### mods.toml
Add this piece of code to your `mods.toml`:
```toml
[[dependencies.mod_id]]
    modId="hammerlib"
    mandatory=true
    versionRange="[19.3.73,)"
    ordering="NONE"
    side="BOTH"
```
Be sure to replace the `19.3.73` with the actual minimal version you require to run your mod.

### public Mod() *(your mod constructor)*
:::tip Classic language files
If you want to continue using .lang files instead of .json files, you should register your mod to be treated with HammerLib's language adapter.
```java
LanguageAdapter.registerMod("modid");
```
:::