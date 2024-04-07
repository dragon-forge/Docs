"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[6772],{9553:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(5893),o=i(1151);const s={sidebar_position:2},a="\ud83d\udd27 ConfiguredAnimation",r={id:"hammeranims/animations/configured_animation",title:"\ud83d\udd27 ConfiguredAnimation",description:"This is a class that stores a lot of configurations for an animation.",source:"@site/docs/hammeranims/animations/configured_animation.md",sourceDirName:"hammeranims/animations",slug:"/hammeranims/animations/configured_animation",permalink:"/docs/hammeranims/animations/configured_animation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc83 Animation Systems",permalink:"/docs/hammeranims/animations/animation_system"},next:{title:"\u26a0\ufe0f 1.12.2 Legacy",permalink:"/docs/category/\ufe0f-1122-legacy"}},d={},c=[{value:"\ud83e\udef4 Obtaining instance",id:"-obtaining-instance",level:2},{value:"\u2699\ufe0f Settings",id:"\ufe0f-settings",level:2}];function l(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"-configuredanimation",children:"\ud83d\udd27 ConfiguredAnimation"}),"\n",(0,t.jsx)(e.p,{children:"This is a class that stores a lot of configurations for an animation."}),"\n",(0,t.jsx)(e.admonition,{type:"danger",children:(0,t.jsxs)(e.p,{children:["This is a ",(0,t.jsx)(e.strong,{children:"mutable"})," class, so please be careful of where you're using it, and be sure to copy it whenever necessary!"]})}),"\n",(0,t.jsx)(e.h2,{id:"-obtaining-instance",children:"\ud83e\udef4 Obtaining instance"}),"\n",(0,t.jsx)(e.p,{children:"Generally speaking, you should either create instances in one of two ways:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"new ConfiguredAnimation(ConfiguredAnimation toCopy)"})," - copying constructor."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"IAnimationSource.configure()"})," - Called on ",(0,t.jsx)(e.code,{children:"IAnimationContainer"}),", ",(0,t.jsx)(e.code,{children:"AnimationHolder"})," or ",(0,t.jsx)(e.code,{children:"Animation"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\ufe0f-settings",children:"\u2699\ufe0f Settings"}),"\n",(0,t.jsx)(e.p,{children:"These are all functions that may be adjusted to your liking on any animation."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"weight(float weight)"})," - Adjusts the weight of a given animation. 0 negates any effects of the animation, rendering it invisible. 1 is normal weight."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"speed(float speed)"})," - Changes how fast the animation plays. Increasing the speed reduces the duration."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"startTime(float startTime)"})," - Shifts the starting point of animation. Say, if your animation pull the sword to the player's back from 0s to 1s, and then swings it afterwards (from 1s), and if you want to skip the sword drawing part, swinging immediately, then you would set the ",(0,t.jsx)(e.code,{children:".startTime(1)"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"freezeAt(float time)"})," - Starts the animation at given time and freezes it. Same as ",(0,t.jsx)(e.code,{children:".startTime(time).speed(0.0f)"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"reversed(boolean reverse)"})," and ",(0,t.jsx)(e.code,{children:"reversed()"})," - Allows animation to play backwards. Useful in cases where the animation holds on last frame. Say, you pull the stick from the pocket and position it forwards. Instead of writing the reverse animation, you could just make the animation reversed and it is going to pull the stick back."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"transitionTime(float transitionTime)"})," and ",(0,t.jsx)(e.code,{children:"transitionTime(Duration transitionTime)"})," - Configures how quickly this animation takes over the last active animation. Useful when items change and animations must be instantly swapped, then setting the transitionTime to 0 is the solution. The default value is ",(0,t.jsx)(e.code,{children:"0.25F"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"timeFunction(TimeFunctionInstance timeFunction)"})," - Changes how time flows on this animation. One example of this is animation time normalization, using ",(0,t.jsx)(e.code,{children:"DefaultsHA.NORMALIZED_TIME.of(float time)"})," function, which will make the animation duration fixed, thus speeding/slowing it up/down depending on its original duration."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"loopMode(LoopMode loopMode)"})," - Overrides the animation loop mode. Has 3 values:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"LoopMode.ONCE"})," - Shows the first frame after the animation was completed;"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"LoopMode.HOLD_ON_LAST_FRAME"})," - Holds on last frame after the animation was completed."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"LoopMode.LOOP"})," - Loops the animation to the first frame after it reaches the last frame."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"important(boolean important)"})," and ",(0,t.jsx)(e.code,{children:"important()"})," - Forces this animation to start on the layer even if this animation is configured in exactly the same way otherwise."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"onFinish(AnimationActionInstance action)"})," - Adds an action that will be ran once this animation is complete."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"next(ConfiguredAnimation next)"})," - Specifies the next animation to start after this one is complete. Does not work with looping animations!"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>a});var t=i(7294);const o={},s=t.createContext(o);function a(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);