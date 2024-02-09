"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[1159],{811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=t(5893),s=t(1151);const l={sidebar_position:0},r="TupleLib",o={id:"hammerlib/extras/tuplelib",title:"TupleLib",description:"This is one of several libraries included in HammerLib.",source:"@site/docs/hammerlib/extras/tuplelib.md",sourceDirName:"hammerlib/extras",slug:"/hammerlib/extras/tuplelib",permalink:"/docs/hammerlib/extras/tuplelib",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Extras",permalink:"/docs/category/extras"},next:{title:"HammerAnimations",permalink:"/docs/category/hammeranimations"}},c={},a=[];function h(e){const n={code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tuplelib",children:"TupleLib"}),"\n",(0,i.jsxs)(n.p,{children:["This is one of several libraries included in HammerLib.\nIts essence lies in combining multiple objects into one. In total, 27 TupleN classes are provided, where N is the number of types contained within, ranging from [0; 26].\nThe TupleN themselves are immutable, and their fields are final.\nAll TupleN can be created through a unified class ",(0,i.jsx)(n.code,{children:"Tuples"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"All TupleN implement the ITuple interface, which has the following methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"arity"})," - returns the N number of elements inside the given TupleN."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"stream"})," - returns a stream of all elements from left to right."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Various operations can be performed on TupleN:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"stripNR"}),' - "slice off" N types from the right side.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"stripNL"}),' - "slice off" N types from the left side.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"add"})," - add N types to the end."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"insert"})," - insert N types at the beginning."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"applyR"})," - exchange N types on the right with the result of FunctionN."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"applyL"})," - exchange N types on the left with the result of FunctionN."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"apply"})," - exchange ALL types of TupleN with the result of FunctionN."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"acceptR"})," - send N types on the right to ConsumerN."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"acceptL"})," - send N types on the left to ConsumerN."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"accept"})," - send ALL types of TupleN to ConsumerN."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mutable"})," - transform TupleN into TupleN.MutableN (TupleN.MutableN returns itself)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"immutable"})," - transform TupleN.Mutable into TupleN (TupleN returns itself)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"copy"}),' - creates a "shallow" copy of TupleN, inheriting all values. The copy is shallow because the elements of the original TupleN are passed to the copy without deep copying, so changing them (if they are mutable) will cause the original tuple\'s value to change.']}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(7294);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);