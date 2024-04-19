---
sidebar_position: 0
title: ☁️ What is Cloudflared?
---

![❓ So what is Cloudflared?](https://assets.zeith.org/logos/cloudflared.png)

:::info
You can download the mod on [CurseForge](https://www.curseforge.com/projects/1005516) or [Modrinth](https://modrinth.com/project/w5fammEF), or view its [source code](https://github.com/dragon-forge/Cloudflared).
:::

## ❓ So what is Cloudflared?

Cloudflared is a technology that allows creating tunnels between two clients without worrying about revealing your IP, as well as ignoring most firewall rules (as long as you can connect to websites, you should be fine!)

This mod is a bridge between Cloudflared technology and Minecraft, allowing players to share their world through Cloudflared. We provide a custom IP address standard in the format of `cloudflared://your-temporary-host-name.trycloudflare.com` (unless you have your own hostname set up) to distinguish between normal IPs and tunneled.

When adding a server to the server list (or via direct connection), the address starting with cloudflared:// will create a tunnel connection between you and the host, letting you connect without any port-forwarding.

## 🖥️ Does it work on dedicated?

Yes, the mod does indeed function on dedicated servers! However, make sure the server cloudflared binaries are downloaded and executed properly.

Otherwise, head to [`📩 Download Cloudflared`](/docs/user/cloudflared/download) for more detals.

## 🔌 How do I connect to cloudflared-hosted game?

Connecting to such servers is as simple as putting the address given to you by the host (starting with `cloudflared://` and with no port) and either adding it as a server.

In other words, put the entire link (including `cloudflared://` part) into the IP address of a server (either as direct connection or add server)

:::danger
Anytime you close the server, the cloudflared URL invalidates, thus you are going to need to share a new one.

Think of it like a one-time password, but for connecting with your friends.
:::