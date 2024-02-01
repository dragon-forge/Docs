---
sidebar_position: 2
---

# Recipe Registration
Let's take a look at registering recipes through HammerLib.

Minecraft provides a datapack way of adding recipes through JSON.
However, it is quite annoying to work with, having each recipe its own file, and having to also guess all variables unless you have a template recipe to look at.

This is where HammerLib shines: it allows developers to register recipes, at runtime (meaning you can take configs into consideration), of any type through code!

## The process

Create a class, and make it implement `IRecipeProvider` from `org.zeith.hammerlib.api.IRecipeProvider`.
Annotate your interface with `@ProvideRecipes` from `org.zeith.hammerlib.annotations.ProvideRecipes`.

Now you have to implement `provideRecipes` method.

The result should look something like this:
```java
package com.yourname.yourmod.init;

import net.minecraft.world.item.Items;
import net.minecraftforge.common.Tags;
import org.zeith.hammerlib.annotations.*;
import org.zeith.hammerlib.api.IRecipeProvider;
import org.zeith.hammerlib.event.recipe.RegisterRecipesEvent;

@ProvideRecipes
public class ModRecipes
		implements IRecipeProvider
{
	@Override
	public void provideRecipes(RegisterRecipesEvent event)
	{
		// TODO: Register recipes!

		event.shaped() // here's an example of adding a recipe!
				.result(Items.CHAINMAIL_CHESTPLATE)
				.shape("n n", "nnn", "nnn")
				.map('n', Tags.Items.NUGGETS_IRON)
				.register();
	}
}
```

That's pretty much it!
The recipes can be turned off by modpack developers through configs.

You may add custom modded recipe types using `event.add(Recipe)` method.