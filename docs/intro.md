---
sidebar_position: 0
---

# Getting Started

:::tip Get familiar with Java, Gradle, Minecraft & Forge APIs
Before starting on using Hammer-mods, you should have basic knowledge on Java language, Gradle framework, Minecraft API and NeoForge API.
Without them, it will be much harder to develop.
:::

Before using **anything here**, you should firstly add **HammerLib** to your workspace!

:::tip Or use the prepared mod template!
You can use [this template](https://github.com/Zeitheron/NeoForgedModTemplate) for setting up workspace.
Just select the branch that corresponds with the version that you want to develop, and use it as a template
:::

## 1.19.2 and Above

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

```gradle
dependencies {
    implementation fg.deobf("org.zeith.hammerlib:HammerLib-1.19.2:19.3.76")
}
```

**Make sure to replace the `1.19.2` with your game version, `19.3.76` with latest HammerLib version for given game version.**

After this, refresh your project in IDE of your choice.

You should see HammerLib and HammerAnimations appear in your classpath.

## 1.12.2

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

```gradle
dependencies {
    deobfCompile "org.zeith.HammerLib:HammerLib-1.12.2:12.2.49"
}
```

After this, run `gradle setupDecompWorkspace idea` for IntelliJ IDEA or `gradle setupDecompWorkspace eclipse` for Eclipse IDE.

You should see HammerLib appear in your classpath.

:::info
Some features from these tutorials may not be available on 1.12.2, but a loto of them should be there.
:::