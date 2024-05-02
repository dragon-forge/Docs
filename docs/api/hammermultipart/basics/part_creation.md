---
sidebar_position: 1
---

# ✨ Creating a Multipart

Let's apply our knowledge and make a test `PartDefinition` and `PartEntity`!

In our example we're going to make a multipart-compatible redstone button!

## 🪪 PartDefinition
Firstly, we should create PartDefFloorButton:
```java
package com.yourname.yourmod.impl.parts;

import net.minecraft.core.*;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.*;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.*;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.*;
import net.minecraft.world.phys.BlockHitResult;
import org.zeith.hammerlib.annotations.Setup;
import org.zeith.multipart.api.*;
import org.zeith.multipart.api.placement.*;
import org.zeith.multipart.impl.parts.entities.PartEntityFloorButton;
import org.zeith.multipart.init.*;

import com.yourname.yourmod.impl.parts.entities.PartEntityFloorButton;
import com.yourname.yourmod.init.ModPartDefinitions;

import java.util.Optional;

public class PartDefFloorButton
        extends PartDefinition
{
    // We are using vanilla floor button.
    public static final ResourceLocation BUTTON_MODEL = new ResourceLocation("minecraft", "block/stone_button");
    public static final ResourceLocation PRESSED_BUTTON_MODEL = new ResourceLocation("minecraft", "block/stone_button_pressed");
    
    public PartDefFloorButton()
    {
        model.addSubmodel(BUTTON_MODEL);
        model.addSubmodel(PRESSED_BUTTON_MODEL);
        
        model.addParticleIcon(new ResourceLocation("minecraft:block/stone"));
        
        soundType = SoundType.STONE;
        survivesInWater = false;
        destroySpeed = 0.5F;
        
        cloneItem = Items.STONE_BUTTON::getDefaultInstance;
    }
    
    @Override
    public PartEntity createEntity(PartContainer container, PartPlacement placement)
    {
        return new PartEntityFloorButton(this, container, placement);
    }
    
    @Override
    public Optional<PlacedPartConfiguration> convertBlockToPart(Level level, BlockPos pos, BlockState state)
    {
        if(state.is(Blocks.STONE_BUTTON) && state.getValue(BlockStateProperties.ATTACH_FACE) == AttachFace.FLOOR)
        {
            return Optional.of(new PlacedPartConfiguration(this, PartPlacementsHM.DOWN));
        }
        
        return Optional.empty();
    }
    
    /**
     * This method is called during FMLCommonSetupEvent, and registers the button as fallback placer for the vanilla stone button.
     * In most cases, you should use IMultipartPlacerItem where possible!
     */
    @Setup
    public static void setupFallbackPlacement()
    {
        if(ModPartDefinitions.FLOOR_BUTTON.isRegistered())
        {
            PartRegistries.registerFallbackPartPlacer(Items.STONE_BUTTON, ModPartDefinitions.FLOOR_BUTTON::getPlacement);
        }
    }
    
    /**
     * Used only by setupFallbackPlacement method to provide a placed part from a button if possible.
     */
    private Optional<PlacedPartConfiguration> getPlacement(Level level, BlockPos pos, Player player, ItemStack itemStack, BlockHitResult res)
    {
        if(res.getDirection() == Direction.UP)
        {
            return Optional.of(new PlacedPartConfiguration(this, PartPlacementsHM.DOWN));
        }
        
        return Optional.empty();
    }
}
```

This creates our definition, adds the models and particles into registrar, and defines a way to convert a button block into a multipart, as well as fallback placement of a vanilla button item as a button part.

## 🐧 PartEntity
Now that our PartDefinition is ready, we can finally make the PartEntity.
It's a bit more complex, involving quite a few methods to make it work, but should be manageable!
```java
package com.yourname.yourmod.impl.parts.entities;

import net.minecraft.core.*;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.sounds.*;
import net.minecraft.world.*;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.*;
import net.minecraft.world.level.block.*;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.*;
import net.minecraft.world.level.storage.loot.LootParams;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraft.world.phys.shapes.VoxelShape;
import org.jetbrains.annotations.Nullable;
import org.zeith.hammerlib.api.io.NBTSerializable;
import org.zeith.hammerlib.util.java.tuples.*;
import org.zeith.multipart.api.*;
import org.zeith.multipart.api.placement.PartPlacement;

import com.yourname.yourmod.impl.parts.PartDefFloorButton;

import java.util.*;
import java.util.function.Function;

public class PartEntityFloorButton
        extends PartEntity

        implements ITickingPartEntity
//                         ^  this is required for ticking parts.
//  If your part doesn't need ticking code, do not add this interface to save on tick costs.
{
    @NBTSerializable("PressTime")
    public int pressTimeLeft;
    
    public PartEntityFloorButton(PartDefinition definition, PartContainer container, PartPlacement placement)
    {
        super(definition, container, placement);
    }
    
    @Override
    public List<ItemStack> getDrops(@Nullable ServerPlayer harvester, LootParams.Builder context)
    {
        return List.of(Items.STONE_BUTTON.getDefaultInstance());
    }
    
    @Override
    public Optional<Tuple2<BlockState, Function<BlockPos, BlockEntity>>> disassemblePart()
    {
        return Optional.of(Tuples.immutable(Blocks.STONE_BUTTON.defaultBlockState().setValue(BlockStateProperties.ATTACH_FACE, AttachFace.FLOOR), null));
    }
    
    @Override
    public void neighborChanged(@Nullable Direction from, BlockPos neigborPos, BlockState neigborState, boolean waterlogged)
    {
        BlockPos pos = container.pos().relative(Direction.DOWN);
        
        if(waterlogged || !container.level().getBlockState(pos).isFaceSturdy(container.level(), pos, Direction.UP))
        {
            container.queuePartRemoval(placement, true, true, true);
        }
        
        super.neighborChanged(from, neigborPos, neigborState, waterlogged);
    }
    
    @Override
    protected VoxelShape updateShape()
    {
        return pressTimeLeft > 0
               ? Block.box(5, 0, 6, 11, 1.02, 10)
               : Block.box(5, 0, 6, 11, 2, 10);
    }
    
    @Override
    public void tickServer()
    {
        super.tickServer();
        if(pressTimeLeft > 0 && --pressTimeLeft <= 0)
        {
            container.causeBlockUpdate = true;
            container.causeRedstoneUpdate = true;
            
            container().level().playSound(null, pos().pos(), SoundEvents.STONE_BUTTON_CLICK_OFF, SoundSource.BLOCKS);
        }
    }
    
    @Override
    public InteractionResult use(Player player, InteractionHand hand, BlockHitResult hit, IndexedVoxelShape selection)
    {
        if(pressTimeLeft <= 0)
        {
            container.causeBlockUpdate = true;
            container.causeRedstoneUpdate = true;
        }
        
        if(pressTimeLeft <= 0)
        {
            container().level().playSound(player, hit.getBlockPos(), SoundEvents.STONE_BUTTON_CLICK_ON, SoundSource.BLOCKS);
        }
        
        pressTimeLeft = 20;
        syncDirty = true;
        
        return InteractionResult.SUCCESS;
    }
    
    @Override
    public List<ResourceLocation> getRenderModels()
    {
        return List.of(pressTimeLeft > 0
                       ? PartDefFloorButton.PRESSED_BUTTON_MODEL
                       : PartDefFloorButton.BUTTON_MODEL
        );
    }
    
    @Override
    public boolean isRedstoneSource()
    {
        return true;
    }
    
    @Override
    public boolean canConnectRedstone(@Nullable Direction direction)
    {
        return direction != Direction.UP;
    }
    
    public int getSignal()
    {
        return pressTimeLeft > 0 ? 15 : 0;
    }
    
    @Override
    public int getStrongSignal(Direction towards)
    {
        return towards == Direction.UP ? getSignal() : 0;
    }
    
    @Override
    public int getWeakSignal(Direction towards)
    {
        return towards != Direction.DOWN ? getSignal() : 0;
    }
}
```

You can see us using the `@NBTSerializable` here. It's for ease of use to write serialization easier. [You can read about how it works here](/docs/api/hammerlib/advanced/nbt_serialization)!