---
sidebar_position: 0
---
import HTTPButton from '@site/src/components/HTTPButton';

# 🛠️ HammerHelper

If you're on IntelliJ IDEA, consider using HammerHelper to assist with some common code checks and inspections!

## Installation

### Plugin Repo

Before downloading the plugin, you must first add the plugin repository.

Navigate to ⚙️ Settings → Plugins → ⚙️ → Manage Plugin Repositories... → ➕ → Enter the `https://maven.zeith.org/jetbrains.xml` into the text field.

You should now have Zeith's plugin repository added to your IDE.

### Adding plugin

Now that you have set up the repository, press <HTTPButton text="Add Plugin to IDEA" url="http://localhost:63342/api/installPlugin?action=install&pluginId=org.zeith.hammerhelper"/> And head back to it.

You might see a similar warning popup: 

![Using REST API](/img/idea-rest-api.png)

Click "Yes" to allow running.

If that doesn't work, try searching for `HammerHelper` on Marketplace AFTER adding the plugin repository.


## Feature Set

### Code inspection
These are your analyzers that highlight potential problems.
You can disable them at any point.

HammerLib inspection:
- `@SimplyRegister(prefix = "")` prefix is checked against resource location path characters. (error)
- `@SimplyRegister`-annotated classes should be interfaces instead. (weak warning)
- `@RegistryName("value")` values are checked against resource location path characters. (error)
- `@RegistryName("value")` names are checked inside the same class for potential duplicate registry names. (error)
- `Resources.location()` methods are eligible for resource path validation for \[a-z0-9/._-\] characters. (error)
- `@RegistryName`-d Item constant missing model json file (weak warning)
- `@RegistryName`-d Block constant missing block state json file (weak warning)

### Code completion
When hitting `Ctrl`+`Space`, IDEA shows a code completion popup.
This section is all about new entries in this popup.

HammerAnimations completion:
- `@RegistryName`-d [IAnimationContainer](../hammeranims/animations/registration), [IGeometryContainer](../hammeranims/geometry/registration) and [IParticleContainer](../hammeranims/particles/registration) are code-completed from files in `/assets/modid/bedrock/` paths. This takes into account the `createNoSuffix` method calls, as well as prefixes provided but `@SimplyRegister` on the class. The code completion occurs inside the string literal of the annotation.

### Code references
While holding `Ctrl` and hovering over elements of a class, you might see them as hyper-links, when clicking on which you see a file said elements are referenced from.

HammerLib references:
- `@RegistryName`-d Item constants have the registry name string literal a reference to item model json file (if it exists)
- `@RegistryName`-d Block constants have the registry name string literal a reference to block state map json file (if it exists)

HammerAnimations references:
- `@RegistryName`-d [IAnimationContainer](../hammeranims/animations/registration), [IGeometryContainer](../hammeranims/geometry/registration) and [IParticleContainer](../hammeranims/particles/registration) constants have the registry name string literal a reference to their container json file (if it exists)

### Inspector suppression

When using `@SimplyRegister` on a class which has at least one `@RegistryName` field, the `unused` inspection on class element will be suppressed, preventing the class and all `@RegistryName` fields from being marked as 'unused' (since they are registered into the game!)