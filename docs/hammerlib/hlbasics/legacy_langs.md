---
sidebar_position: 1
---

# Legacy .lang files
I don't want to JSON everything!

Some time in the past, Mojang has changed up the language file format from simple `key=value` pairs into a JSON format `"key": "value"`

Now, this has its upsides, you can pretty much use escapes to quotes and not worry about anything.
But then it's JSON. It's slower to parse (albeit the overhead is not really meaningful), you have to keep track of commas.
Oh and comments? Forget about those. It's not JSON5, or JSONC, so no comments for you, unless you use a comment key & value, which is not really a comment and will be registered into the game.

## Enter HammerLib's LanguageAdapter!
Now, the adapter by default does not activate "Out-of-box", nor it should (some mods may use their own implementations of .lang files and we don't want to cause issues with them!)

In order to let HammerLib's legacy language parser to work, you will need to add one call inside your mod constructor:

`LanguageAdapter.registerMod("yourmod");` (make sure to replace the `"yourmod"` with actual modid of your mod.)

The example should look something like this:
```java
package com.yourname.yourmod;

import net.minecraftforge.fml.common.Mod;
import org.zeith.hammerlib.core.adapter.LanguageAdapter;

@Mod(YourMod.MOD_ID)
public class YourMod
{
	public static final String MOD_ID = "yourmod";
	
	public YourMod()
	{
		LanguageAdapter.registerMod(MOD_ID);
	}
}
```

## Storing lang files
Now that your mod is registered into the legacy language format...
Create a folder (if you haven't already): `/src/main/resources/assets/yourmod/lang` (or `/src/main/resources/assets/yourmod/langs`, either works!)

Inside the `lang`/`langs` folder, create a text file `en_us.lang`.
This is where your localizations will be stored in a `key=value` format.

:::tip
To add comments inside .lang files, simply put hashtag (`#`) as the start of your line!
:::

Here's an example of a `en_us.lang` file:
```properties
# Creative Tabs
itemGroup.yourmod=Your Mod

# Blocks
block.yourmod.lamps.white=White Lamp
block.yourmod.lamps.orange=Orange Lamp
block.yourmod.lamps.magenta=Magenta Lamp
```