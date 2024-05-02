"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[5800],{1514:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=n(5893),r=n(1151);const i={sidebar_position:0},o="\ud83d\udc41\ufe0f Translucency sort",c={id:"api/hammeranims/1.12.2/translucency",title:"\ud83d\udc41\ufe0f Translucency sort",description:"Older versions of the game do not support MultiBufferSource and as such, translucency must be specified inside geometry jsons.",source:"@site/docs/api/hammeranims/1.12.2/translucency.md",sourceDirName:"api/hammeranims/1.12.2",slug:"/api/hammeranims/1.12.2/translucency",permalink:"/docs/api/hammeranims/1.12.2/translucency",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"apiSidebar",previous:{title:"\u26a0\ufe0f 1.12.2 Legacy",permalink:"/docs/category/\ufe0f-1122-legacy"},next:{title:"HammerMultipart",permalink:"/docs/category/hammermultipart"}},a={},u=[];function l(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\ufe0f-translucency-sort",children:"\ud83d\udc41\ufe0f Translucency sort"}),"\n",(0,s.jsxs)(e.p,{children:["Older versions of the game do not support ",(0,s.jsx)(e.code,{children:"MultiBufferSource"})," and as such, translucency must be specified inside geometry jsons."]}),"\n",(0,s.jsx)(e.p,{children:"Doing so is quite simple:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Navigate into your bone or cube"}),"\n",(0,s.jsxs)(e.li,{children:["Add ",(0,s.jsx)(e.code,{children:'"render_type": "translucent"'})," property."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"The end result should look something like this:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n\t"format_version": "1.12.0",\n\t"minecraft:geometry": [\n\t\t{\n\t\t\t"description": {\n\t\t\t\t"identifier": "geometry.unknown",\n\t\t\t\t"texture_width": 64,\n\t\t\t\t"texture_height": 64,\n\t\t\t\t"visible_bounds_width": 2,\n\t\t\t\t"visible_bounds_height": 2.5,\n\t\t\t\t"visible_bounds_offset": [0, 0.75, 0]\n\t\t\t},\n\t\t\t"bones": [\n\t\t\t\t{\n\t\t\t\t\t"name": "MyTranslucentBone",\n\t\t\t\t\t"render_type": "translucent",\n\t\t\t\t\t"pivot": [0, 0, 0],\n\t\t\t\t\t"cubes": [\n'})}),"\n",(0,s.jsx)(e.p,{children:"...Or in case of per-cube translucency..."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n\t"format_version": "1.12.0",\n\t"minecraft:geometry": [\n\t\t{\n\t\t\t"description": {\n\t\t\t\t"identifier": "geometry.unknown",\n\t\t\t\t"texture_width": 64,\n\t\t\t\t"texture_height": 64,\n\t\t\t\t"visible_bounds_width": 2,\n\t\t\t\t"visible_bounds_height": 2.5,\n\t\t\t\t"visible_bounds_offset": [0, 0.75, 0]\n\t\t\t},\n\t\t\t"bones": [\n\t\t\t\t{\n\t\t\t\t\t"name": "MyBone",\n\t\t\t\t\t"pivot": [0, 0, 0],\n\t\t\t\t\t"cubes": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"origin": [-4.5, 0, -4.5],\n\t\t\t\t\t\t\t"render_type": "translucent",\n\t\t\t\t\t\t\t"size": [9, 1, 9],\n\t\t\t\t\t\t\t"uv": {\n'})})]})}function d(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);