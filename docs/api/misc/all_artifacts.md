---
sidebar_position: 1
title: ☁️ Latest maven artifacts
---
import LatestModVersion from '@site/src/components/LatestModVersion';

# ☁️ Latest maven artifacts

Here is a list of all artifacts that you can add to gradle classpath!

## 🔗 Repository setup
First off start by adding Zeith's maven repository:
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

If this step has caused your gradle to fail, alternatively try using this:
```gradle
repositories {
    maven {
        name = "Zeitheron Maven"
        url = "https://maven.zeith.org/"
    }
}
```

## ➕ Adding mods

When adding mods into your project, put the `implementation` lines into your `dependencies` notation (NOT the one at the top of the build.gradle, if you have that). Generally you should have something like this:

<LatestModVersion modrinthId="PlkSuVtM">
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

dependencies {
    implementation "net.neoforged:neoforge:${neoforge_version}"

    // This one is required by other mods developed by Zeith:
    implementation "org.zeith.HammerLib:HammerLib-%MCVERSION%:%VERSION%"
}
```
</LatestModVersion>

:::info Note
For 1.13 - 1.20.1 use `implementation fg.deobf("org.zeith......")` instead of `implementation "org.zeith......"`
:::

## 📁 Mod catalog

Alternatively, you can browse the maven [HERE](https://maven.zeith.org/) to find all the artifacts and their versions.

### HammerLib
<LatestModVersion modrinthId="PlkSuVtM">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.HammerLib:HammerLib-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### HammerAnimations
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="C7cTlgwS">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.hammeranims:HammerAnimations-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### HammerMultipart
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="9g6WlH2N">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.multipart:HammerMultipart-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### HammerMicroblocks
Requires [HammerLib](#hammerlib) and [HammerMultipart](#hammermultipart)
<LatestModVersion modrinthId="61kgjt4z">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.multipart:HammerMicroblocks-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### SolarFluxReborn
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="4QG5lev4">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.SolarFlux:SolarFluxReborn-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Improvable Skills
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="9fT7HUaI">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.ImprovableSkills:ImprovableSkills-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Simple Quarry
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="s3lgCbLg">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.SimpleQuarry:SimpleQuarry-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Trims on Tools
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="b3wKSVMw">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.trims_on_tools:TrimsOnTools-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Online Displays
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="bhEwCNbH">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.onlinedisplays:OnlineDisplays-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Expanded Equivalence
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="tT70rEVv">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.expequiv:ExpandedEquivalence-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Equivalent Additions
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="aGusXvsE">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.equivadds:EquivalentAdditions-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Music Layer
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="4Y5irTB9">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.MusicLayer:MusicLayer-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Colored Lux
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="mEr4VarV">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.ColoredLux:ColoredLux-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Thaumic Additions: Reconstructed
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="Fi4BbtaL">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.ThaumicAdditions:ThaumicAdditions-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Botanic Additions
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="2u3eevWi">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.botanicadds:BotanicAdditions-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Corsair McCUE
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="WbZWY2NM">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.McCue:McCue-%MCVERSION%:%VERSION%"
```
</LatestModVersion>

### Cable Flux
Requires [HammerLib](#hammerlib)
<LatestModVersion modrinthId="PnrYjYrw">
(For Minecraft %MCVERSION%)
```gradle
implementation "org.zeith.CableFlux:CableFlux-%MCVERSION%:%VERSION%"
```
</LatestModVersion>