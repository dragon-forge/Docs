"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[9671],{7876:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var o=r(5893),i=r(1151);const t={sidebar_position:0},s="\ud83d\udc4b Introduction to HammerSeries",a={id:"intro",title:"\ud83d\udc4b Introduction to HammerSeries",description:"Before starting on using Hammer-mods, you should have basic knowledge on Java language, Gradle framework, Minecraft API and NeoForge API.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"HammerLib",permalink:"/docs/category/hammerlib"}},d={},c=[{value:"1.19.2 and Above",id:"1192-and-above",level:2},{value:"1.12.2",id:"1122",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-introduction-to-hammerseries",children:"\ud83d\udc4b Introduction to HammerSeries"}),"\n",(0,o.jsx)(n.admonition,{title:"Get familiar with Java, Gradle, Minecraft & Forge APIs",type:"tip",children:(0,o.jsx)(n.p,{children:"Before starting on using Hammer-mods, you should have basic knowledge on Java language, Gradle framework, Minecraft API and NeoForge API.\nWithout them, it will be much harder to develop."})}),"\n",(0,o.jsxs)(n.p,{children:["Before using ",(0,o.jsx)(n.strong,{children:"anything here"}),", you should firstly add ",(0,o.jsx)(n.strong,{children:"HammerLib"})," to your workspace!"]}),"\n",(0,o.jsx)(n.admonition,{title:"Or use the prepared mod template!",type:"tip",children:(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.a,{href:"https://github.com/Zeitheron/NeoForgedModTemplate",children:"this template"})," for setting up workspace.\nJust select the branch that corresponds with the version that you want to develop, and use it as a template"]})}),"\n",(0,o.jsx)(n.h2,{id:"1192-and-above",children:"1.19.2 and Above"}),"\n",(0,o.jsxs)(n.p,{children:["Firstly, add my repository to your workspace.\nThe ",(0,o.jsx)(n.code,{children:"repositories"})," block should already be present in your ",(0,o.jsx)(n.code,{children:"build.gradle"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:'repositories {\n    maven {\n        name = "Zeitheron Maven"\n        url = "https://maven.zeith.org/"\n        content {\n            includeGroupByRegex "org\\\\.zeith.*"\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["After adding the repository, navigate to ",(0,o.jsx)(n.code,{children:"dependencies"})," closure.\nIn here you are going to add two dependencies:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:'dependencies {\n    implementation fg.deobf("org.zeith.hammerlib:HammerLib-1.19.2:19.3.76")\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Make sure to replace the ",(0,o.jsx)(n.code,{children:"1.19.2"})," with your game version, ",(0,o.jsx)(n.code,{children:"19.3.76"})," with latest HammerLib version for given game version."]})}),"\n",(0,o.jsx)(n.p,{children:"After this, refresh your project in IDE of your choice."}),"\n",(0,o.jsx)(n.p,{children:"You should see HammerLib and HammerAnimations appear in your classpath."}),"\n",(0,o.jsx)(n.h2,{id:"1122",children:"1.12.2"}),"\n",(0,o.jsx)(n.admonition,{title:"Warning!",type:"danger",children:(0,o.jsxs)(n.p,{children:["While 1.12.2 is very ancient version, HammerLib was built and is still being mainteined for 1.12.2 to support ",(0,o.jsx)(n.a,{href:"https://terrariacraft.com",children:"TerrariaCraft"})," project."]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Before proceeding"}),", make sure you are using ",(0,o.jsx)(n.code,{children:"stable_39"})," MCP mappings. This is ",(0,o.jsx)(n.strong,{children:"very"})," important, and ignoring this is going to crash your game."]}),"\n",(0,o.jsxs)(n.p,{children:["After that is ensured, add my repository to your workspace.\nThe ",(0,o.jsx)(n.code,{children:"repositories"})," block should already be present in your ",(0,o.jsx)(n.code,{children:"build.gradle"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:'repositories {\n    maven {\n        name = "Zeitheron Maven"\n        url = "https://maven.zeith.org"\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["After adding the repository, navigate to ",(0,o.jsx)(n.code,{children:"dependencies"})," closure.\nIn here you are going to add two dependencies:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gradle",children:'dependencies {\n    deobfCompile "org.zeith.HammerLib:HammerLib-1.12.2:12.2.49"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["After this, run ",(0,o.jsx)(n.code,{children:"gradle setupDecompWorkspace idea"})," for IntelliJ IDEA or ",(0,o.jsx)(n.code,{children:"gradle setupDecompWorkspace eclipse"})," for Eclipse IDE."]}),"\n",(0,o.jsx)(n.p,{children:"You should see HammerLib appear in your classpath."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Some features from these tutorials may not be available on 1.12.2, but a lot of them should be there."})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var o=r(7294);const i={},t=o.createContext(i);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);