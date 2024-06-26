---
sidebar_position: 0
title: ☁️ Getting Started
---
import LatestModVersion, { getLatestMcVersion } from '@site/src/components/LatestModVersion';

![The introduction to adding HammerAnimations to your workspace.](https://assets.zeith.org/logos/hammer-animations.png)
# Getting Started

:::tip Getting familiar with geometry and animations
Go grab yourself the [Blockbench](https://www.blockbench.net/) app and play around with it.

This mod relies on Bedrock geometry and animation format, which is easy to do in Blockbench.

The model type you are looking for is **Bedrock Entity**.
:::

Before using **HammerAnimations**, you should firstly add it to your workspace!

## 🦊 1.21 and Above

Firstly, add my repository to your workspace.
The `repositories` block should already be present in your `build.gradle`

```gradle
repositories {
    maven {
        name = "Zeitheron Maven"
        url = "https://maven.zeith.org/"
        content {
            includeGroupByRegex "org\\.zeith.*"
        }
    }
}
```

After adding the repository, navigate to `dependencies` closure.
In here you are going to add two dependencies:

<LatestModVersion modrinthId="C7cTlgwS">
<LatestModVersion modrinthId="PlkSuVtM" mcVersion={getLatestMcVersion('C7cTlgwS')} versionNotation="%HLVERSION%" mcNotation="%HLMCVERSION%" >
```gradle
dependencies {
    implementation "org.zeith.hammerlib:HammerLib-%HLMCVERSION%:%HLVERSION%"
    implementation "org.zeith.hammeranims:HammerAnimations-%MCVERSION%:%VERSION%"
}
```

**Make sure to replace the `%MCVERSION%` with your game version, `%HLVERSION%` with latest HammerLib version for given version, and `%VERSION%` with the latest HammerAnimations version.**
</LatestModVersion>
</LatestModVersion>

After this, refresh your project in IDE of your choice.

You should see HammerLib and HammerAnimations appear in your classpath.

### 🦊 neoforge.mods.toml
Add this piece of code to your `neoforge.mods.toml`:
<LatestModVersion modrinthId="C7cTlgwS">
```toml
[[dependencies.mod_id]]
    modId="hammeranims"
    mandatory=true
    versionRange="[%VERSION%,)"
    ordering="NONE"
    side="BOTH"
```

Be sure to replace the `%VERSION%` with the actual minimal version you require to run your mod.
</LatestModVersion>

## 🔨 1.16.5, 1.19.2 and 1.20.1

Firstly, add my repository to your workspace.
The `repositories` block should already be present in your `build.gradle`

```gradle
repositories {
    maven {
        name = "Zeitheron Maven"
        url = "https://maven.zeith.org/"
        content {
            includeGroupByRegex "org\\.zeith.*"
        }
    }
}
```

After adding the repository, navigate to `dependencies` closure.
In here you are going to add two dependencies:

<LatestModVersion modrinthId="C7cTlgwS" mcVersion="1.20.1">
<LatestModVersion modrinthId="PlkSuVtM" mcVersion="1.20.1" versionNotation="%HLVERSION%" mcNotation="%HLMCVERSION%" >
```gradle
dependencies {
    implementation fg.deobf("org.zeith.hammerlib:HammerLib-%MCVERSION%:%HLVERSION%")
    implementation fg.deobf("org.zeith.hammeranims:HammerAnimations-%MCVERSION%:%VERSION%")
}
```

**Make sure to replace the `%MCVERSION%` with your game version, `%HLVERSION%` with latest HammerLib version for given version, and `%VERSION%` with the latest HammerAnimations version.**
</LatestModVersion>
</LatestModVersion>

After this, refresh your project in IDE of your choice.

You should see HammerLib and HammerAnimations appear in your classpath.

## 1.12.2

:::danger Warning!
While 1.12.2 is very ancient version, HammerAnimations was built for 1.12.2 to support TerrariaCraft project.
:::

**Before proceeding**, make sure you are using `stable_39` MCP mappings. This is **very** important, and ignoring this is going to crash your game.

After that is ensured, add my repository to your workspace.
The `repositories` block should already be present in your `build.gradle`

```gradle
repositories {
    maven {
        name = "Zeitheron Maven"
        url = "https://maven.zeith.org"
    }
}
```

After adding the repository, navigate to `dependencies` closure.
In here you are going to add two dependencies:

<LatestModVersion modrinthId="C7cTlgwS" mcVersion="1.12.2">
<LatestModVersion modrinthId="PlkSuVtM" mcVersion="1.12.2" versionNotation="%HLVERSION%" mcNotation="%HLMCVERSION%" >
```gradle
dependencies {
    deobfCompile "org.zeith.HammerLib:HammerLib-%HLMCVERSION%:%HLVERSION%"
    deobfCompile "org.zeith.hammeranims:HammerAnimations-%MCVERSION%:%VERSION%:deobf"
}
```
</LatestModVersion>
</LatestModVersion>

After this, run `gradle setupDecompWorkspace idea` for IntelliJ IDEA or `gradle setupDecompWorkspace eclipse` for Eclipse IDE.

You should see HammerLib and HammerAnimations appear in your classpath.

## 1.12.2 ForgeGradle 3+

When using newer ForgeGradle, you can use the `fg.deobf()` feature, but it may or may not work.
This does allow using other mappings, but modern FG doesn't like 1.12.2 much, so your success is luck-based.
HammerLib currently is not provided in its compiled artifact, you might need to use CurseForge maven.

Learn more about [Curse Maven here](https://www.cursemaven.com/).

As always, add my repository to your workspace.
The `repositories` block should already be present in your `build.gradle`

```gradle
repositories {
    maven {
        name = "Zeitheron Maven"
        url = "https://maven.zeith.org"
    }
}
```

After adding the repository, navigate to `dependencies` closure.
In here you are going to add two dependencies:

<LatestModVersion modrinthId="C7cTlgwS" mcVersion="1.12.2">
<LatestModVersion modrinthId="PlkSuVtM" mcVersion="1.12.2" versionNotation="%HLVERSION%" mcNotation="%HLMCVERSION%" >
```gradle
dependencies {
    implementation "org.zeith.HammerLib:HammerLib-%HLMCVERSION%:%HLVERSION%:deobf" // this is remapped already to stable_39.
    // implementation fg.deobf("org.zeith.HammerLib:HammerLib-%HLMCVERSION%:%HLVERSION%") // this is remapped already to stable_39.
    implementation fg.deobf("org.zeith.hammeranims:HammerAnimations-%MCVERSION%:%VERSION%")
}
```
</LatestModVersion>
</LatestModVersion>