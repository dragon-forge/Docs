"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[931],{9850:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(5893),r=t(1151);const s={sidebar_position:0},a="\ud83d\udedc Networking",l={id:"api/hammerlib/advanced/networking",title:"\ud83d\udedc Networking",description:"The communication between client and server\u2026",source:"@site/docs/api/hammerlib/advanced/networking.md",sourceDirName:"api/hammerlib/advanced",slug:"/api/hammerlib/advanced/networking",permalink:"/docs/api/hammerlib/advanced/networking",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"apiSidebar",previous:{title:"\ud83e\udde0 Advanced",permalink:"/docs/category/-advanced"},next:{title:"\ud83c\udf33 Zero-code NBT serialization",permalink:"/docs/api/hammerlib/advanced/nbt_serialization"}},o={},d=[{value:"\u2753 How-to",id:"-how-to",level:2},{value:"\u2757 Each IPacket must have:",id:"-each-ipacket-must-have",level:2},{value:"\ud83d\udd01 Must override:",id:"-must-override",level:3},{value:"\ud83d\udd37 And either one of these:",id:"-and-either-one-of-these",level:3},{value:"\ud83c\udf33 NBT alternative",id:"-nbt-alternative",level:2},{value:"\u2615 Example time!",id:"-example-time",level:2},{value:"\ud83c\udfcc\ufe0f Sending the packet",id:"\ufe0f-sending-the-packet",level:2},{value:"\ud83d\udcbb Client to Server:",id:"-client-to-server",level:3},{value:"\ud83d\udda5\ufe0f Server to Client:",id:"\ufe0f-server-to-client",level:3},{value:"\u26a0\ufe0f Large packets?",id:"\ufe0f-large-packets",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-networking",children:"\ud83d\udedc Networking"}),"\n",(0,i.jsx)(n.p,{children:"The communication between client and server\u2026"}),"\n",(0,i.jsx)(n.p,{children:"It's very common to send packets of data between client and server inside any given mod to sync stuff around.\nHammerLib provides a clean and easy way to manage networking without having to perform any extra registrations."}),"\n",(0,i.jsx)(n.h2,{id:"-how-to",children:"\u2753 How-to"}),"\n",(0,i.jsx)(n.p,{children:"Every packet has its own class, and will handle the logic in there as well.\nThe networking code in Minecraft runs in a separate thread, and so does any of its immediate logic.\nGenerally speaking, if your packet modifies game in any way (say, places a block on server, opens a GUI on client etc), it should run on game thread, instead of network thread."}),"\n",(0,i.jsxs)(n.p,{children:["To create a packet, create a new class, and let it implement ",(0,i.jsx)(n.code,{children:"IPacket"})," from ",(0,i.jsx)(n.code,{children:"org.zeith.hammerlib.net"}),".\nWe will be making a client -> server packet that will spawn any entity where sender player is at, if they are in creative mode."]}),"\n",(0,i.jsxs)(n.p,{children:["Our example should definitely run on game thread since it inserts an entity into a world, so we will also annotate the class with ",(0,i.jsx)(n.code,{children:"@MainThreaded"})," from ",(0,i.jsx)(n.code,{children:"org.zeith.hammerlib.net"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"-each-ipacket-must-have",children:"\u2757 Each IPacket must have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No-args constructor (used when recreating packet on destination side)"}),"\n",(0,i.jsx)(n.li,{children:"Optional all-args constructor (to fill out all data inside the packet) (You can still use any other method of settings packet's fields though)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"-must-override",children:"\ud83d\udd01 Must override:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"write(FriendlyByteBuf) (used to write all data to network) (WRITE ORDER MUST MATCH READ ORDER)"}),"\n",(0,i.jsx)(n.li,{children:"read(FriendlyByteBuf) (used to read all data from network) (READ ORDER MUST MATCH WRITE ORDER)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"-and-either-one-of-these",children:"\ud83d\udd37 And either one of these:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"clientExecute(PacketContext)"}),"\n",(0,i.jsx)(n.li,{children:"serverExecute(PacketContext)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-nbt-alternative",children:"\ud83c\udf33 NBT alternative"}),"\n",(0,i.jsxs)(n.p,{children:["There is NBT alternative to ",(0,i.jsx)(n.code,{children:"IPacket"}),", which is ",(0,i.jsx)(n.code,{children:"INBTPacket"}),", it replaces ",(0,i.jsx)(n.code,{children:"FriendlyByteBuf"})," inside ",(0,i.jsx)(n.code,{children:"read"})," and ",(0,i.jsx)(n.code,{children:"write"})," methods with ",(0,i.jsx)(n.code,{children:"CompoundTag"}),", (which makes order of read/writing irrelevant):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"write(CompoundTag)"}),"\n",(0,i.jsx)(n.li,{children:"read(CompoundTag)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-example-time",children:"\u2615 Example time!"}),"\n",(0,i.jsxs)(n.p,{children:["In our example we wanted to spawn an entity. This would require us to pass ",(0,i.jsx)(n.code,{children:"EntityType<?>"})," into the packet."]}),"\n",(0,i.jsxs)(n.p,{children:["I will skip most of the explanation, and show the complete ",(0,i.jsx)(n.code,{children:"PacketSpawnEntity"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package com.yourname.yourmod.net;\n\nimport net.minecraft.network.FriendlyByteBuf;\nimport net.minecraft.world.entity.EntityType;\nimport net.minecraftforge.registries.ForgeRegistries;\nimport org.zeith.hammerlib.net.*;\n\n@MainThreaded\npublic class PacketSpawnEntity\n        implements IPacket\n{\n    protected EntityType<?> type;\n    \n    public PacketSpawnEntity(EntityType<?> type)\n    {\n        this.type = type;\n    }\n    \n    public PacketSpawnEntity()\n    {\n    }\n    \n    @Override\n    public void write(FriendlyByteBuf buf)\n    {\n        buf.writeRegistryId(ForgeRegistries.ENTITY_TYPES, this.type); // Write the entity type into buffer.\n    }\n    \n    @Override\n    public void read(FriendlyByteBuf buf)\n    {\n        this.type = buf.readRegistryId(); // Read the entity type from buffer.\n    }\n    \n    @Override\n    public void serverExecute(PacketContext ctx)\n    {\n        if(!ctx.hasSender()) return; // It was probably sent from server to itself, or the sender has since left.\n        if(type == null) return; // If the entity type is unknown to server, do an early return.\n        \n        var sender = ctx.getSender();\n        if(!sender.isCreative()) return; // We don't want to let survival players to be able to abuse our packet.\n        \n        var level = sender.getLevel(); // sender.level() in 1.20+\n        \n        var entity = type.create(level);\n        if(entity == null) return; // If entity was not allocated for any reason, skip spawning!\n        \n        entity.setPos(sender.position()); // position the entity at sender's feet\n        \n        level.addFreshEntity(entity); // finally, spawn the entity!\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-sending-the-packet",children:"\ud83c\udfcc\ufe0f Sending the packet"}),"\n",(0,i.jsxs)(n.p,{children:["All sending is performed through ",(0,i.jsx)(n.code,{children:"Network"})," from ",(0,i.jsx)(n.code,{children:"org.zeith.hammerlib.net"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"-client-to-server",children:"\ud83d\udcbb Client to Server:"}),"\n",(0,i.jsxs)(n.p,{children:["To send any packet from client to server, call ",(0,i.jsx)(n.code,{children:"Network.sendToServer(IPacket)"})]}),"\n",(0,i.jsx)(n.p,{children:"This is one method that should ever be used."}),"\n",(0,i.jsx)(n.h3,{id:"\ufe0f-server-to-client",children:"\ud83d\udda5\ufe0f Server to Client:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To all players on server:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Network.sendToAll(IPacket)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["To a specific player: (",(0,i.jsx)(n.code,{children:"ServerPlayer"})," preferred. Passing a ",(0,i.jsx)(n.code,{children:"Player"})," causes an extra check)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Network.sendTo(Player, IPacket)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Network.sendTo(IPacket, Player)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["To players around: (Permutations between two args are allowed here too!)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Network.sendToTracking(LevelChunk, IPacket)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Network.sendToTracking(Entity, IPacket)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Network.sendToTracking(BlockEntity, IPacket)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["To players around including self: (This is usually send to all players who are actively tracking the player (which is passed as Entity arg), and additionally sent to the player itself)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Network.sendToTrackingAndSelf(Entity, IPacket)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Network.sendToTrackingAndSelf(IPacket, Entity)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["To players in the same dimension:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Network.SendToDimension(Level, IPacket)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Network.SendToDimension(ResourceKey<Level>, IPacket)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-large-packets",children:"\u26a0\ufe0f Large packets?"}),"\n",(0,i.jsxs)(n.p,{children:["If your packet exceeds ",(0,i.jsx)(n.strong,{children:"~32KB"})," (leave about 256 bytes as a general rule of thumb for packet identification), then you might run into troubles when sending packet from client to server.\nFor the server, the packet size is much more generous, ",(0,i.jsx)(n.strong,{children:"~256MB"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In such cases, splitting a packet would be necessary. To perform splitting, use ",(0,i.jsx)(n.code,{children:"NetTransport.wrap(IPacket)"})," from ",(0,i.jsx)(n.code,{children:"org.zeith.hammerlib.net.lft"}),".\nYou will obtain a ",(0,i.jsx)(n.code,{children:"TransportSession"})," which has ",(0,i.jsx)(n.code,{children:".send\u2026(...)"})," methods to send all slices to receiver."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(7294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);