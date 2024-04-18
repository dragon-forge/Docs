---
sidebar_position: 0
title: ☁️ What is Cloudflared?
---

![The introduction to adding HammerLib to your workspace.](https://assets.zeith.org/logos/cloudflared.png)

:::info
You can download the mod on [CurseForge](https://www.curseforge.com/projects/1005516) or [Modrinth](https://modrinth.com/project/w5fammEF), or view its [source code](https://github.com/dragon-forge/Cloudflared).
:::

## So what is Cloudflared?

Cloudflared is a technology that allows creating tunnels between two clients without worrying about revealing your IP, as well as ignoring most firewall rules (as long as you can connect to websites, you should be fine!)

This mod is a bridge between Cloudflared technology and Minecraft, allowing players to share their world through Cloudflared. We provide a custom IP address standard in the format of `cloudflared://your-temporary-network.trycloudflare.com` (unless you have your own hostname set up) to distinguish between normal IPs and tunneled.

When adding a server to the server list (or via direct connection), the address starting with cloudflared:// will create a tunnel connection between you and the host, letting you connect without any port-forwarding.