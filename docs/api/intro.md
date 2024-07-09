---
sidebar_position: 0
---
import LatestModVersion from '@site/src/components/LatestModVersion';

# 👋 Introduction to HammerSeries

:::tip Get familiar with Java, Gradle, Minecraft & Forge APIs
Before starting on using Hammer-mods, you should have basic knowledge on Java language, Gradle framework, Minecraft API and NeoForge API.
Without them, it will be much harder to develop.
:::

Before using **anything here**, you should firstly add **HammerLib** to your workspace!

:::info IDE Support
If you're using IntelliJ IDEA, consider using [HammerHelper](./misc/hammerhelper) plugin!
:::

:::tip Or use the prepared mod template!
You can use [this template](https://github.com/Zeitheron/NeoForgedModTemplate) for setting up workspace.
Just select the branch that corresponds with the version that you want to develop, and use it as a template
:::

## 🦊 1.21 and Above (NeoForge)

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

<LatestModVersion modrinthId="PlkSuVtM">
```gradle
dependencies {
    implementation "org.zeith.hammerlib:HammerLib-%MCVERSION%:%VERSION%"
}
```

**Make sure to replace the `%MCVERSION%` with your game version, `%VERSION%` with latest HammerLib version for given game version.**
</LatestModVersion>

After this, refresh your project in IDE of your choice.

You should see HammerLib and HammerAnimations appear in your classpath.

## 🔨 1.14-1.20 (MinecraftForge)

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

<LatestModVersion modrinthId="PlkSuVtM">
```gradle
dependencies {
    implementation fg.deobf("org.zeith.hammerlib:HammerLib-%MCVERSION%:%VERSION%")
}
```

**Make sure to replace the `%MCVERSION%` with your game version, `%VERSION%` with latest HammerLib version for given game version.**
</LatestModVersion>

After this, refresh your project in IDE of your choice.

You should see HammerLib and HammerAnimations appear in your classpath.

## 📁 1.12.2

:::danger Warning!
While 1.12.2 is very ancient version, HammerLib was built and is still being mainteined for 1.12.2 to support [TerrariaCraft](https://terrariacraft.com) project.
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

<LatestModVersion modrinthId="PlkSuVtM" mcVersion="1.12.2">
```gradle
dependencies {
    deobfCompile "org.zeith.HammerLib:HammerLib-%MCVERSION%:%VERSION%"
}
```
</LatestModVersion>

After this, run `gradle setupDecompWorkspace idea` for IntelliJ IDEA or `gradle setupDecompWorkspace eclipse` for Eclipse IDE.

You should see HammerLib appear in your classpath.

:::info
Some features from these tutorials may not be available on 1.12.2, but a lot of them should be there.
:::