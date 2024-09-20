"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[3513],{5110:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(5893),a=i(1151);const s={sidebar_position:2},o="\ud83d\udd27 ConfiguredAnimation",r={id:"api/hammeranims/animations/configured_animation",title:"\ud83d\udd27 ConfiguredAnimation",description:"This is a class that stores a lot of configurations for an animation.",source:"@site/docs/api/hammeranims/animations/configured_animation.md",sourceDirName:"api/hammeranims/animations",slug:"/api/hammeranims/animations/configured_animation",permalink:"/docs/api/hammeranims/animations/configured_animation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apiSidebar",previous:{title:"\ud83d\udc83 Animation Systems",permalink:"/docs/api/hammeranims/animations/animation_system"},next:{title:"\ud83c\udfc3\u200d\u2642\ufe0f AnimationAction",permalink:"/docs/api/hammeranims/animations/animation_actions"}},l={},d=[{value:"\ud83e\udef4 Obtaining instance",id:"-obtaining-instance",level:2},{value:"\u2699\ufe0f Settings",id:"\ufe0f-settings",level:2},{value:"\ud83c\udfad SerializableMask",id:"-serializablemask",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-configuredanimation",children:"\ud83d\udd27 ConfiguredAnimation"}),"\n",(0,t.jsx)(n.p,{children:"This is a class that stores a lot of configurations for an animation."}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["This is a ",(0,t.jsx)(n.strong,{children:"mutable"})," class, so please be careful of where you're using it, and be sure to copy it whenever necessary!"]})}),"\n",(0,t.jsx)(n.h2,{id:"-obtaining-instance",children:"\ud83e\udef4 Obtaining instance"}),"\n",(0,t.jsx)(n.p,{children:"Generally speaking, you should either create instances in one of two ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"new ConfiguredAnimation(ConfiguredAnimation toCopy)"})," - copying constructor."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"IAnimationSource.configure()"})," - Called on ",(0,t.jsx)(n.code,{children:"IAnimationContainer"}),", ",(0,t.jsx)(n.code,{children:"AnimationHolder"})," or ",(0,t.jsx)(n.code,{children:"Animation"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-settings",children:"\u2699\ufe0f Settings"}),"\n",(0,t.jsx)(n.p,{children:"These are all functions that may be adjusted to your liking on any animation."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"weight(float weight)"})," - Adjusts the weight of a given animation. 0 negates any effects of the animation, rendering it invisible. 1 is normal weight."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"speed(float speed)"})," - Changes how fast the animation plays. Increasing the speed reduces the duration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"startTime(float startTime)"})," - Shifts the starting point of animation. Say, if your animation pull the sword to the player's back from 0s to 1s, and then swings it afterwards (from 1s), and if you want to skip the sword drawing part, swinging immediately, then you would set the ",(0,t.jsx)(n.code,{children:".startTime(1)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"freezeAt(float time)"})," - Starts the animation at given time and freezes it. Same as ",(0,t.jsx)(n.code,{children:".startTime(time).speed(0.0f)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"reversed(boolean reverse)"})," and ",(0,t.jsx)(n.code,{children:"reversed()"})," - Allows animation to play backwards. Useful in cases where the animation holds on last frame. Say, you pull the stick from the pocket and position it forwards. Instead of writing the reverse animation, you could just make the animation reversed and it is going to pull the stick back."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transitionTime(float transitionTime)"})," and ",(0,t.jsx)(n.code,{children:"transitionTime(Duration transitionTime)"})," - Configures how quickly this animation takes over the last active animation. Useful when items change and animations must be instantly swapped, then setting the transitionTime to 0 is the solution. The default value is ",(0,t.jsx)(n.code,{children:"0.25F"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timeFunction(TimeFunctionInstance timeFunction)"})," - Changes how time flows on this animation. One example of this is animation time normalization, using ",(0,t.jsx)(n.code,{children:"DefaultsHA.NORMALIZED_TIME.of(float time)"})," function, which will make the animation duration fixed, thus speeding/slowing it up/down depending on its original duration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mask(SerializableMask mask)"})," - Applies a mask to this animation. See ",(0,t.jsx)(n.a,{href:"#%EF%B8%8F-serializablemask",children:(0,t.jsx)(n.code,{children:"\u2699\ufe0f SerializableMask"})})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"loopMode(LoopMode loopMode)"})," - Overrides the animation loop mode. Has 3 values:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LoopMode.ONCE"})," - Shows the first frame after the animation was completed;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LoopMode.HOLD_ON_LAST_FRAME"})," - Holds on last frame after the animation was completed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LoopMode.LOOP"})," - Loops the animation to the first frame after it reaches the last frame."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"important(boolean important)"})," and ",(0,t.jsx)(n.code,{children:"important()"})," - Forces this animation to start on the layer even if this animation is configured in exactly the same way otherwise."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onFinish(AnimationActionInstance action)"})," - Adds an action that will be ran once this animation is complete."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"next(ConfiguredAnimation next)"})," - Specifies the next animation to start after this one is complete. Does not work with looping animations!"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"-serializablemask",children:"\ud83c\udfad SerializableMask"}),"\n",(0,t.jsx)(n.p,{children:"This class allows excluding bones from animation, or adjusting weights for individual bones."}),"\n",(0,t.jsxs)(n.p,{children:["To create a mask, call ",(0,t.jsx)(n.code,{children:"SerializableMask.builder()"})," to create a new instance of a builder.\r\nAfter you're done configuring the builder, call ",(0,t.jsx)(n.code,{children:".build()"})]}),"\n",(0,t.jsx)(n.p,{children:"There are a few methods to configure a mask through a builder:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"exclude(String bone)"})," - Excludes passed bone from being animated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"excludeAll(String... bones)"})," - Excludes passed in bones from being animated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"excludes(Collection<? extends String> excludes)"})," - Excludes passed in bones from being animated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"boneWeight(String bone, float weight)"})," - Adjusts weight to one specific bone."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'SerializableMask mask = SerializableMask.builder()\r\n\t\t.exclude("Head")\r\n\t\t.excludeAll("LeftLeg", "RightLeg")\r\n\t\t.boneWeight("RightArm", 0.5F)\r\n\t\t.build();\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(7294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);