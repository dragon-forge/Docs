"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[8272],{1280:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(5893),i=r(1151);const o={sidebar_position:2},s="\ud83c\udf4b Generic Rendering",a={id:"api/hammeranims/geometry/generic_rendering",title:"\ud83c\udf4b Generic Rendering",description:"When rendering anything that is not an entity, you'd have to write the rendering process yourself. You're going to need to obtain the IGeometricModel and render it with RenderData.",source:"@site/docs/api/hammeranims/geometry/generic_rendering.md",sourceDirName:"api/hammeranims/geometry",slug:"/api/hammeranims/geometry/generic_rendering",permalink:"/docs/api/hammeranims/geometry/generic_rendering",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apiSidebar",previous:{title:"\ud83d\udc26 Entity Rendering",permalink:"/docs/api/hammeranims/geometry/entity_rendering"},next:{title:"\u2728 Particles",permalink:"/docs/category/-particles"}},d={},l=[{value:"\u2693 Get IGeometricModel",id:"-get-igeometricmodel",level:2},{value:"\u2699\ufe0f RenderData",id:"\ufe0f-renderdata",level:2},{value:"\ud83d\udd27 IVertexOperator",id:"-ivertexoperator",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-generic-rendering",children:"\ud83c\udf4b Generic Rendering"}),"\n",(0,t.jsxs)(n.p,{children:["When rendering anything that is not an entity, you'd have to write the rendering process yourself. You're going to need to obtain the ",(0,t.jsx)(n.code,{children:"IGeometricModel"})," and render it with ",(0,t.jsx)(n.code,{children:"RenderData"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"-get-igeometricmodel",children:"\u2693 Get IGeometricModel"}),"\n",(0,t.jsxs)(n.p,{children:["The process of getting ",(0,t.jsx)(n.code,{children:"IGeometricModel"})," instance is as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a repository class containing all of the ",(0,t.jsx)(n.code,{children:"IGeometricModel"})," instances as public static fields. Their default value ",(0,t.jsx)(n.strong,{children:"should"})," be ",(0,t.jsx)(n.code,{children:"IGeometricModel.EMPTY"})," for safety, but you can avoid initializing the models altogether, if your code doesn't access the models before the game finishes loading."]}),"\n",(0,t.jsxs)(n.li,{children:["Subscribe to ",(0,t.jsx)(n.code,{children:"RefreshStaleModelsEvent"})," fired on ",(0,t.jsx)(n.code,{children:"HammerAnimationsApi.EVENT_BUS"})," by calling ",(0,t.jsx)(n.code,{children:"HammerAnimationsApi.EVENT_BUS.register(ModGeoRepository.class);"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create a event listener for ",(0,t.jsx)(n.code,{children:"RefreshStaleModelsEvent"})," and call ",(0,t.jsx)(n.code,{children:"IGeometryContainer.createModel()"}),":","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@SubscribeEvent\r\npublic static void refreshGeom(RefreshStaleModelsEvent event)\r\n{\r\n    MY_MODEL = ModGeometries.MY_MODEL.createModel();\r\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now you have a valid model, you can apply the animation system to the model (See ",(0,t.jsx)(n.a,{href:"./registration#-getting-models-from-container",children:(0,t.jsx)(n.code,{children:"\ud83d\udcdd Registration \u2192 \ud83d\udce4 Getting models from container"})}),") and then render it."]}),"\n",(0,t.jsx)(n.admonition,{title:"Warning!",type:"danger",children:(0,t.jsxs)(n.p,{children:["If you don't have any animations for the model, call ",(0,t.jsx)(n.code,{children:"IGeometricModel.resetPose"})," before rendering to ensure that no previous renderer's animations could bleed into the current renderer."]})}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-renderdata",children:"\u2699\ufe0f RenderData"}),"\n",(0,t.jsx)(n.p,{children:"This is an abstract class that varies between version of the game, but maintans compatibility for easier maintaining."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Generally speaking, you must have a final instance of ",(0,t.jsx)(n.code,{children:"RenderData"})," in your renderer (be it entity renderer, tile renderer, item renderer etc)."]}),"\n",(0,t.jsxs)(n.li,{children:["Before rendering a model, you must call ",(0,t.jsx)(n.code,{children:"RenderData.apply"})," to set the mandatory fields of the data.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In this method you can pass in an array of IVertexOperator, letting you precisely alter the vertices."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["After you have both ",(0,t.jsx)(n.code,{children:"IGeometricModel"})," and ",(0,t.jsx)(n.code,{children:"RenderData"})," ready, in your render code, call ",(0,t.jsx)(n.code,{children:"IGeometricModel.renderModel(RenderData)"})," to perform the render operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"-ivertexoperator",children:"\ud83d\udd27 IVertexOperator"}),"\n",(0,t.jsx)(n.p,{children:"This interface is responsible for piping and transforming vertex data into a given renderer."}),"\n",(0,t.jsx)(n.p,{children:"HammerAnimations offers two basic operators:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ColorMulVertexOp"}),": Multiplies vertex color by the color passed into the constructor.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Example: ",(0,t.jsx)(n.code,{children:"new ColorMulVertexOp(0.75F, 0.8F, 1F, 1F)"})," will add a bit of blue tint to the model;"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SpriteRemapVertexOp"}),": Remaps [0; 1] UVs into a smaller UV set for a texture atlas.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Example: ",(0,t.jsx)(n.code,{children:'new SpriteRemapVertexOp(InventoryMenu.BLOCK_ATLAS, new ResourceLocation("block/stone"))'})," will transform the input UV range onto the stone texture of the block atlas;"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(7294);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);