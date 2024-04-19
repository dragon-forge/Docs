---
sidebar_position: 0
---

# 💡 Multipart Concept
So how does everything fit together?

## 💬 The Concept
In its base, to make parts fit into a single block, a container block is required.

This is exactly what HammerMultipart provides, alongside some APIs to make things work.

Such containers may be referenced through `WorldPartComponents.getContainer(BlockGetter get, BlockPos pos)`.
Every container has internal storage for all placed parts, with their placement as a key.

When more parts are placed into a container, it checks  if a part can be placed into its selected spot by a given complex set of rules.

Each part inside a container is considered a `PartEntity`, constructed from `PartDefinition`.

## 🔵 Parts at Core

Similar to how you have `BlockEntityType<T>` that create `BlockEntity` instances, we have `PartDefinition`.

Although it would be more fair to compare `PartDefinition` to vanilla `Block` as it shares some properties with the block type.

### 🪪 PartDefinition
The most important attributes for said definitions are:
- `soundType`, and is accessed by `PartDefinition.getSoundType(PartEntity entity)`
- `survivesInWater`, and is accessed by `PartDefinition.canSurviveInWater(PartEntity entity)`
- `model` - this field is responsible for storing all model visual properties like its particle sprite(s) and sub-models that must be loaded in.
- `tintIndexCount` - the amount of tint indices used up by this part. Useful for things like wires that may need to be tinted according to their redstone signal strength. [This is explained in a separate page](/docs/api/hammermultipart/advanced/tint).
- `cloneItem` - provides the `ItemStack` which is going to get cloned whenever player performs middle-click while having the part selected.

If your part is a wrapper for an existing block, take a look into `Optional<PlacedPartConfiguration> convertBlockToPart(Level level, BlockPos pos, BlockState state)`:
- This method is used to convert a block on a given position into a part. `PlacedPartConfiguration` is a record containing the `PartDefinition`, `PartPlacement` and `IConfiguredPartPlacer` (which creates `PartEntity` if the placement will go through).
- Take a look at how HammerMultipart implements this method in torches (see [PartDefTorch](https://github.com/dragon-forge/HammerMultipart/blob/1.20.1/src/main/java/org/zeith/multipart/impl/parts/PartDefTorch.java))

Each PartDefinition must also implement `PartEntity createEntity(PartContainer container, PartPlacement placement)` method, which is going to create new instances of a `PartEntity`.

### 🐧 PartEntity
These "entities" are responsible for storing part's data, as well as providing all functionality.

There are a ton of methods, which we're going to explore here, although here are the most important ones that you should definitely take a look at:
- `updateShape()`
  - Called periodically to refresh the shape of a part. Useful when dealing with complex shapes like pipes which should change their shape based on connected neighbors.
- `getDrops(@Nullable ServerPlayer harvester, LootParams.Builder context)`
  - Called when this part is broken and its drops are being collected. You should add your part placing item if you have one here.
- `neighborChanged(@Nullable Direction from, BlockPos neigborPos, BlockState neigborState, boolean waterlogged)`
  - Similar to Vanilla's code, invoked from the Block's `neighborChanged`, `placeLiquid` and `updateShape` methods.
  - Use to queue the part removal if your part can no longer exist under given conditions. (Call `container.queuePartRemoval(placement, spawnDrops, playSound, spawnParticles);` method)
- `tickShared()`
  - Called each game tick to update the part's logic. It's being called from the part container `BlockEntity` tick method.
- `getRenderModels()`
  - You should add all models that should be rendered onto the part mesh. Each `ResourceLocation` would be in a format of "yourmod:part/mypart"
  - These must be also added into the definition using `PartDefinition.model.addSubmodel()` unless you are referencing item/block models that are already registered by vanilla (or other mods)
- `Optional<Tuple2<BlockState, Function<BlockPos, BlockEntity>>> disassemblePart()`
  - Called as soon as there is just one part left, attempting to convert it back to the block it may may have been.
  - Used by vanilla parts (ladders, chains, torches) to turn into vanilla blocks instead of using up server resources for no reason.

## ⚙️ Placement Logic

To prevent multiple parts colliding inside a container and/or conflicting with one another, there exist a few mandatory checks before more parts would be placed:
- `PartPlacement.canBePlacedAlongside(Set<PartPlacement> others)` check on the placement a part will occupy;
- `PartDefinition.canPlaceAt(PartContainer container, @Nullable IConfiguredPartPlacer placer, PartPlacement placement)` will call to the context part which is being placed;
- Each taken `PartPlacement` will be asked by calling `isCompatibleWith(PartPlacement other)`, the argument "other" being the context part placement;
- Each placed `PartEntity` may block the placement based on the return value of `blocksPlacementFor(PartDefinition definition, PartPlacement definitionPosition)`;

After these steps are taken into consideration, an optional merge step is attempted:
- If the context `PartPlacement` is occupied, the context `PartDefinition` will run `tryMergeWith(PartContainer container, PartPlacement placement, PartEntity otherEntity)`
If the merge fails, so does the placement.

After all this, the `PartEntity.getPartOccupiedShape()` is called to check the context `PartEntity` against all other parts. Their shape (for this specific call) is obtained via `PartEntity.getPartOccupiedShapeWith(PartEntity toBePlaced, VoxelShape shapeOfEntity)` which gives mod dev an option to shrink the shape down for things like wires while keeping them connected visually.

If no shape intersections would be found, the placement succeeds, and the part places into the container, causing a sync packet to be dispatched to tracking players.