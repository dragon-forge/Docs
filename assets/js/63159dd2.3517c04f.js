"use strict";(self.webpackChunkhammeranims=self.webpackChunkhammeranims||[]).push([[9628],{4882:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=o(5893),i=o(1151);const r={sidebar_position:0},s="\ud83d\udcdd Registration",a={id:"api/hammeranims/geometry/registration",title:"\ud83d\udcdd Registration",description:"In this page we're going to see how geometries are stored, registered and accessed.",source:"@site/docs/api/hammeranims/geometry/registration.md",sourceDirName:"api/hammeranims/geometry",slug:"/api/hammeranims/geometry/registration",permalink:"/docs/api/hammeranims/geometry/registration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"apiSidebar",previous:{title:"\ud83d\udce6 Geometries",permalink:"/docs/category/-geometries"},next:{title:"\ud83d\udc26 Entity Rendering",permalink:"/docs/api/hammeranims/geometry/entity_rendering"}},l={},d=[{value:"\ud83e\udea3 Geometry storage",id:"-geometry-storage",level:2},{value:"\u2615 Registration (Java)",id:"-registration-java",level:2},{value:"\u2328\ufe0f ModGeometries Class",id:"\ufe0f-modgeometries-class",level:3},{value:"\ud83d\udce6 Adding containers",id:"-adding-containers",level:3},{value:"\ud83d\udd03 Resource loading",id:"-resource-loading",level:2},{value:"\ud83d\udce4 Getting models from container",id:"-getting-models-from-container",level:2},{value:"\ud83c\udf10 IPositionalModel",id:"-ipositionalmodel",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-registration",children:"\ud83d\udcdd Registration"}),"\n",(0,t.jsx)(n.p,{children:"In this page we're going to see how geometries are stored, registered and accessed."}),"\n",(0,t.jsx)(n.h2,{id:"-geometry-storage",children:"\ud83e\udea3 Geometry storage"}),"\n",(0,t.jsxs)(n.p,{children:["Similarly to animations, geometries are stored in container files (usually with ",(0,t.jsx)(n.code,{children:".geo.json"})," suffix)\nEach container may have only one model stored inside."]}),"\n",(0,t.jsx)(n.p,{children:"To register a given geometry container into the game, HammerAnimation provides a separate registry."}),"\n",(0,t.jsxs)(n.p,{children:["Each element of said registry is an instance of ",(0,t.jsx)(n.code,{children:"org.zeith.hammeranims.api.geometry.IGeometryContainer"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["HammerLib already provides us with a simple content registration pipeline (see ",(0,t.jsx)(n.a,{href:"/docs/api/hammerlib/basics/content_registration",children:(0,t.jsx)(n.code,{children:"\ud83d\udcdd Content Registration"})}),")"]}),(0,t.jsx)(n.p,{children:"This is what we're going to use to get models registered properly and easily."})]}),"\n",(0,t.jsx)(n.h2,{id:"-registration-java",children:"\u2615 Registration (Java)"}),"\n",(0,t.jsx)(n.h3,{id:"\ufe0f-modgeometries-class",children:"\u2328\ufe0f ModGeometries Class"}),"\n",(0,t.jsxs)(n.p,{children:["To store our geometry containers, create an interface ",(0,t.jsx)(n.code,{children:"ModGeometries"})," inside your init package."]}),"\n",(0,t.jsx)(n.p,{children:"The result should look something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"package com.yourname.yourmod.init;\n\nimport org.zeith.hammerlib.annotations.*;\n\n@SimplyRegister\npublic interface ModGeometries\n{\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"-adding-containers",children:"\ud83d\udce6 Adding containers"}),"\n",(0,t.jsxs)(n.p,{children:["To add a new geometry container into the mod, simply create a new field inside ",(0,t.jsx)(n.code,{children:"ModGeometries"})," containing the return value of ",(0,t.jsx)(n.code,{children:"IGeometryContainer.create()"}),", and annotating the field with ",(0,t.jsx)(n.code,{children:'@RegistryName("name")'}),'. The "name" must be unique.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package com.yourname.yourmod.init;\n\nimport org.zeith.hammeranims.api.geometry.*;\nimport org.zeith.hammerlib.annotations.*;\n\n@SimplyRegister\npublic interface ModGeometries\n{\n    @RegistryName("your_model")\n    IGeometryContainer YOUR_MODEL = IGeometryContainer.create();\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"-resource-loading",children:"\ud83d\udd03 Resource loading"}),"\n",(0,t.jsx)(n.p,{children:"To make the models actually load, you need to put the geometry files into your mod's resources."}),"\n",(0,t.jsxs)(n.p,{children:["They are generally stored in ",(0,t.jsx)(n.code,{children:"/assets/yourmod/bedrock/geometry/"})," folder."]}),"\n",(0,t.jsxs)(n.p,{children:["Thus, the model from our example should be located at ",(0,t.jsx)(n.code,{children:"/assets/yourmod/bedrock/geometry/your_model.geo.json"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you want to simplify the ",(0,t.jsx)(n.code,{children:".geo.json"})," suffix to just ",(0,t.jsx)(n.code,{children:".json"}),", replace ",(0,t.jsx)(n.code,{children:"IGeometryContainer.create()"})," call with ",(0,t.jsx)(n.code,{children:"IGeometryContainer.createNoSuffix()"})]})}),"\n",(0,t.jsx)(n.h2,{id:"-getting-models-from-container",children:"\ud83d\udce4 Getting models from container"}),"\n",(0,t.jsx)(n.p,{children:"Your geometry container is now loaded into the game.\nBut what can we do with it?"}),"\n",(0,t.jsxs)(n.p,{children:["There are two models (both subclasses of ",(0,t.jsx)(n.code,{children:"IGenericModel"}),") that get created upon loading a geometry file:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"IGeometricModel"})," (CLIENT SIDE ONLY) - a renderable model reference, containing all boxes.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Obtainable via ",(0,t.jsx)(n.code,{children:"IGeomeryContainer.createModel"}),", please refer to ",(0,t.jsx)(n.a,{href:"./generic_rendering",children:"\ud83c\udf4b Generic Rendering"})," on the proper handling of this."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"IPositionalModel"})," (Universal) - usable on both client and server to calculate exact position (with offset) of any given bone.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Obtainable via ",(0,t.jsx)(n.code,{children:"IGeomeryContainer.getPositionalModel"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Applying an animation system to a model must be done before rendering the model, or before obtaining positional data for bones:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"IGenericModel model = ...\nAnimationSystem system = ...\nfloat partialTime = 1F; // 1 for positional stuff. For rendering, you can use your partialTime provided by Minecraft.\n\nmodel.applySystem(partialTime, system);\n\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, there is ",(0,t.jsx)(n.code,{children:"void applySystem(float partialTime, AnimationSystem system, Predicate<AnimationLayer> layerMask)"})," which allows filtering out bones to be animated."]}),"\n",(0,t.jsx)(n.p,{children:"If you want to apply multiple systems...."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"float partialTime = ...\nIGenericModel model = ...\n\nAnimationSystem system1 = ...\nAnimationSystem system2 = ...\n\nGeometryPose pose = model.emptyPose(); // resets model pose and retrieves its default pose.\n// Or you can create a new GeometryPose. That works too.\n\nsystem1.applyAnimation(partialTime, pose);\nsystem2.applyAnimation(partialTime, pose);\n\nmodel.applyPose(pose); // Apply the bone transforms from the pose to the model.\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you are creating a new GeometryPose, you may reuse it for multiple models."}),"\n",(0,t.jsx)(n.p,{children:"When creating clothing system, you might find that creating a pose and applying entity animation system just once, then applying the pose to the entity model and all of the armor sub-models would be much more time-efficient and cause less overall computations to be performed."}),"\n",(0,t.jsx)(n.h2,{id:"-ipositionalmodel",children:"\ud83c\udf10 IPositionalModel"}),"\n",(0,t.jsx)(n.p,{children:"HammerAnimations provides a way to get the global position with any offset of a given bone, even with animations applied.\nThis allows calculating forward directions, relative offsets and much more."}),"\n",(0,t.jsxs)(n.p,{children:["This must be done with ",(0,t.jsx)(n.code,{children:"IPositionalModel"})," as it does not store the actual boxes, only the bone positions and their relations."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"IPositionalModel"})," offers one key method to calculating bone position..."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"IPositionalModel.applyBoneTransforms(@Nonnull Matrix4f base, String bone);"})," (returns boolean)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This method takes in a base (JOML) ",(0,t.jsx)(n.code,{children:"Matrix4f"})," and cascades all parent bones of the input bone to be applied in the correct order."]}),"\n",(0,t.jsx)(n.p,{children:"You will have to make the Matrix4f yourself, but here is an example that is both memory efficient and simple enough:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"protected final Matrix4f mat = new Matrix4f(); // created once per entity/tile\n\npublic Vec3 getGlobalPos(String bone, Vec3 offset)\n{\n\tVec3 worldPos = Vec3.atBottomCenterOf(worldPosition);\n\t\n\tmat.identity()\n\t\t\t.translate((float) worldPos.x, (float) worldPos.y, (float) worldPos.z)\n\t// You might want to add rotation around Y axis here:\n\t//\t\t.rotateY((float) (Mth.DEG_TO_RAD * 0))\n\t;\n\t\n\t// Replace this with your model\n\tIPositionalModel posMod = ModGeometries.YOUR_MODEL.getPositionalModel();\n\t\n\t// Apply the system to our model\n\tposMod.applySystem(1F, animations);\n\n\t// Apply transforms to our matrix\n\tif(posMod.applyBoneTransforms(mat, bone))\n\t{\n\t\tVector3f relativePos = new Vector3f((float) offset.x, (float) offset.y, (float) offset.z);\n\t\tmat.transformPosition(relativePos);\n\t\treturn new Vec3(relativePos.x, relativePos.y, relativePos.z);\n\t}\n\t\n\t// Bone not found, we just take in the base pos...\n\treturn worldPos.add(offset);\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var t=o(7294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);