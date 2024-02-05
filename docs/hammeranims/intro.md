---
sidebar_position: 1
---

# Getting Started

:::tip Getting familiar with geometry and animations
Go grab yourself the [Blockbench](https://www.blockbench.net/) app and play around with it.

This mod relies on Bedrock geometry and animation format, which is easy to do in Blockbench.

The model type you are looking for is **Bedrock Entity**.
:::

Before using **Hammer Animations**, you should firstly add it to your workspace!

## 1.19.2 and Above

Firstly, add my repository to your workspace.
The `repositories` block should already be present in your `build.gradle`

```groovy
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

```groovy
dependencies {
    implementation fg.deobf("org.zeith.hammerlib:HammerLib-1.19.2:19.3.76")
    implementation fg.deobf("org.zeith.hammeranims:HammerAnimations-1.19.2:19.2.21")
}
```

**Make sure to replace the `1.19.2` with your game version, `19.3.76` with latest HammerLib version for given version, and `19.2.21` with the latest HammerAnimations version.**

After this, refresh your project in IDE of your choice.

You should see HammerLib and HammerAnimations appear in your classpath.

## 1.12.2

:::danger Warning!
While 1.12.2 is very ancient version, HammerAnimations was built for 1.12.2 to support TerrariaCraft project.
:::

**Before proceeding**, make sure you are using `stable_39` MCP mappings. This is **very** important, and ignoring this is going to crash your game.

After that is ensured, add my repository to your workspace.
The `repositories` block should already be present in your `build.gradle`

```groovy
repositories {
    maven {
        name = "Zeitheron Maven"
        url = "https://maven.zeith.org"
    }
}
```

After adding the repository, navigate to `dependencies` closure.
In here you are going to add two dependencies:

```groovy
dependencies {
    deobfCompile "org.zeith.HammerLib:HammerLib-1.12.2:12.2.47"
    deobfCompile "org.zeith.hammeranims:HammerAnimations-1.12.2:12.2.21"
}
```

After this, run `gradle setupDecompWorkspace idea` for IntelliJ IDEA or `gradle setupDecompWorkspace eclipse` for Eclipse IDE.

You should see HammerLib and HammerAnimations appear in your classpath.