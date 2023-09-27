"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:0},i="Getting Started",p={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Before starting on using Hammer-mods, you should have basic knowledge on Java language, Gradle framework, Minecraft API and NeoForge API.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"HammerLib",permalink:"/docs/category/hammerlib"}},l={},s=[{value:"1.19.2 and Above",id:"1192-and-above",level:2},{value:"1.12.2",id:"1122",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{title:"Get familiar with Java, Gradle, Minecraft & Forge APIs",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Before starting on using Hammer-mods, you should have basic knowledge on Java language, Gradle framework, Minecraft API and NeoForge API.\nWithout them, it will be much harder to develop.")),(0,a.kt)("p",null,"Before using ",(0,a.kt)("strong",{parentName:"p"},"anything here"),", you should firstly add ",(0,a.kt)("strong",{parentName:"p"},"HammerLib")," to your workspace!"),(0,a.kt)("admonition",{title:"Or use the prepared mod template!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Zeitheron/NeoForgedModTemplate"},"this template")," for setting up workspace.\nJust select the branch that corresponds with the version that you want to develop, and use it as a template")),(0,a.kt)("h2",{id:"1192-and-above"},"1.19.2 and Above"),(0,a.kt)("p",null,"Firstly, add my repository to your workspace.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"repositories")," block should already be present in your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n    maven {\n        name = "Zeitheron Maven"\n        url = "https://maven.zeith.org/"\n        content {\n            includeGroupByRegex "org\\\\.zeith.*"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"After adding the repository, navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," closure.\nIn here you are going to add two dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n    implementation fg.deobf("org.zeith.hammerlib:HammerLib-1.19.2:19.3.73")\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Make sure to replace the ",(0,a.kt)("inlineCode",{parentName:"strong"},"1.19.2")," with your game version, ",(0,a.kt)("inlineCode",{parentName:"strong"},"19.3.73")," with latest HammerLib version for given game version.")),(0,a.kt)("p",null,"After this, refresh your project in IDE of your choice."),(0,a.kt)("p",null,"You should see HammerLib and HammerAnimations appear in your classpath."),(0,a.kt)("h2",{id:"1122"},"1.12.2"),(0,a.kt)("admonition",{title:"Warning!",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"While 1.12.2 is very ancient version, HammerLib was built for 1.12.2 to support TerrariaCraft project.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before proceeding"),", make sure you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"stable_39")," MCP mappings. This is ",(0,a.kt)("strong",{parentName:"p"},"very")," important, and ignoring this is going to crash your game."),(0,a.kt)("p",null,"After that is ensured, add my repository to your workspace.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"repositories")," block should already be present in your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n    maven {\n        name = "Zeitheron Maven"\n        url = "https://maven.zeith.org"\n    }\n}\n')),(0,a.kt)("p",null,"After adding the repository, navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," closure.\nIn here you are going to add two dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n    deobfCompile "org.zeith.HammerLib:HammerLib-1.12.2:2.0.6.37"\n}\n')),(0,a.kt)("p",null,"After this, run ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle setupDecompWorkspace idea")," for IntelliJ IDEA or ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle setupDecompWorkspace eclipse")," for Eclipse IDE."),(0,a.kt)("p",null,"You should see HammerLib appear in your classpath."))}u.isMDXComponent=!0}}]);