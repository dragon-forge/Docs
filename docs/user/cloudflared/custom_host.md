---
sidebar_position: 2
displayed_sidebar: tutSidebar 
title: 🌐 Custom Hostnames
---

![Setting up persistent URLs](https://assets.zeith.org/logos/cloudflared.png)

:::tip
Before reading further, make sure you have a **[Cloudflare](https://dash.cloudflare.com/)** account and you have your domain, pointing to Cloudflare's DNS servers, or you have a registered domain on Cloudflare.

If you're unsure on where to begin, **[this course](https://developers.cloudflare.com/learning-paths/get-started/#add-your-domain-to-cloudflare)** should get you on track.
:::

## 🛡️ Meet Zero Trust

You can navigate to it from left sidebar on the Cloudflare dashboard, or **[here](https://one.dash.cloudflare.com/)**.

Step-by-step guide on setting up your own tunnel:
- Open [Zero Trust](https://one.dash.cloudflare.com/) dashboard;
- Expand `Networks` tab on the left;
- Select `Tunnels` under `Networks`;
- Click `➕ Create a tunnel`;
- Select `Cloudflared` connector;
- Pick a name for your tunnel (it should be meaningful of your computer, although it can be anything). The name isn't visible to anyone besides you;
- Click `Save tunnel`;
- Now you should be present with `Choose your environment`. Go through the instructions listed there;
- After following the instruction, you should see a connector appear. Save everything!
- Go to "Public Hostnames" tab on the top (right below your tunnel name)
- Click `➕ Add a public hostname`;
- Pick a `Subdomain` name that you want to use; (**REMEMBER FOR LATER!**)
- Select a `Domain` from ones connected to your Cloudflare account; (**REMEMBER FOR LATER!**)
- Leave the `Path` empty!
- Select `Type` field to `TCP`
- Inside `URL`, type in `127.0.0.1:PORT`, and replace `PORT` with the actual port number. I recommend setting it to `25665` (yes, not `25565`!)
- Click `Save hostname`

Now the tunnel should be ready to go.
Let's tweak the mod's configurations to fit our needs...

## ⚙️ Mod Configs

Locate the mod's config file (`.minecraft/config/cloudflared.cfg`) and locate `hosting` category.
- Set `Start Tunnel` from `true` to `false`. This prevents the built-in tunnel from starting, since we installed cloudflared as a system service earlier on!
- Set `Custom Port Override` from `0` to your `PORT` (In the example above we used `25665`)
- Restart the game

## 😄 Enjoy!

You're ready to go!
When hosting the game, Cloudflared mod will force the server to run on a specific port that we set up in configs, and the service tunnel will point to that port, letting users connect.

:::info
### But wait, what address do players need to use now?!
To put it simply, it will be your address!

While setting up the tunnel in Zero Trust dashboard, we entered the `Subdomain` and `Domain`. That's exactly what we're going to be using!

If I was to host a game on subdomain `mcdoc` of domain `zeith.org`, then my cloudflared URL would be `cloudflared://mcdoc.zeith.org`, and that's the IP other players should be using to connect.

Yes, the `cloudflared://` prefix is cumbersome, but it's very important to let the mod know it has to tunnel the connection through Cloudflare infrastructure.
:::