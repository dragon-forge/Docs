---
sidebar_position: 2
---

# 📝 Multipart Registration
Every part has a `PartDefinition` that must be registered.

HammerMultipart provides a registry for said definitions, but not `PartEntity` classes (they don't need any registration)

:::tip
HammerLib already provides us with a simple content registration pipeline (see [Content Registration](/docs/hammeranims/animations/configured_animation#%EF%B8%8F-settings))

This is what we're going to use to get animations registered properly and easily.
:::

## ☕ Registration (Java)

### ⌨️ ModPartDefinitions Class
To store our part definitions, create an interface `ModPartDefinitions` inside your init package.

The result should look something like this:
```java
package com.yourname.yourmod.init;

import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModPartDefinitions
{
}
```

### 📦 Adding definitions
To register a part into the game, simply create a new field inside `ModPartDefinitions` of type `PartDefinition` and an instance of one, then annotating the field with `@RegistryName("name")`. The "name" must be unique.
```java
package com.yourname.yourmod.init;

import org.zeith.hammeranims.api.animation.*;
import org.zeith.hammerlib.annotations.*;

@SimplyRegister
public interface ModPartDefinitions
{
    @RegistryName("your_multipart")
    YourPartDefinition YOUR_MULTIPART = new YourPartDefinition();
}
```
