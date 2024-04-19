---
sidebar_position: 0
title: ☁️ Getting Started
---

![The introduction to adding HammerMultipart to your workspace.](https://assets.zeith.org/logos/hammer-multipart.png)
# Getting Started

:::danger Warning!
This documentation describes HammerMultipart 1.20.1 and newer.
:::

With that being said...
## Prerequisites!

### Gradle

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
    implementation fg.deobf("org.zeith.hammerlib:HammerLib-1.20.1:20.1.24")
    implementation fg.deobf("org.zeith.multipart:HammerMultipart-1.20.1:20.1.18")
    implementation fg.deobf("org.zeith.multipart:HammerMicroblocks-1.20.1:20.1.9") // Useful for testing multipart with microblocks.
}
```

**Make sure to replace the `1.20.1` with your game version, `20.1.24` with latest HammerLib version for given version, and `20.1.18` with the latest HammerMultipart version.**

After this, refresh your project in IDE of your choice.

You should see HammerLib and HammerMultipart appear in your classpath.

### mods.toml
Add this piece of code to your `mods.toml`:
```toml
[[dependencies.mod_id]]
    modId="hammermultipart"
    mandatory=true
    versionRange="[20.1.18,)"
    ordering="NONE"
    side="BOTH"
```

Be sure to replace the `20.1.18` with the actual minimal version you require to run your mod.