---
sidebar_position: 1
title: 📩 Download Cloudflared
---

![The introduction to adding HammerLib to your workspace.](https://assets.zeith.org/logos/cloudflared.png)

# Downloading Cloudflared software

## Manually
- You are going to need to download and install [Cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/) 

## Modpacks
- For modpack makers, you can enable auto-download of Cloudflared. This works for Windows and MacOS users, however not for linux users.

To enable auto-download, locate mods config file `cloudflared.cfg`. Inside it, you'll find "local install" category:
```
"local install" {
    # Should the mod attempt auto-download Cloudflared?
    # Generally not recommended, but is available for Windows and MacOS. [default: false]
    B:"Auto-Download Cloudflared"=false

    # Which file should be used for executing commands? [default: cloudflared]
    S:"Cloudflared Executable"=cloudflared
}
```

Inside here, you can see `Auto-Download Cloudflared` being set to `false`. Set it to `true` to allow the mod to automagically try installing cloudflared.
It is not guaranteed that the service will install. If it does, you may see UAC prompt for the cloudflared installer. This is normal.