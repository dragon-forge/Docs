"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[4057],{538:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=o(5893),n=o(1151),i=o(9395);const s={sidebar_position:0,title:"\u2601\ufe0f Getting Started"},a="Getting Started",d={id:"api/hammerlib/intro",title:"\u2601\ufe0f Getting Started",description:"The introduction to adding HammerLib to your workspace.",source:"@site/docs/api/hammerlib/intro.md",sourceDirName:"api/hammerlib",slug:"/api/hammerlib/intro",permalink:"/docs/api/hammerlib/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"\u2601\ufe0f Getting Started"},sidebar:"apiSidebar",previous:{title:"HammerLib",permalink:"/docs/category/hammerlib"},next:{title:"\ud83c\udd95 Basics",permalink:"/docs/category/-basics"}},c={},l=[{value:"Prerequisites!",id:"prerequisites",level:2},{value:"\ud83e\udd8a neoforge.mods.toml (NeoForge)",id:"-neoforgemodstoml-neoforge",level:3},{value:"\ud83d\udd28 Legacy mods.toml (MinecraftForge)",id:"-legacy-modstoml-minecraftforge",level:3},{value:"\ud83c\udd95 public Mod() <em>(your mod constructor)</em>",id:"-public-mod-your-mod-constructor",level:3}];function m(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://assets.zeith.org/logos/hammer-lib.png",alt:"The introduction to adding HammerLib to your workspace."})}),"\n",(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(t.admonition,{title:"Warning!",type:"danger",children:(0,r.jsx)(t.p,{children:"This documentation describes HammerLib 1.19.2 and newer."})}),"\n",(0,r.jsx)(t.p,{children:"With that being said..."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites!"}),"\n",(0,r.jsx)(t.h3,{id:"-neoforgemodstoml-neoforge",children:"\ud83e\udd8a neoforge.mods.toml (NeoForge)"}),"\n",(0,r.jsxs)(i.ZP,{modrinthId:"PlkSuVtM",children:[(0,r.jsxs)(t.p,{children:["Add this piece of code to your ",(0,r.jsx)(t.code,{children:"neoforge.mods.toml"}),":"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-toml",children:'[[dependencies.mod_id]]\n    modId="hammerlib"\n    mandatory=true\n    versionRange="[%VERSION%,)"\n    ordering="NONE"\n    side="BOTH"\n'})}),(0,r.jsxs)(t.p,{children:["Be sure to replace the ",(0,r.jsx)(t.code,{children:"%VERSION%"})," with the actual minimal version you require to run your mod."]})]}),"\n",(0,r.jsx)(t.h3,{id:"-legacy-modstoml-minecraftforge",children:"\ud83d\udd28 Legacy mods.toml (MinecraftForge)"}),"\n",(0,r.jsxs)(i.ZP,{modrinthId:"PlkSuVtM",mcVersion:"1.20.1",children:[(0,r.jsxs)(t.p,{children:["Add this piece of code to your ",(0,r.jsx)(t.code,{children:"mods.toml"}),":"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-toml",children:'[[dependencies.mod_id]]\n    modId="hammerlib"\n    mandatory=true\n    versionRange="[%VERSION%,)"\n    ordering="NONE"\n    side="BOTH"\n'})}),(0,r.jsxs)(t.p,{children:["Be sure to replace the ",(0,r.jsx)(t.code,{children:"%VERSION%"})," with the actual minimal version you require to run your mod."]})]}),"\n",(0,r.jsxs)(t.h3,{id:"-public-mod-your-mod-constructor",children:["\ud83c\udd95 public Mod() ",(0,r.jsx)(t.em,{children:"(your mod constructor)"})]}),"\n",(0,r.jsxs)(t.admonition,{title:"Classic language files",type:"tip",children:[(0,r.jsx)(t.p,{children:"If you want to continue using .lang files instead of .json files, you should register your mod to be treated with HammerLib's language adapter."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'LanguageAdapter.registerMod("modid");\n'})})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9395:(e,t,o)=>{o.d(t,{ZP:()=>l,dv:()=>c});var r=o(7066),n=o(7294),i=o(5893);const s="1.21";function a(e,t){return parseFloat(e.substring(2))-parseFloat(t.substring(2))}function d(e,t,o){if(e=e||{},!t){const o=Object.keys(e).filter((e=>e.endsWith("-latest"))).map((e=>e.substring(0,e.lastIndexOf("-")))).sort(a);t=o[o.length-1]}return{mc:t,ver:e[`${t}-latest`]||o||"[UNKNOWN]"}}function c(e){const[t,o]=(0,n.useState)();return(0,n.useEffect)((()=>{const t=`modrinth-cache-${e}`;let n=localStorage.getItem(t);n&&(n=JSON.parse(n));const i=Date.now()/1e3;if(n?.promos&&n?.lastRefresh&&i-n.lastRefresh<300){const e=n.promos;o(d(e)?.mc||s)}else r.Z.get(`https://api.modrinth.com/updates/${e}/forge_updates.json?neoforge=include`).then((e=>{const r=e.data?.promos;localStorage.setItem(t,JSON.stringify({lastRefresh:parseInt(Date.now()/1e3),promos:r})),o(d(r)?.mc||s)})).catch((e=>console.log(e)))}),[e]),t}function l(e){let{children:t,modrinthId:o,mcVersion:s,fbVersion:a,versionNotation:c,mcNotation:l}=e;const[m,h]=(0,n.useState)({mc:s,ver:a});if(c=c||"%VERSION%",l=l||"%MCVERSION%",(0,n.useEffect)((()=>{const e=`modrinth-cache-${o}`;let t=localStorage.getItem(e);t&&(t=JSON.parse(t));const n=Date.now()/1e3;if(t?.promos&&t?.lastRefresh&&n-t.lastRefresh<300){const e=t.promos;h(d(e,s,a))}else r.Z.get(`https://api.modrinth.com/updates/${o}/forge_updates.json?neoforge=include`).then((t=>{const o=t.data?.promos;localStorage.setItem(e,JSON.stringify({lastRefresh:parseInt(Date.now()/1e3),promos:o})),h(d(o,s,a))})).catch((e=>console.log(e)))}),[o,s]),!t)return m?.ver;const u=e=>n.Children.map(e,(e=>"string"==typeof e?e.replaceAll(c,m?.ver).replaceAll(l,m?.mc):n.isValidElement(e)?n.cloneElement(e,{...e.props,children:u(e.props.children)}):e));return(0,i.jsx)(i.Fragment,{children:u(t)})}}}]);