"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[82],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:2},o="Recipe Registration",s={unversionedId:"hammerlib/hlbasics/recipe_registration",id:"hammerlib/hlbasics/recipe_registration",title:"Recipe Registration",description:"Let's take a look at registering recipes through HammerLib.",source:"@site/docs/hammerlib/hlbasics/recipe_registration.md",sourceDirName:"hammerlib/hlbasics",slug:"/hammerlib/hlbasics/recipe_registration",permalink:"/docs/hammerlib/hlbasics/recipe_registration",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Content Registration",permalink:"/docs/hammerlib/hlbasics/content_registration"},next:{title:"Tags Registration",permalink:"/docs/hammerlib/hlbasics/tags_registration"}},p={},c=[{value:"The process",id:"the-process",level:2}],l={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"recipe-registration"},"Recipe Registration"),(0,i.kt)("p",null,"Let's take a look at registering recipes through HammerLib."),(0,i.kt)("p",null,"Minecraft provides a datapack way of adding recipes through JSON.\nHowever, it is quite annoying to work with, having each recipe its own file, and having to also guess all variables unless you have a template recipe to look at."),(0,i.kt)("p",null,"This is where HammerLib shines: it allows developers to register recipes, at runtime (meaning you can take configs into consideration), of any type through code!"),(0,i.kt)("h2",{id:"the-process"},"The process"),(0,i.kt)("p",null,"Create a class, and make it implement ",(0,i.kt)("inlineCode",{parentName:"p"},"IRecipeProvider")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"org.zeith.hammerlib.api.IRecipeProvider"),".\nAnnotate your interface with ",(0,i.kt)("inlineCode",{parentName:"p"},"@ProvideRecipes")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"org.zeith.hammerlib.annotations.ProvideRecipes"),"."),(0,i.kt)("p",null,"Now you have to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"provideRecipes")," method."),(0,i.kt)("p",null,"The result should look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.yourname.yourmod.init;\n\nimport net.minecraft.world.item.Items;\nimport net.minecraftforge.common.Tags;\nimport org.zeith.hammerlib.annotations.*;\nimport org.zeith.hammerlib.api.IRecipeProvider;\nimport org.zeith.hammerlib.event.recipe.RegisterRecipesEvent;\n\n@ProvideRecipes\npublic class ModRecipes\n        implements IRecipeProvider\n{\n    @Override\n    public void provideRecipes(RegisterRecipesEvent event)\n    {\n        // TODO: Register recipes!\n\n        event.shaped() // here\'s an example of adding a recipe!\n                .result(Items.CHAINMAIL_CHESTPLATE)\n                .shape("n n", "nnn", "nnn")\n                .map(\'n\', Tags.Items.NUGGETS_IRON)\n                .register();\n    }\n}\n')),(0,i.kt)("p",null,"That's pretty much it!\nThe recipes can be turned off by modpack developers through configs."),(0,i.kt)("p",null,"You may add custom modded recipe types using ",(0,i.kt)("inlineCode",{parentName:"p"},"event.add(Recipe)")," method."))}u.isMDXComponent=!0}}]);