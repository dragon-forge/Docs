"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[7489],{5623:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(5893),i=t(1151);const o={sidebar_position:1},a="\u2728 Creating a Multipart",l={id:"hammermultipart/basics/part_creation",title:"\u2728 Creating a Multipart",description:"Let's apply our knowledge and make a test PartDefinition and PartEntity!",source:"@site/docs/hammermultipart/basics/part_creation.md",sourceDirName:"hammermultipart/basics",slug:"/hammermultipart/basics/part_creation",permalink:"/docs/hammermultipart/basics/part_creation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 Multipart Concept",permalink:"/docs/hammermultipart/basics/parts"},next:{title:"\ud83d\udcdd Multipart Registration",permalink:"/docs/hammermultipart/basics/registration"}},s={},c=[{value:"\ud83e\udeaa PartDefinition",id:"-partdefinition",level:2},{value:"\ud83d\udc27 PartEntity",id:"-partentity",level:2}];function p(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...r.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"-creating-a-multipart",children:"\u2728 Creating a Multipart"}),"\n",(0,n.jsxs)(e.p,{children:["Let's apply our knowledge and make a test ",(0,n.jsx)(e.code,{children:"PartDefinition"})," and ",(0,n.jsx)(e.code,{children:"PartEntity"}),"!"]}),"\n",(0,n.jsx)(e.p,{children:"In our example we're going to make a multipart-compatible redstone button!"}),"\n",(0,n.jsx)(e.h2,{id:"-partdefinition",children:"\ud83e\udeaa PartDefinition"}),"\n",(0,n.jsx)(e.p,{children:"Firstly, we should create PartDefFloorButton:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'package com.yourname.yourmod.impl.parts;\r\n\r\nimport net.minecraft.core.*;\r\nimport net.minecraft.resources.ResourceLocation;\r\nimport net.minecraft.world.entity.player.Player;\r\nimport net.minecraft.world.item.*;\r\nimport net.minecraft.world.level.Level;\r\nimport net.minecraft.world.level.block.*;\r\nimport net.minecraft.world.level.block.state.BlockState;\r\nimport net.minecraft.world.level.block.state.properties.*;\r\nimport net.minecraft.world.phys.BlockHitResult;\r\nimport org.zeith.hammerlib.annotations.Setup;\r\nimport org.zeith.multipart.api.*;\r\nimport org.zeith.multipart.api.placement.*;\r\nimport org.zeith.multipart.impl.parts.entities.PartEntityFloorButton;\r\nimport org.zeith.multipart.init.*;\r\n\r\nimport com.yourname.yourmod.impl.parts.entities.PartEntityFloorButton;\r\nimport com.yourname.yourmod.init.ModPartDefinitions;\r\n\r\nimport java.util.Optional;\r\n\r\npublic class PartDefFloorButton\r\n        extends PartDefinition\r\n{\r\n    // We are using vanilla floor button.\r\n    public static final ResourceLocation BUTTON_MODEL = new ResourceLocation("minecraft", "block/stone_button");\r\n    public static final ResourceLocation PRESSED_BUTTON_MODEL = new ResourceLocation("minecraft", "block/stone_button_pressed");\r\n    \r\n    public PartDefFloorButton()\r\n    {\r\n        model.addSubmodel(BUTTON_MODEL);\r\n        model.addSubmodel(PRESSED_BUTTON_MODEL);\r\n        \r\n        model.addParticleIcon(new ResourceLocation("minecraft:block/stone"));\r\n        \r\n        soundType = SoundType.STONE;\r\n        survivesInWater = false;\r\n        destroySpeed = 0.5F;\r\n        \r\n        cloneItem = Items.STONE_BUTTON::getDefaultInstance;\r\n    }\r\n    \r\n    @Override\r\n    public PartEntity createEntity(PartContainer container, PartPlacement placement)\r\n    {\r\n        return new PartEntityFloorButton(this, container, placement);\r\n    }\r\n    \r\n    @Override\r\n    public Optional<PlacedPartConfiguration> convertBlockToPart(Level level, BlockPos pos, BlockState state)\r\n    {\r\n        if(state.is(Blocks.STONE_BUTTON) && state.getValue(BlockStateProperties.ATTACH_FACE) == AttachFace.FLOOR)\r\n        {\r\n            return Optional.of(new PlacedPartConfiguration(this, PartPlacementsHM.DOWN));\r\n        }\r\n        \r\n        return Optional.empty();\r\n    }\r\n    \r\n    /**\r\n     * This method is called during FMLCommonSetupEvent, and registers the button as fallback placer for the vanilla stone button.\r\n     * In most cases, you should use IMultipartPlacerItem where possible!\r\n     */\r\n    @Setup\r\n    public static void setupFallbackPlacement()\r\n    {\r\n        if(ModPartDefinitions.FLOOR_BUTTON.isRegistered())\r\n        {\r\n            PartRegistries.registerFallbackPartPlacer(Items.STONE_BUTTON, ModPartDefinitions.FLOOR_BUTTON::getPlacement);\r\n        }\r\n    }\r\n    \r\n    /**\r\n     * Used only by setupFallbackPlacement method to provide a placed part from a button if possible.\r\n     */\r\n    private Optional<PlacedPartConfiguration> getPlacement(Level level, BlockPos pos, Player player, ItemStack itemStack, BlockHitResult res)\r\n    {\r\n        if(res.getDirection() == Direction.UP)\r\n        {\r\n            return Optional.of(new PlacedPartConfiguration(this, PartPlacementsHM.DOWN));\r\n        }\r\n        \r\n        return Optional.empty();\r\n    }\r\n}\n'})}),"\n",(0,n.jsx)(e.p,{children:"This creates our definition, adds the models and particles into registrar, and defines a way to convert a button block into a multipart, as well as fallback placement of a vanilla button item as a button part."}),"\n",(0,n.jsx)(e.h2,{id:"-partentity",children:"\ud83d\udc27 PartEntity"}),"\n",(0,n.jsx)(e.p,{children:"Now that our PartDefinition is ready, we can finally make the PartEntity.\r\nIt's a bit more complex, involving quite a few methods to maie it work, but should be manageable!"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'package com.yourname.yourmod.impl.parts.entities;\r\n\r\nimport net.minecraft.core.*;\r\nimport net.minecraft.resources.ResourceLocation;\r\nimport net.minecraft.server.level.ServerPlayer;\r\nimport net.minecraft.sounds.*;\r\nimport net.minecraft.world.*;\r\nimport net.minecraft.world.entity.player.Player;\r\nimport net.minecraft.world.item.*;\r\nimport net.minecraft.world.level.block.*;\r\nimport net.minecraft.world.level.block.entity.BlockEntity;\r\nimport net.minecraft.world.level.block.state.BlockState;\r\nimport net.minecraft.world.level.block.state.properties.*;\r\nimport net.minecraft.world.level.storage.loot.LootParams;\r\nimport net.minecraft.world.phys.BlockHitResult;\r\nimport net.minecraft.world.phys.shapes.VoxelShape;\r\nimport org.jetbrains.annotations.Nullable;\r\nimport org.zeith.hammerlib.api.io.NBTSerializable;\r\nimport org.zeith.hammerlib.util.java.tuples.*;\r\nimport org.zeith.multipart.api.*;\r\nimport org.zeith.multipart.api.placement.PartPlacement;\r\n\r\nimport com.yourname.yourmod.impl.parts.PartDefFloorButton;\r\n\r\nimport java.util.*;\r\nimport java.util.function.Function;\r\n\r\npublic class PartEntityFloorButton\r\n        extends PartEntity\r\n{\r\n    @NBTSerializable("PressTime")\r\n    public int pressTimeLeft;\r\n    \r\n    public PartEntityFloorButton(PartDefinition definition, PartContainer container, PartPlacement placement)\r\n    {\r\n        super(definition, container, placement);\r\n    }\r\n    \r\n    @Override\r\n    public List<ItemStack> getDrops(@Nullable ServerPlayer harvester, LootParams.Builder context)\r\n    {\r\n        return List.of(Items.STONE_BUTTON.getDefaultInstance());\r\n    }\r\n    \r\n    @Override\r\n    public Optional<Tuple2<BlockState, Function<BlockPos, BlockEntity>>> disassemblePart()\r\n    {\r\n        return Optional.of(Tuples.immutable(Blocks.STONE_BUTTON.defaultBlockState().setValue(BlockStateProperties.ATTACH_FACE, AttachFace.FLOOR), null));\r\n    }\r\n    \r\n    @Override\r\n    public void neighborChanged(@Nullable Direction from, BlockPos neigborPos, BlockState neigborState, boolean waterlogged)\r\n    {\r\n        BlockPos pos = container.pos().relative(Direction.DOWN);\r\n        \r\n        if(waterlogged || !container.level().getBlockState(pos).isFaceSturdy(container.level(), pos, Direction.UP))\r\n        {\r\n            container.queuePartRemoval(placement, true, true, true);\r\n        }\r\n        \r\n        super.neighborChanged(from, neigborPos, neigborState, waterlogged);\r\n    }\r\n    \r\n    @Override\r\n    protected VoxelShape updateShape()\r\n    {\r\n        return pressTimeLeft > 0\r\n               ? Block.box(5, 0, 6, 11, 1.02, 10)\r\n               : Block.box(5, 0, 6, 11, 2, 10);\r\n    }\r\n    \r\n    @Override\r\n    public void tickServer()\r\n    {\r\n        super.tickServer();\r\n        if(pressTimeLeft > 0 && --pressTimeLeft <= 0)\r\n        {\r\n            container.causeBlockUpdate = true;\r\n            container.causeRedstoneUpdate = true;\r\n            \r\n            container().level().playSound(null, pos().pos(), SoundEvents.STONE_BUTTON_CLICK_OFF, SoundSource.BLOCKS);\r\n        }\r\n    }\r\n    \r\n    @Override\r\n    public InteractionResult use(Player player, InteractionHand hand, BlockHitResult hit, IndexedVoxelShape selection)\r\n    {\r\n        if(pressTimeLeft <= 0)\r\n        {\r\n            container.causeBlockUpdate = true;\r\n            container.causeRedstoneUpdate = true;\r\n        }\r\n        \r\n        if(pressTimeLeft <= 0)\r\n        {\r\n            container().level().playSound(player, hit.getBlockPos(), SoundEvents.STONE_BUTTON_CLICK_ON, SoundSource.BLOCKS);\r\n        }\r\n        \r\n        pressTimeLeft = 20;\r\n        syncDirty = true;\r\n        \r\n        return InteractionResult.SUCCESS;\r\n    }\r\n    \r\n    @Override\r\n    public List<ResourceLocation> getRenderModels()\r\n    {\r\n        return List.of(pressTimeLeft > 0\r\n                       ? PartDefFloorButton.PRESSED_BUTTON_MODEL\r\n                       : PartDefFloorButton.BUTTON_MODEL\r\n        );\r\n    }\r\n    \r\n    @Override\r\n    public boolean isRedstoneSource()\r\n    {\r\n        return true;\r\n    }\r\n    \r\n    @Override\r\n    public boolean canConnectRedstone(@Nullable Direction direction)\r\n    {\r\n        return direction != Direction.UP;\r\n    }\r\n    \r\n    public int getSignal()\r\n    {\r\n        return pressTimeLeft > 0 ? 15 : 0;\r\n    }\r\n    \r\n    @Override\r\n    public int getStrongSignal(Direction towards)\r\n    {\r\n        return towards == Direction.UP ? getSignal() : 0;\r\n    }\r\n    \r\n    @Override\r\n    public int getWeakSignal(Direction towards)\r\n    {\r\n        return towards != Direction.DOWN ? getSignal() : 0;\r\n    }\r\n}\n'})}),"\n",(0,n.jsxs)(e.p,{children:["You can see us using the ",(0,n.jsx)(e.code,{children:"@NBTSerializable"})," here. It's for ease of use to write serialization easier. ",(0,n.jsx)(e.a,{href:"/docs/hammerlib/advanced/nbt_serialization",children:"You can read about how it works here"}),"!"]})]})}function u(r={}){const{wrapper:e}={...(0,i.a)(),...r.components};return e?(0,n.jsx)(e,{...r,children:(0,n.jsx)(p,{...r})}):p(r)}},1151:(r,e,t)=>{t.d(e,{Z:()=>l,a:()=>a});var n=t(7294);const i={},o=n.createContext(i);function a(r){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function l(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:a(r.components),n.createElement(o.Provider,{value:e},r.children)}}}]);