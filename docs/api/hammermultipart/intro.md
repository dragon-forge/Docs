---
sidebar_position: 0
title: ☁️ Getting Started
---
import LatestModVersion, { getLatestMcVersion } from '@site/src/components/LatestModVersion';

![The introduction to adding HammerMultipart to your workspace.](https://assets.zeith.org/logos/hammer-multipart.png)
# Getting Started

:::danger Warning!
This documentation describes HammerMultipart 1.20.1 and newer.
:::

With that being said...
## Prerequisites!

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

<LatestModVersion modrinthId="9g6WlH2N">
<LatestModVersion modrinthId="PlkSuVtM" mcVersion={getLatestMcVersion('9g6WlH2N')} versionNotation="%HLVERSION%" mcNotation="%HLMCVERSION%" >
<LatestModVersion modrinthId="61kgjt4z" mcVersion={getLatestMcVersion('9g6WlH2N')} versionNotation="%MBVERSION%" mcNotation="%MBMCVERSION%" >
```gradle
dependencies {
    implementation "org.zeith.hammerlib:HammerLib-%HLMCVERSION%:%HLVERSION%"
    implementation "org.zeith.multipart:HammerMultipart-%MCVERSION%:%VERSION%"
    implementation "org.zeith.multipart:HammerMicroblocks-%MBMCVERSION%:%MBVERSION%" // Useful for testing multipart with microblocks.
}
```

**Make sure to replace the `%MCVERSION%` with your game version, `%HLVERSION%` with latest HammerLib version for given version, and `%VERSION%` with the latest HammerMultipart version and `%MBVERSION%` with the latest HammerMicroblocks version.**

After this, refresh your project in IDE of your choice.

You should see HammerLib and HammerMultipart appear in your classpath.

### 🦊 neoforge.mods.toml
Add this piece of code to your `neoforge.mods.toml`:
```toml
[[dependencies.mod_id]]
    modId="hammermultipart"
    mandatory=true
    versionRange="[%VERSION%,)"
    ordering="NONE"
    side="BOTH"
```
After this, refresh your project in IDE of your choice.

You should see HammerLib and HammerMultipart appear in your classpath.

Be sure to replace the `%VERSION%` with the actual minimal version you require to run your mod.
</LatestModVersion>
</LatestModVersion>
</LatestModVersion>

## 🔨 1.20.1

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

<LatestModVersion modrinthId="9g6WlH2N" mcVersion="1.20.1">
<LatestModVersion modrinthId="PlkSuVtM" mcVersion="1.20.1" versionNotation="%HLVERSION%" mcNotation="%HLMCVERSION%" >
<LatestModVersion modrinthId="61kgjt4z" mcVersion="1.20.1" versionNotation="%MBVERSION%" mcNotation="%MBMCVERSION%" >
```gradle
dependencies {
    implementation fg.deobf("org.zeith.hammerlib:HammerLib-%HLMCVERSION%:%HLVERSION%")
    implementation fg.deobf("org.zeith.multipart:HammerMultipart-%MCVERSION%:%VERSION%")
    implementation fg.deobf("org.zeith.multipart:HammerMicroblocks-%MBMCVERSION%:%MBVERSION%") // Useful for testing multipart with microblocks.
}
```

**Make sure to replace the `%MCVERSION%` with your game version, `%HLVERSION%` with latest HammerLib version for given version, and `%VERSION%` with the latest HammerMultipart version and `%MBVERSION%` with the latest HammerMicroblocks version.**
</LatestModVersion>
</LatestModVersion>
</LatestModVersion>