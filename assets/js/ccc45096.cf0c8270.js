"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[6679],{7011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(5893),o=t(1151);const i={sidebar_position:3},s="\ud83c\udff7\ufe0f Tags Registration",r={id:"hammerlib/basics/tags",title:"\ud83c\udff7\ufe0f Tags Registration",description:'Tags are the new "Ore Dictionary" (if you\'ve modded MC prior to 1.13 you know what I mean)',source:"@site/docs/hammerlib/basics/tags.md",sourceDirName:"hammerlib/basics",slug:"/hammerlib/basics/tags",permalink:"/docs/hammerlib/basics/tags",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf70 Recipe Registration",permalink:"/docs/hammerlib/basics/recipe_registration"},next:{title:"\ud83e\udde0 Advanced",permalink:"/docs/category/-advanced"}},c={},l=[{value:"\ud83d\udd17 Binding tags",id:"-binding-tags",level:2},{value:"\ud83e\uddf1 Block harvesting",id:"-block-harvesting",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\ufe0f-tags-registration",children:"\ud83c\udff7\ufe0f Tags Registration"}),"\n",(0,a.jsx)(n.p,{children:'Tags are the new "Ore Dictionary" (if you\'ve modded MC prior to 1.13 you know what I mean)'}),"\n",(0,a.jsxs)(n.p,{children:['Basically, to add something to a tag, you would have to go ahead, and edit (or create) a json file for tag, and put all new blocks/items/whatever into said json file.\nThis can get quite annoying when you want to add like 32 lamps that extend the same class, and should all have a tag (say, "yourmod',":lamps",'").']}),"\n",(0,a.jsx)(n.h2,{id:"-binding-tags",children:"\ud83d\udd17 Binding tags"}),"\n",(0,a.jsxs)(n.p,{children:["HammerLib provides a tool to automate tag assigning to objects through ",(0,a.jsx)(n.code,{children:"TagAdapter"})," class and ",(0,a.jsx)(n.code,{children:"BuildTagsEvent"})," (on ",(0,a.jsx)(n.code,{children:"HammerLib.EVENT_BUS"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["At any point in time (preferably in Block/Item/whatever constructor), call ",(0,a.jsx)(n.code,{children:"TagAdapter.bind(TAG, this)"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Going back to our lamp example, the class would look something like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'package com.yourname.yourmod.content.blocks;\n\nimport net.minecraft.resources.ResourceLocation;\nimport net.minecraft.tags.*;\nimport net.minecraft.world.level.block.Block;\nimport org.zeith.hammerlib.core.adapter.TagAdapter;\n\npublic class BlockLamp extends Block\n{\n    public BlockLamp(Properties pProperties)\n    {\n        super(pProperties);\n        TagAdapter.bind(BlockTags.create(new ResourceLocation("yourmod", "lamps")), this);\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Don't forget to register all lamps inside ",(0,a.jsx)(n.code,{children:"ModBlocks"}),"!"]}),"\n",(0,a.jsx)(n.h2,{id:"-block-harvesting",children:"\ud83e\uddf1 Block harvesting"}),"\n",(0,a.jsx)(n.p,{children:"Since 1.17 (or so), block harvest tool and level are also determined by tags."}),"\n",(0,a.jsxs)(n.p,{children:["This is a slightly annoying problem that HammerLib also addresses with ",(0,a.jsx)(n.code,{children:"BlockHarvestAdapter"})," class."]}),"\n",(0,a.jsx)(n.p,{children:"A short and easy-to-understand example would be on our lamps again, we want to mind them with an iron pickaxe."}),"\n",(0,a.jsxs)(n.p,{children:["To achieve this, simply add ",(0,a.jsx)(n.code,{children:"BlockHarvestAdapter.bindTool"})," into the block constructor, resulting in the following code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"package com.yourname.yourmod.content.blocks;\n\nimport net.minecraft.world.item.Tiers;\nimport net.minecraft.world.level.block.Block;\nimport org.zeith.hammerlib.core.adapter.BlockHarvestAdapter;\n\npublic class BlockLamp extends Block\n{\n    public BlockLamp(Properties pProperties)\n    {\n        super(pProperties);\n        BlockHarvestAdapter.bindTool(BlockHarvestAdapter.MineableType.PICKAXE, Tiers.IRON, this);\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(7294);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);