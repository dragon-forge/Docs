---
sidebar_position: 4
---

# 📺 Modular GUIs
**[1.20.1+]** Adding inheritance to GUIs.

By using GuiObject as an object and a container for child GuiObjects you can create advanced GUIs which can be easily edited as well.
HammerLib offers a Unity-like approach to constructing your GUI (GameObject alternative - GuiObject).

## 📝 Creating GuiObjects

### 🌳 Root
To begin your journey on using this system, you must first create a root (scene).

To do this, simply call `GuiObject.root()` which will return a new `GuiRootObject` object for you.

This root has a few special methods, which you might use when chain-building a scene, like:
- `GuiRootObject add(GuiObject child)` - similar to a more generic `GuiObject addChild(GuiObject child)`, but it returns `GuiRootObject` to enable chain-building;
- `GuiRootObject onTick(Runnable task)` - allows hooking into the tick before any other child object gets ticked;
- `GuiRootObject onPreRender(FloatConsumer task)` - calls the task with partialTicks prior to rendering any child objects;

**After you're done building your hierarchy, add the `GuiRootObject` to your GUI.**
For this you will need three things:
- `protected GuiRootObject scene;` field in your GUI class;
- `this.scene = addRenderableWidget(<GuiRootObject goes here>);` inside `init()` method of your GUI;
- `this.scene.sendUpdate();` inside the `tick()` or `containerTick()` (for AbstractContainerScreen instances)

### 📦 Object
After you have made your root, you can start adding children to it. If you're looking to use stock objects provided by HammerLib, create a new object builder by using `GuiObject.create("NAME")`. Right now there are a few existing objects that you can use. Call one of these functions on the bulder:
- `GuiObject empty()` - Returns an empty object (usually for inheritance purposes);
- `GuiSlotLinkObject slot(Slot slot)` - Links the slot to the newly created `GuiSlotLinkObject`. You can offset/rotate/scale it however you'd like, the slow will be displayed where this link object will be;
- `GuiImageObject image(ResourceLocation tex, float uOffset, float vOffset, int width, int height, int txWidth, int txHeight)` - Blits an image where the object is located. You can specify the file's texture dimensions;
- `GuiImageObject image(ResourceLocation tex, float uOffset, float vOffset, int width, int height)` - Blits an image where the object is located. This method uses default 256x256 texture dimensions;
- `GuiTextObject text(Component text, int color, boolean shadow)` - Creates a label with desired text component, color and shadow;
- `GuiTextObject text(Component text)` - Creates a label with desired text component, white color and shadow;
- `GuiButtonObject.GuiButtonObjectBuilder button()` - Creates a button builder, which you must complete to obtain your `GuiButtonObject`:
    - `.message(Component message)` - Sets a label to the button component; (optional)
    - `.callback(OnPress callback)` - Sets a click callback to this button component;
    - `.alpha(float alpha)` - Sets transparency for the button textures and label;
    - `.enabled(boolean enabled)` - Toggles the button enabled state;
    - `.packedFGColor(int packedFGColor)` - Changes the color for the button's label;
    - `.pressSound(Holder<SoundEvent> pressSound)` - Changes the sound played when clicking on the button;  (null for no sound)

### ⛓️‍💥 Inheritance
Now that you have both the root and child objects, let's put things together.

Add your objects to another object using `GuiObject.addChild(GuiObject child)`.
This will attempt to add given child into the context object.
:::warning
Please avoid using same names when adding multiple objects to same object, othewise the most recently added object may get a name change.
:::

## 🍵 Example!

Let's create a test GUI and use some of the functions. I will be using chain building, but feel free to declare fields/variables for any child component.
This is just a demo.

```java
public static GuiRootObject assemble(int width, int height)
{
    GuiObject slot, c1, c2, c3, c4;
    
    var g = GuiObject.root()
            .add(GuiObject.create("core")
                    .image(HLConstants.id("textures/gui/test_machine.png"), 0, 0, 176, 166)
                    .centered(width, height)
                    .addChild(GuiObject.create("btn").button()
                            .message(Component.literal("Test Button"))
                            .callback(b -> log.info("Clicked test button."))
                            .build()
                            .setEnabled(false)
                            .size(100, 20)
                            .pos(8, 18)
                            .rotation(-90).offset(0, 50) // offset +50 on Y.
                            .scale(0.5F)
                            .addChild(GuiObject.create("label")
                                    .text(Component.literal("Original Value"))
                                    .offset(0, 20) // add to current position
                            )
                    )
                    .addChild(slot = GuiObject.create("input")
                            .image(HLConstants.id("textures/block/test_machine_front.png"), 0, 0, 16, 16, 16, 16)
                            .pos(56, 17)
                            .pivotAtCenter()
                            .rotation(45)
                            .addChild(c1 = GuiObject.create("1")
                                    .image(HLConstants.id("textures/block/test_machine_front.png"), 0, 0, 8, 8, 8, 8)
                                    .pivotAtCenter()
                            )
                            .addChild(c2 = GuiObject.create("2")
                                    .image(HLConstants.id("textures/block/test_machine_front.png"), 0, 0, 8, 8, 8, 8)
                                    .pivotAtCenter()
                            )
                            .addChild(c3 = GuiObject.create("3")
                                    .image(HLConstants.id("textures/block/test_machine_front.png"), 0, 0, 8, 8, 8, 8)
                                    .pivotAtCenter()
                            )
                            .addChild(c4 = GuiObject.create("4")
                                    .image(HLConstants.id("textures/block/test_machine_front.png"), 0, 0, 8, 8, 8, 8)
                                    .pivotAtCenter()
                            )
                    )
            )
            .onPreRender(partialTicks ->
            {
                long sys = System.currentTimeMillis();
                float dist = Mth.sin(sys % 36000L / 100F);
                float r = sys % 3600L / 10F;
                slot.rotation(r); c1.rotation(r + 45); c2.rotation(r + 45); c3.rotation(r + 45); c4.rotation(r + 45);
                c1.pos(16 + 8 * dist, 16 + 8 * dist); c2.pos(-8 - 8 * dist, 16 + 8 * dist); c3.pos(16 + 8 * dist, -8 - 8 * dist); c4.pos(-8 - 8 * dist, -8 - 8 * dist);
            });
    
    GuiButtonObject cbtn = g.findByPath("core/btn", GuiButtonObject.class);
    if(cbtn != null) cbtn.message = Component.literal("Changed Text");
    
    GuiTextObject lbl = g.findByPath("core/btn/label", GuiTextObject.class);
    if(lbl != null) lbl.setText(Component.literal("I'm under button!"));
    
    // Enable this to see AABBs of all components
    g.debugBoundaries = true;
    g.debugBoundaryColor = 0xFF669999;
    
    return g;
}
```