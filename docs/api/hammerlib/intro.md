---
sidebar_position: 0
title: ☁️ Getting Started
---
import LatestModVersion from '@site/src/components/LatestModVersion';

![The introduction to adding HammerLib to your workspace.](https://assets.zeith.org/logos/hammer-lib.png)
# Getting Started

:::danger Warning!
This documentation describes HammerLib 1.19.2 and newer.
:::

With that being said...
## Prerequisites!

### 🦊 neoforge.mods.toml (NeoForge)
<LatestModVersion modrinthId="PlkSuVtM">
Add this piece of code to your `neoforge.mods.toml`:
```toml
[[dependencies.mod_id]]
    modId="hammerlib"
    mandatory=true
    versionRange="[%VERSION%,)"
    ordering="NONE"
    side="BOTH"
```

Be sure to replace the `%VERSION%` with the actual minimal version you require to run your mod.
</LatestModVersion>

### 🔨 Legacy mods.toml (MinecraftForge)
<LatestModVersion modrinthId="PlkSuVtM" mcVersion="1.20.1">
Add this piece of code to your `mods.toml`:
```toml
[[dependencies.mod_id]]
    modId="hammerlib"
    mandatory=true
    versionRange="[%VERSION%,)"
    ordering="NONE"
    side="BOTH"
```

Be sure to replace the `%VERSION%` with the actual minimal version you require to run your mod.
</LatestModVersion>

### 🆕 public Mod() *(your mod constructor)*
:::tip Classic language files
If you want to continue using .lang files instead of .json files, you should register your mod to be treated with HammerLib's language adapter.
```java
LanguageAdapter.registerMod("modid");
```
:::