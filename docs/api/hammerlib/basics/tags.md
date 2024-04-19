---
sidebar_position: 3
---

# 🏷️ Tags Registration
Tags are the new "Ore Dictionary" (if you've modded MC prior to 1.13 you know what I mean)

Basically, to add something to a tag, you would have to go ahead, and edit (or create) a json file for tag, and put all new blocks/items/whatever into said json file.
This can get quite annoying when you want to add like 32 lamps that extend the same class, and should all have a tag (say, "yourmod:lamps").

## 🔗 Binding tags
HammerLib provides a tool to automate tag assigning to objects through `TagAdapter` class and `BuildTagsEvent` (on `HammerLib.EVENT_BUS`).

At any point in time (preferably in Block/Item/whatever constructor), call `TagAdapter.bind(TAG, this)`.

Going back to our lamp example, the class would look something like this:
```java
package com.yourname.yourmod.content.blocks;

import net.minecraft.resources.ResourceLocation;
import net.minecraft.tags.*;
import net.minecraft.world.level.block.Block;
import org.zeith.hammerlib.core.adapter.TagAdapter;

public class BlockLamp extends Block
{
    public BlockLamp(Properties pProperties)
    {
        super(pProperties);
        TagAdapter.bind(BlockTags.create(new ResourceLocation("yourmod", "lamps")), this);
    }
}
```

Don't forget to register all lamps inside `ModBlocks`!

## 🧱 Block harvesting
Since 1.17 (or so), block harvest tool and level are also determined by tags. 

This is a slightly annoying problem that HammerLib also addresses with `BlockHarvestAdapter` class.

A short and easy-to-understand example would be on our lamps again, we want to mind them with an iron pickaxe.

To achieve this, simply add `BlockHarvestAdapter.bindTool` into the block constructor, resulting in the following code:
```java
package com.yourname.yourmod.content.blocks;

import net.minecraft.world.item.Tiers;
import net.minecraft.world.level.block.Block;
import org.zeith.hammerlib.core.adapter.BlockHarvestAdapter;

public class BlockLamp extends Block
{
    public BlockLamp(Properties pProperties)
    {
        super(pProperties);
        BlockHarvestAdapter.bindTool(BlockHarvestAdapter.MineableType.PICKAXE, Tiers.IRON, this);
    }
}
```