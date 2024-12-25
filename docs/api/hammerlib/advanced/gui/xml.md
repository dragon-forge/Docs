---
sidebar_position: 1
---

# 📝 XML Gui
A resource-driven GUI, editable through resource pack, with full control of object inheritance and transformation!

For ease of use, it is heavily advised to use [HammerHelper](../../../misc/hammerhelper.md)!

## ☕ Getting started
To use the FlowguiXML, you will first have to create a GUI.
Start by creating your screen class, let it extend `FlowguiScreen<T>` (where `T` is your `AbstractContainerMenu`)

:::note
While `FlowguiScreen` is aimed to be used for inventory-based GUIs, you can make a copy of it for your regular screens with no containers.
:::

After you have your screen class, annotate it with `@XmlFlowgui` and specify the value. The value will internally be turned into ResourceLocation, pointing to `/assets/modid/flowgui/<value>.xml`. If you have [HammerHelper](../../../misc/hammerhelper.md) installed, you will receive a red warning and a quickfix to create the XML file.

That's it! Now when the screen will be opened, a new component tree will be parsed from XML file and displayed.

:::info
While developing, you might want to hotswap the XML file, to do that, add `-Dhammerlib.flowgui.nocache=true` property into your runtime.

You can do so inside `build.gradle`, find where the properties are specified inside of your client run, and add  it in.
- 1.20.1: Located in `minecraft { runs { client {...}}}`. Add `property 'hammerlib.flowgui.nocache', 'true'`.
- 1.21.4: Located in `runs { client {...}}`. Add `systemProperty 'hammerlib.flowgui.nocache', 'true'`

This might add slight stuterrs when opening the screen due to disabled caching, thus causing an IO every time. This does allow for hotswapping the xml file without having to reload resource packs every time.
:::

## 🌳 XML Structure

Every flowgui component starts with a `<root>`, where all sub-components will be stored.

Inside root, you may add any components, except for roots.

### ➕ Adding components
1. Create a new `<com>` tag
2. Assign it with `class=""` attribute. The class attribute should match one of the registered `GuiReader` subclasses. You can view built-in component classes [here](#-built-in-components).
3. Fill in required and optional attributes that you may need.

### 📦 Built-in components
By default, HammerLib offers a few component classes pre-registered for use:
- `hammerlib:empty`: An empty object for easier nesting and easier rotation point creation and management.
- `hammerlib:label`: String of text. [ATTRIBUTES](#label-attributes)
- `hammerlib:button`: Button with optional callback. [ATTRIBUTES](#button-attributes)
- `hammerlib:sprite_button`: Button with its background replaced with a controllable image. [ATTRIBUTES](#sprite-button-attributes)
- `hammerlib:image`: Image (or part of it). [ATTRIBUTES](#image-attributes)
- `hammerlib:slot`: Link to vanilla container slots, allowing for them to be transformed with Flowgui system. [ATTRIBUTES](#slot-attributes)
- `hammerlib:input`: (Optionally) editable textbox. [ATTRIBUTES](#input-attributes)

### ➗ Attributes
Some attributes may or may not support JavaScript embedding.
If you want to enable javascript, you must declare it as a JS lambda with up to two parameters.

The parameters provided to JS by default: 
- arg0 `FlowQuery` (query)
- arg1 `GuiObject` (self)

#### Common attributes:
These are the attributes that are applicable to **ANY** component type.
- `id` (**string without '/' character**): The unique identifier of this component within parent's component boundary. If omitted, the name will be auto-generated to allow for reconstruction of text boxes and other components through API. Could be used to find component in Java code with something like `root.findByPath("background/progress_bar")`.
- `if` (**JS**): Condition if the component should be added during tree construction. **Called once.** Example: `(q) => q.gui.hasSomethingEnabled()` will call `hasSomethingEnabled()` inside of your Screen class, expecting a boolean output. Although JS type coercion does happen, so boolean return type is not a strict requirement.
- `x` and `y` (**float**/**JS**): Position relative to parent component. Default is zero. Can be driven by JS. Example: `(q) => math.sin(q.time * 360) * q.gui.getMoveSpeed()`.
- `centered` (`true`/`false`,`int`): Should be positioned relative to the parent? Using `int` is similar to `true`, but positions will be rounded down to integer. **Overrides `x` & `y` attributes.** *For root component: the centering happens relative to the entire game window.*
- `align-x` (`start`/`left`,`center`,`right`/`end`) - Horizontal alignment of this component within paren's component.
- `align-y` (`start`/`top`/`up`,`center`,`bottom`/`down`/`end`) - Vertical alignment of this component within parent's component.
- `width` and `height` (**float**): Dimensions of this component. Used for aligning child components inside of this componend, as well as giving a good idea as to how big this component should be.
- `pivot-centered` (**boolean**): Determines if the pivot of this component should be centered between its position and dimensions. This is handy when rotating a component around its center regardless of its size or position.
- `pivot-x` and `pivot-y` (**float**/**JS**): Defines the rotation point of this component.
- `rotation` (**float**/**JS**): Rotation (in degrees) of this component around pivot point.
- `scale` (**float**/**JS**): Proportional scaling of the component (on all axis) around the rotation point. Example: `0.5`, `(q, self) => 0.5 + (math.sin(q.time * 45) + 1) / 4`.
- `scale-x`, `scale-y`, `scale-z` (**float**/**JS**): Scaling of the component on one axis at a time around the rotation point. Example: `0.5`, `(q, self) => 0.5 + (math.sin(q.time * 45) + 1) / 4`.

#### Root attributes:
Root has a special attribute to enable debugging:
- `debug` (**boolean**): Enable debug boundary drawing for components. If true, will outline every component's axis-aligned boundaries in the tree. This may be handy to align components manually better, or checking why JEI is acting wonky.

#### Label attributes:
- `value` (**TextComponent**/**string**/**JS**): The displayed text of this label. It can take a string as literal text, a json for text component, or use JS to return either component or string. Examples: `value="I am string!"`; `value='{"translate":"block.minecraft.stone"}'`, `value='(q, self) => JSON.stringify({"translate":"block.minecraft.stone"})'`.
- `color` (**hex**/**JS**): Default text color of this label. Examples: `#FFFFFF`, `() => math.rgb(0.5, 0.25, 0.125)`, `(q) => math.hsv(q.time % 1, 0.75, 1)`.
- `shadow` (**boolean**/**JS**): Should the label have the shadow rendered in? Examples: `true`, `(q) => q.time % 2 > 1`.
- `font` (**ResourceLocation**): Which font should be used to render this label? Examples: `minecraft:default`, `minecraft:illageralt`, `minecraft:uniform`, `minecraft:alt`.
- `bold` (**boolean**/**JS**): Should the label have bold formatting? Examples: `true`, `(q) => q.time % 2 > 1`.
- `italic` (**boolean**/**JS**): Should the label have italic formatting? Examples: `true`, `(q) => q.time % 2 > 1`.
- `underlined` (**boolean**/**JS**): Should the label have underlined formatting? Examples: `true`, `(q) => q.time % 2 > 1`.
- `strikethrough` (**boolean**/**JS**): Should the label have strikethrough formatting? Examples: `true`, `(q) => q.time % 2 > 1`.
- `obfuscated` (**boolean**/**JS**): Should the label have obfuscated formatting? Examples: `true`, `(q) => q.time % 2 > 1`.

#### Button attributes:
- `alpha` (**float**/**JS**): Transparency of this button. 0 is invisible, 1 is opaque. Examples: `0.5`, `(q) => (math.sin(q.time) + 1) / 2 + 0.1`
- `text-color` (**hex**/**JS**): Default text color of this button. Examples: `#FFFFFF`, `() => math.rgb(0.5, 0.25, 0.125)`, `(q) => math.hsv(q.time % 1, 0.75, 1)`.
- `press-sound` (**ResourceLocation**): The click sound of this button. Example: `minecraft:ui.button.click`.
- `press-sound-pitch` (**float**): Pitch of the played sound when the button is clicked. Examples: `0`, `0.5`, `1`, `2`.
- `label` (**TextComponent**/**string**/**JS**): The displayed text of this button. It can take a string as literal text, a json for text component, or use JS to return either component or string. Examples: `label="I am string!"`; `label='{"translate":"block.minecraft.stone"}'`, `label='(q, self) => JSON.stringify({"translate":"block.minecraft.stone"})'`.
- `callback` (**JS**): The callback of when the button is pressed. Examples: `(q, self) => q.gui.onPressed(self)`.
- `enabled` (**boolean**/**JS**): Should the button be enabled and clickable? Examples: `true`, `(q) => q.time % 2 > 1`.

#### Sprite button attributes:
- `src` (**ResourceLocation**): The source image for this button, as a resource location to a png image. The image referenced here should have same `width` as this component, but its `height` should be 3x of this button's height, for each state (in order): active, hovered, disabled. Example: `minecraft:textures/gui/container/furnace.png`.
- `alpha` (**float**/**JS**): Transparency of this button. 0 is invisible, 1 is opaque. Examples: `0.5`, `(q) => (math.sin(q.time) + 1) / 2 + 0.1`
- `button-color` (**hex**/**JS**): Tint to the image background of this button. Examples: `#FFFFFF`, `() => math.rgb(0.5, 0.25, 0.125)`, `(q) => math.hsv(q.time % 1, 0.75, 1)`.
- `text-color` (**hex**/**JS**): Default text color of this button. Examples: `#FFFFFF`, `() => math.rgb(0.5, 0.25, 0.125)`, `(q) => math.hsv(q.time % 1, 0.75, 1)`.
- `press-sound` (**ResourceLocation**): The click sound of this button. Example: `minecraft:ui.button.click`.
- `press-sound-pitch` (**float**): Pitch of the played sound when the button is clicked. Examples: `0`, `0.5`, `1`, `2`.
- `label` (**TextComponent**/**string**/**JS**): The displayed text of this button. It can take a string as literal text, a json for text component, or use JS to return either component or string. Examples: `label="I am string!"`; `label='{"translate":"block.minecraft.stone"}'`, `label='(q, self) => JSON.stringify({"translate":"block.minecraft.stone"})'`.
- `callback` (**JS**): The callback of when the button is pressed. Examples: `(q, self) => q.gui.onPressed(self)`.
- `enabled` (**boolean**/**JS**): Should the button be enabled and clickable? Examples: `true`, `(q) => q.time % 2 > 1`.

#### Image attributes:
- `src` (**ResourceLocation**): The source image for this component, as a resource location to a png image. Example: `minecraft:textures/gui/container/furnace.png`.
- `u-coord` and `v-coord` (**float**/**JS**): The top-left corner of the texture to be drawing;
- `image-width` and `image-height` (**float**/**JS**): The dimensions of the image to draw. This also sets the render size inside of the gui, unless `render-width` / `render-height` are specified. Examples: `176`, `166`, `(q) => q.gui.getProgressBar(q.partialTime) * 14`
- `render-width` and `render-height` (**float**/**JS**): Allows adjusting the size of the image rendered to the screen, and making it independent from the image size sampled from the texture.
- `file-width` and `file-height` (**float**/**JS**): Supplies the actual image size for UV calculation. Defaults to 256 if not specified.

#### Slot attributes:
- `index` (**int**/**JS**): The index of the slot to bind to. The indices are provided from `AbstractContainerMenu.slots` field. So depending on the order of how you're adding slots, this index might be different. Consider using JS and FlowQuery's GuiSlotHelper to reduce the number of headaches. Examples: `0`, `(q) => q.slots.playerInventorySlots[0]`, `(q) => q.slots.playerHotbarSlots[0]`, `(q) => q.slots.playerArmorSlots[0]`, `(q) => q.slots.playerOffhandSlots[0]`, `(q) => q.slots.guiSlots[0]`. Please note that if you haven't added the player inventory slots, the indices will be `-1`, therefore the slot link will not be established.

#### Input attributes:
- `max-length` (**int**/**JS**): The maximum number of characters permitted to be typed into the textbox. Examples: `16`, `(q) => math.min(q.time / 5, 32)`
- `text-color` (**hex**/**JS**): Default text color of this text field. Examples: `#FFFFFF`, `() => math.rgb(0.5, 0.25, 0.125)`, `(q) => math.hsv(q.time % 1, 0.75, 1)`.
- `uneditable-text-color` (**hex**/**JS**): Default text color of this text field when it's not editable. Examples: `#FFFFFF`, `() => math.rgb(0.5, 0.25, 0.125)`, `(q) => math.hsv(q.time % 1, 0.75, 1)`.
- `bordered` (**boolean**/**JS**): Should the textbox have borders? Examples: `true`, `(q) => q.time % 2 > 1`.
- `can-lose-focus` (**boolean**/**JS**): Should the textbox be able to lose focus when user clicks outside of it? Examples: `true`, `(q) => q.time % 2 > 1`.
- `editable` (**boolean**/**JS**): Should the textbox be able to lose focus when user clicks outside of it? Examples: `true`, `(q) => q.time % 2 > 1`.
- `hint` (**TextComponent**/**string**/**JS**): The displayed text of this text field when it's empty and not focused. Examples: `hint="I am string!"`; `hint='{"translate":"block.minecraft.stone"}'`, `hint='(q, self) => JSON.stringify({"translate":"block.minecraft.stone"})'`.
- `on-changed` (**JS callback**): The callback on when the text has changed inside of the text field. Takes in two arguments: `FlowQuery`, `String`, does not return anything back. Examples: `(q, str) => q.gui.onTextChanged(str)`

### 🔗 Component Shortcuts
Most built-in components can be shortened by using their specific tags instead of writing `<com class="hammerlib:component">` every time. Instead, you can replace `com` with the applicable tag from the list, and remove class altogether.

All currently supported tag substitutions: (You can view applicable tags for your version inside `FlowguiTags` of HammerLib mod)
- `<img>`: `hammerlib:image`
- `<empty>`: `hammerlib:empty`
- `<button>`: `hammerlib:button`
- `<slot>`: `hammerlib:slot`
- `<input>`: `hammerlib:input`
- `<label>`: `hammerlib:label`

These tags may or may not match with the class of the component, as evident by `<img>` vs `hammerlib:image` discrepancy. Don't blindly assume tag type names!

## 🧀 Examples

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root width="176" height="166" centered="int">
    <img id="background" src="hammerlib:textures/gui/test_machine.png"
         u-coord="0" v-coord="0"
         image-width="176" image-height="166"
         file-width="256" file-height="256"
    >
        <img id="progress_bar" src="hammerlib:textures/gui/test_machine.png"
             x="80" y="35"
             u-coord="176" v-coord="14"
             image-width="(q) => 22 * q.gui.getProgress(q.partialTime)" image-height="16"
             file-width="256" file-height="256"
        />

        <slot id="output_slot" index="(q) => q.slots.guiSlots[2]" x="112" y="31" width="24" height="24"/>
        <import from="c:player_hotbar" x="7" y="25" align-y="bottom"/>
        <import from="c:player_inventory" x="7" y="83" align-y="bottom"/>

        <input
               width="100" height="20"
               on-changed="(q, s) => q.gui.respond(s)"
               max-length="16"
               align-y="bottom" x="(q, self) => math.sin(q.time * 30) * 5 - 22"
               rotation="(q) => -90 + math.cos(q.time * 90) * 5"
               hint='{"translate":"block.minecraft.stone"}'
        />

        <label font="minecraft:default" shadow="false" x="8" y="6"
               value='(q, self) => q.gui.getName &amp;&amp; q.gui.getName() ? q.gui.getName() : JSON.stringify({"translate":"block.minecraft.stone"})'
               color="(q) => math.hsv(0, 0, 0.25)"
        />
        <label value='{"translate":"container.inventory"}' color="#3f3f3f" shadow="false" x="8" y="85" align-y="bottom"/>
    </img>
</root>
```

## ⁉️ XML Tips and Tricks
When writing JS callbacks, you may use XML's multiline attributes in combination with function wrapping. Here's a little example:
```xml
<input
        width="100" height="20"
        on-changed="(q, s) => (function(){
            q.gui.respond(s);
            q.gui.respond(s + '?');
        })()"
        max-length="16"
        align-y="bottom" x="(q, self) => math.sin(q.time * 30) * 5 - 22"
        rotation="(q) => -90 + math.cos(q.time * 90) * 5"
        hint='{"translate":"block.minecraft.stone"}'
/>
```

When you need to get a return value, do something very similar, but add `return` statement in the nested function:
```xml
<label font="minecraft:default" shadow="false" x="8" y="6"
    value='(q, self) => (function(){
        if(q.gui.getName &amp;&amp; q.gui.getName()) return q.gui.getName();
        return JSON.stringify({"translate":"block.minecraft.stone"})
    })()'
    color="(q) => math.hsv(0, 0, 0.25)"
/>
```