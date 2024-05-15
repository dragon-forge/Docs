"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[7715],{8509:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=r(5893),i=r(1151);const s={sidebar_position:2},o="\u2699\ufe0f Commands",c={id:"user/hammeranims/command",title:"\u2699\ufe0f Commands",description:"\ud83d\udcc3 Everything of importance",source:"@site/docs/user/hammeranims/command.md",sourceDirName:"user/hammeranims",slug:"/user/hammeranims/command",permalink:"/docs/user/hammeranims/command",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutSidebar",previous:{title:"\ud83c\udf1f Custom Particles",permalink:"/docs/user/hammeranims/registration"}},t={},d=[{value:"\ud83d\udcc3 Everything of importance",id:"-everything-of-importance",level:2},{value:"\u2728 <code>/bedrockmc particle spawn</code>",id:"-bedrockmc-particle-spawn",level:3},{value:"\u2753 <code>/execute</code> extras",id:"-execute-extras",level:3},{value:"\ud83d\udd01 <code>/hammeranims reload</code>",id:"-hammeranims-reload",level:3}];function m(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\ufe0f-commands",children:"\u2699\ufe0f Commands"}),"\n",(0,a.jsx)(n.h2,{id:"-everything-of-importance",children:"\ud83d\udcc3 Everything of importance"}),"\n",(0,a.jsxs)(n.h3,{id:"-bedrockmc-particle-spawn",children:["\u2728 ",(0,a.jsx)(n.code,{children:"/bedrockmc particle spawn"})]}),"\n",(0,a.jsxs)(n.p,{children:["You can spawn particles via commands, using the ",(0,a.jsx)(n.code,{children:"/bedrockmc"})," command."]}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of spawning poof particle:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"/bedrockmc particle spawn hammeranims:poof"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"And here is an example of that, but with an offset:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"/bedrockmc particle spawn hammeranims:poof ~ ~1 ~"})}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"-execute-extras",children:["\u2753 ",(0,a.jsx)(n.code,{children:"/execute"})," extras"]}),"\n",(0,a.jsx)(n.p,{children:"If you have a custom particle, offered by a resource pack, you might want to check if player has it for any reason, you can use the extra execute condition provided by HammerAnimations out of box:"}),"\n",(0,a.jsxs)(n.p,{children:["This command will fire because HammerAnimaations provides the ",(0,a.jsx)(n.code,{children:"poof"})," effect:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"/execute if hasbedrockparticle hammeranims:poof run say hi"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This command will fail since the ",(0,a.jsx)(n.code,{children:"poof"})," exists:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"/execute unless hasbedrockparticle hammeranims:poof run say hi"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This accepts any id, and the tab completions are based on the java-registered effects plus the local effects you have added with resource packs."}),"\n",(0,a.jsxs)(n.h3,{id:"-hammeranims-reload",children:["\ud83d\udd01 ",(0,a.jsx)(n.code,{children:"/hammeranims reload"})]}),"\n",(0,a.jsx)(n.p,{children:"If you're have local changes in your resource pack, you can reload only HammerAnimations content."}),"\n",(0,a.jsxs)(n.p,{children:["By executing ",(0,a.jsx)(n.code,{children:"/hammeranims reload"}),", your game will reload all animations, geometries and particle effects in background."]}),"\n",(0,a.jsx)(n.p,{children:"This comes in handy when working on a resource pack, allowing better fine-tuning of things without waiting for entire resource stack to reload."})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var a=r(7294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);