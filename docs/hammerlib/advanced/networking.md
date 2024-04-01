---
sidebar_position: 0
---

# 🛜 Networking
The communication between client and server…

It's very common to send packets of data between client and server inside any given mod to sync stuff around.
HammerLib provides a clean and easy way to manage networking without having to perform any extra registrations.

## ❓ How-to

Every packet has its own class, and will handle the logic in there as well.
The networking code in Minecraft runs in a separate thread, and so does any of its immediate logic.
Generally speaking, if your packet modifies game in any way (say, places a block on server, opens a GUI on client etc), it should run on game thread, instead of network thread.

To create a packet, create a new class, and let it implement `IPacket` from `org.zeith.hammerlib.net`.
We will be making a client -> server packet that will spawn any entity where sender player is at, if they are in creative mode.

Our example should definitely run on game thread since it inserts an entity into a world, so we will also annotate the class with `@MainThreaded` from `org.zeith.hammerlib.net`.

## ❗ Each IPacket must have:
- No-args constructor (used when recreating packet on destination side)
- Optional all-args constructor (to fill out all data inside the packet) (You can still use any other method of settings packet's fields though)

### 🔁 Must override:
- write(FriendlyByteBuf) (used to write all data to network) (WRITE ORDER MUST MATCH READ ORDER)
- read(FriendlyByteBuf) (used to read all data from network) (READ ORDER MUST MATCH WRITE ORDER)

### 🔷 And either one of these:
- clientExecute(PacketContext)
- serverExecute(PacketContext)

## 🌳 NBT alternative
There is NBT alternative to `IPacket`, which is `INBTPacket`, it replaces `FriendlyByteBuf` inside `read` and `write` methods with `CompoundTag`, (which makes order of read/writing irrelevant):
- write(CompoundTag)
- read(CompoundTag)

## ☕ Example time!
In our example we wanted to spawn an entity. This would require us to pass `EntityType<?>` into the packet.

I will skip most of the explanation, and show the complete `PacketSpawnEntity`:
```java
package com.yourname.yourmod.net;

import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.world.entity.EntityType;
import net.minecraftforge.registries.ForgeRegistries;
import org.zeith.hammerlib.net.*;

@MainThreaded
public class PacketSpawnEntity
        implements IPacket
{
    protected EntityType<?> type;
    
    public PacketSpawnEntity(EntityType<?> type)
    {
        this.type = type;
    }
    
    public PacketSpawnEntity()
    {
    }
    
    @Override
    public void write(FriendlyByteBuf buf)
    {
        buf.writeRegistryId(ForgeRegistries.ENTITY_TYPES, this.type); // Write the entity type into buffer.
    }
    
    @Override
    public void read(FriendlyByteBuf buf)
    {
        this.type = buf.readRegistryId(); // Read the entity type from buffer.
    }
    
    @Override
    public void serverExecute(PacketContext ctx)
    {
        if(!ctx.hasSender()) return; // It was probably sent from server to itself, or the sender has since left.
        if(type == null) return; // If the entity type is unknown to server, do an early return.
        
        var sender = ctx.getSender();
        if(!sender.isCreative()) return; // We don't want to let survival players to be able to abuse our packet.
        
        var level = sender.getLevel(); // sender.level() in 1.20+
        
        var entity = type.create(level);
        if(entity == null) return; // If entity was not allocated for any reason, skip spawning!
        
        entity.setPos(sender.position()); // position the entity at sender's feet
        
        level.addFreshEntity(entity); // finally, spawn the entity!
    }
}
```

## 🏌️ Sending the packet

All sending is performed through `Network` from `org.zeith.hammerlib.net`.

### 💻 Client to Server:
To send any packet from client to server, call `Network.sendToServer(IPacket)`

This is one method that should ever be used.

### 🖥️ Server to Client:
- To all players on server: 
  - `Network.sendToAll(IPacket)`
- To a specific player: (`ServerPlayer` preferred. Passing a `Player` causes an extra check)
  - `Network.sendTo(Player, IPacket)`
  - `Network.sendTo(IPacket, Player)`
- To players around: (Permutations between two args are allowed here too!)
  - `Network.sendToTracking(LevelChunk, IPacket)`
  - `Network.sendToTracking(Entity, IPacket)`
  - `Network.sendToTracking(BlockEntity, IPacket)`
- To players around including self: (This is usually send to all players who are actively tracking the player (which is passed as Entity arg), and additionally sent to the player itself)
  - `Network.sendToTrackingAndSelf(Entity, IPacket)`
  - `Network.sendToTrackingAndSelf(IPacket, Entity)`
- To players in the same dimension:
  - `Network.SendToDimension(Level, IPacket)`
  - `Network.SendToDimension(ResourceKey<Level>, IPacket)`

## ⚠️ Large packets?

If your packet exceeds **~32KB** (leave about 256 bytes as a general rule of thumb for packet identification), then you might run into troubles when sending packet from client to server.
For the server, the packet size is much more generous, **~256MB**.

In such cases, splitting a packet would be necessary. To perform splitting, use `NetTransport.wrap(IPacket)` from `org.zeith.hammerlib.net.lft`.
You will obtain a `TransportSession` which has `.send…(...)` methods to send all slices to receiver.