"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[7557],{6090:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(5893),t=n(1151);const s={sidebar_position:2},o="\ud83c\udf70 Recipe Registration",a={id:"api/hammerlib/basics/recipe_registration",title:"\ud83c\udf70 Recipe Registration",description:"Let's take a look at registering recipes through HammerLib.",source:"@site/docs/api/hammerlib/basics/recipe_registration.md",sourceDirName:"api/hammerlib/basics",slug:"/api/hammerlib/basics/recipe_registration",permalink:"/docs/api/hammerlib/basics/recipe_registration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apiSidebar",previous:{title:"\ud83c\udf10 Legacy .lang files",permalink:"/docs/api/hammerlib/basics/legacy_langs"},next:{title:"\ud83c\udff7\ufe0f Tags Registration",permalink:"/docs/api/hammerlib/basics/tags"}},c={},p=[{value:"\u2615 The process",id:"-the-process",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"-recipe-registration",children:"\ud83c\udf70 Recipe Registration"}),"\n",(0,r.jsx)(i.p,{children:"Let's take a look at registering recipes through HammerLib."}),"\n",(0,r.jsx)(i.p,{children:"Minecraft provides a datapack way of adding recipes through JSON.\nHowever, it is quite annoying to work with, having each recipe its own file, and having to also guess all variables unless you have a template recipe to look at."}),"\n",(0,r.jsx)(i.p,{children:"This is where HammerLib shines: it allows developers to register recipes, at runtime (meaning you can take configs into consideration), of any type through code!"}),"\n",(0,r.jsx)(i.h2,{id:"-the-process",children:"\u2615 The process"}),"\n",(0,r.jsxs)(i.p,{children:["Create a class, and make it implement ",(0,r.jsx)(i.code,{children:"IRecipeProvider"})," from ",(0,r.jsx)(i.code,{children:"org.zeith.hammerlib.api.IRecipeProvider"}),".\nAnnotate your interface with ",(0,r.jsx)(i.code,{children:"@ProvideRecipes"})," from ",(0,r.jsx)(i.code,{children:"org.zeith.hammerlib.annotations.ProvideRecipes"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Now you have to implement ",(0,r.jsx)(i.code,{children:"provideRecipes"})," method."]}),"\n",(0,r.jsx)(i.p,{children:"The result should look something like this:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'package com.yourname.yourmod.init;\n\nimport net.minecraft.world.item.Items;\nimport net.minecraftforge.common.Tags;\nimport org.zeith.hammerlib.annotations.*;\nimport org.zeith.hammerlib.api.IRecipeProvider;\nimport org.zeith.hammerlib.event.recipe.RegisterRecipesEvent;\n\n@ProvideRecipes\npublic class ModRecipes\n        implements IRecipeProvider\n{\n    @Override\n    public void provideRecipes(RegisterRecipesEvent event)\n    {\n        // TODO: Register recipes!\n\n        event.shaped() // here\'s an example of adding a recipe!\n                .result(Items.CHAINMAIL_CHESTPLATE)\n                .shape("n n", "nnn", "nnn")\n                .map(\'n\', Tags.Items.NUGGETS_IRON)\n                .register();\n    }\n}\n'})}),"\n",(0,r.jsx)(i.p,{children:"That's pretty much it!\nThe recipes can be turned off by modpack developers through configs."}),"\n",(0,r.jsxs)(i.p,{children:["You may add custom modded recipe types using ",(0,r.jsx)(i.code,{children:"event.add(Recipe)"})," method."]})]})}function m(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>o});var r=n(7294);const t={},s=r.createContext(t);function o(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);