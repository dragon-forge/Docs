"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Getting Started",p={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Before starting on using Hammer-mods, you should have basic knowledge on Java language, Gradle framework, Minecraft API and NeoForge API.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"HammerAnimations",permalink:"/docs/category/hammeranimations"}},l={},s=[{value:"1.19.2 and Above",id:"1192-and-above",level:2},{value:"1.12.2",id:"1122",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{title:"Get familiar with Java, Gradle, Minecraft & Forge APIs",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Before starting on using Hammer-mods, you should have basic knowledge on Java language, Gradle framework, Minecraft API and NeoForge API.\nWithout them, it will be much harder to develop.")),(0,a.kt)("p",null,"Before using ",(0,a.kt)("strong",{parentName:"p"},"anything here"),", you should firstly add ",(0,a.kt)("strong",{parentName:"p"},"HammerLib")," to your workspace!"),(0,a.kt)("h2",{id:"1192-and-above"},"1.19.2 and Above"),(0,a.kt)("p",null,"Firstly, add my repository to your workspace.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"repositories")," block should already be present in your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n    maven {\n        name = "Zeitheron Maven"\n        url = "https://maven.zeith.org/"\n        content {\n            includeGroupByRegex "org\\\\.zeith.*"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"After adding the repository, navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," closure.\nIn here you are going to add two dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n    implementation fg.deobf("org.zeith.hammerlib:HammerLib-1.19.2:19.3.73")\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Make sure to replace the ",(0,a.kt)("inlineCode",{parentName:"strong"},"1.19.2")," with your game version, ",(0,a.kt)("inlineCode",{parentName:"strong"},"19.3.73")," with latest HammerLib version for given game version.")),(0,a.kt)("p",null,"After this, refresh your project in IDE of your choice."),(0,a.kt)("p",null,"You should see HammerLib and HammerAnimations appear in your classpath."),(0,a.kt)("h2",{id:"1122"},"1.12.2"),(0,a.kt)("admonition",{title:"Warning!",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"While 1.12.2 is very ancient version, HammerLib was built for 1.12.2 to support TerrariaCraft project.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before proceeding"),", make sure you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"stable_39")," MCP mappings. This is ",(0,a.kt)("strong",{parentName:"p"},"very")," important, and ignoring this is going to crash your game."),(0,a.kt)("p",null,"After that is ensured, add my repository to your workspace.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"repositories")," block should already be present in your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n    maven {\n        name = "Zeitheron Maven"\n        url = "https://maven.zeith.org"\n    }\n}\n')),(0,a.kt)("p",null,"After adding the repository, navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," closure.\nIn here you are going to add two dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n    deobfCompile "org.zeith.HammerLib:HammerLib-1.12.2:2.0.6.37"\n}\n')),(0,a.kt)("p",null,"After this, run ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle setupDecompWorkspace idea")," for IntelliJ IDEA or ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle setupDecompWorkspace eclipse")," for Eclipse IDE."),(0,a.kt)("p",null,"You should see HammerLib appear in your classpath."))}u.isMDXComponent=!0}}]);