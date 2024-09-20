---
sidebar_position: 0
title: 🌳 Getting started
---

![Getting your workspace ready.](https://assets.terrariacraft.com/media/header.webp)
# Getting Started

The best way to begin developing an addon to TerrariaCraft would be using the Creator Companion inside our launcher!

<iframe loading="lazy" width="100%" style={{"aspect-ratio": "16 / 9"}} src="https://www.youtube.com/embed/RaivkDJC-h4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Alternate
Alternatively, you can use [Example Addon Template](https://github.com/TerrariaCraft/ExampleAddon) to get started.

You won't be able to develop for early access, though.

## 🐙 GitHub

Before starting, make sure you have a GitHub account. It will be necessary to keep things organized and up to date.

After that, navigate to our [example addon template repository](https://github.com/TerrariaCraft/ExampleAddon) and click on green button `Use this template`, then select `Create a new repository`.

You will create a repository with files from the template repository.

In the repository, you will see green button `<> Code`, which upon clicking will expand into a menu where you should see the URL for cloning the repository. It typically ends with `.git`. You are going to need that URL in the next step.

## 🧠 IDE

I strongly recommend [IntelliJ IDEA](https://www.jetbrains.com/idea/download/?section=windows#download-block) (And the Community Edition is free!) to develop addons, and this is what we are going to be focusing on.

IntelliJ IDEA comes with support for custom plugins. Since TerrariaCraft is built with HammerLib and HammerAnimations, you should consider installing [HammerHelper](../misc/hammerhelper) before doing anything else.

After that, click on Main Menu button (`Alt`+`\`), there will be `Git` tab. At the bottom of the list, see `Clone...` option; Click that and paste the `.git` URL you copied in the [GitHub](#github) step and create an empty directory where the contents of your project will be put into.

Now click `Clone` to... Clone the repository.

After this, go make some tea, it might take a bit to set up the workspace.
The progress should be visible in the `Build` tab on the left side.

## 📁 Workspace

After the project finishes setting up, expand the `Gradle` tab on the right, and find `genIntelijRuns` task inside `forgegradle runs` folder.

Now you should have the `runClient` application at the top. This is your ticket to testing the code in workspace. Go ahead and give it a shot.

Feel free to explore the template and see how it functions.

:::warning
You will have to edit `build.txt`'s contents to match your mod as well as refactoring the classes into your own package.
:::

Here is a quick rundown on all properties:
- `mod_id` must match the mod's id in your code. (By default it is a constant `ExampleAddon.MODID`)
- `mod_id_fancy` is basically what your file name of the mod will be. Usually it should be the mod's name without spaces.
- `mod_name` self explanatory
- `mod_version` is the version that will be set to the mod upon building it.

Other important properties:
- `forge_version` and `minecraft_version` - the versions of forge and minecraft the workspace uses. You shouldn't have to touch these.
- `tc_version` - the version of TerrariaCraft you are building against. This property should only be changed whenever you're updating to new versions of TC and your code breaks. If it doesn't - good, keep the same version!

## 🔄️ Updating workspace

Eventually, new versions of TerrariaCraft release, and you want to get your project updated.

To do this, open the `gradle.properties` file and locate the `#### START BLOCK ####` up until `##### END BLOCK #####`.

Replace it with the most recent block found GitHub of the template repository [HERE](https://github.com/TerrariaCraft/ExampleAddon/blob/1.12.2/gradle.properties#L7-L14).

Once you paste the new block, refresh gradle by clicking on "Load Gradle Changes" button that should appear as soon as you paste the new data.

Then wait for a bit, and... that's it!

## 🗃️ Building the mod

When you feel like it, find the gradle task `build` inside the `build` category (its the same tab where you ran `genIntelijRuns` from!).

Your mod should be located in `/build/libs/` folder of your project! Enjoy!

## 💖 Getting recognized
If you wish to get your addon into the addon browser into the TerrariaCraft launcher, please include `addon_info.json` in your mod resources (`src/main/resources/addon_info.json`), and release your mod files using GitHub releases, and push the required information about it into [TerrariaCraft/Addons](<https://github.com/TerrariaCraft/Addons>) repository!
If you need help figuring it out, please see [TerrariaCraft RecipeViewer](<https://github.com/TerrariaCraft/TerrariaCraftRecipeViewer>)

Your `addon_info.json` file should look something like this:
```json
{
	"id": "tcrecipeview",
	"name": "Terraria Craft Recipe Viewer",
	"description": "Simple mod for Terraria Craft that allows viewing of recipes with 'R' and 'U' keys.",
	"authors": [ "Zeitheron" ],
	"website": "https://modrinth.com/mod/terrariacraft-recipeviewer",
	"issues_page": "https://github.com/Zeitheron/TerrariaCraftRecipeViewer/issues",
	"icon_path": "assets/tcrecipeview/icon.png",
	"social": {
		"discord": "https://discord.terrariacraft.com",
		"twitter": "https://twitter.com/TerrariaCraftMC"
	},
	"compatibility": {
		"public_versions": [
			"[12.6.1,12.7)"
		],
		"idev_versions": [
			"[idev-,)"
		]
	}
}
```

When pushing to [TerrariaCraft/Addons](<https://github.com/TerrariaCraft/Addons>) repository, you will have to fork the repository, and clone it to somewhere. From there, navigate to `/manifest/` folder and create a folder for your own package.
:::danger IMPORTANT
Your package must match with your mod's owning package.

So if your mod has package `com.somedude.myawesomemod`, the package you will be creating must be `com.somedude`
:::

Inside your package folder, create `authors.json`. It holds a list of all authors who work on any of the mods you will be uploading to the manifest. Consider this as a lookup table for people who you work with. Use [/manifest/org.zeith/authors.json](https://github.com/TerrariaCraft/Addons/blob/master/manifest/org.zeith/authors.json) as an example.

Besides the `authors.json` you will also create folders for every addon you upload. It should be similar to your `mod_id_fancy` from `build.txt`.
Inside your newly created folder, create `info.json` and fill it out. Use [/manifest/org.zeith/TerrariaCraftVeinMiner/info.json](https://github.com/TerrariaCraft/Addons/blob/master/manifest/org.zeith/TerrariaCraftVeinMiner/info.json) as an example.

After you're done, create a commit to your forked repository and push changes to it. Now you can go to the forked repository and create a pull request to the original manifest repository.

Upon approval, the pull request will be merged and you will receive the `Verified Addon Dev` role on our [Discord server](https://discord.terrariacraft.com).