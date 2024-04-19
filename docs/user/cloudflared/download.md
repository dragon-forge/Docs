---
sidebar_position: 1
title: 📩 Download Cloudflared
---

![What to do if the cloudflared software is missing...](https://assets.zeith.org/logos/cloudflared.png)

## ✨ How does the magic work?
The mod downloads Cloudflared software (depending on your OS) and stores it inside the game folder to allow use of cloudflared executable.

With this executable all the magic happens. It provides us with two critical functions: `tunnel` (hosting/server) and `access` (connection to host / client).

## 👋 Manually
If for some reason Cloudflared wasn't downloaded onto your system automatically, you are going to need to **[download and install Cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/)** manually.

Locate the correct installation of the software for your OS, download it and put into `.minecraft/asm/Cloudflared/` with name of `cloudflared` (or `cloudflared.exe` on Windows).