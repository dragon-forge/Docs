---
sidebar_position: 0
---

# 🖌️ Part Tinting
When displaying models of a part, you might find yourself needing to add a tint to your model. You can do that with HammerMultipart.

## 🪪 PartDefinition
First things first, you must define that your part may have a few "tint slots".
:::info
Tint slots **are not** the same as indices, and are dynamically assigned when the `PartEntity` is placed into a container.
Please do keep that in mind when you read **tint slot**.
:::

To allocate N amount of tint slots, inside your part definition's constructor assign the `tintIndexCount` to the number of slots you wish to reserve.
You don't have to use them all but it is strongly advised against wasting said tint slots to keep memory usage lower.

```java
public class YourPartDefinition extends PartDefinition
{
    public YourPartDefinition()
    {
        this.tintIndexCount = 1;
        ...
```

## 🐧 PartEntity
Now when `PartEntity` is going to be created, you will now have access to multiple tint indices through `PartEntity.getTintIndices()` (returns `int[]`) method.

This array is basically a mapping to get tint slot by tint index.

Overriding `getTintLayerColor` is what actually lets us alter colors.

```java
public class YourPartEntity extends PartEntity
{
    public YourPartEntity(PartDefinition definition, PartContainer container, PartPlacement placement)
    {
        super(definition, container, placement);
    }

    @Override
    public int getTintLayerColor(int tintLayer)
    {
        int[] tintIndices = getTintIndices();
        if(tintLayer == tintIndices[0]) return 0xFF2222;
        return 0xFFFFFF;
    }
}
```

In this example we transform the tint index 0 on our model into the whatever tint slot the container will have.

Speaking of models, how do tint indices get added?

## 🪄 JSON Tinting

When making a JSON model (in BlockBench, for example), you may set a "tintindex" property.
In our example, we are using tint index 0. In a model it would look something like this:
```json
{
    "parent": "minecraft:block/block",
    "render_type": "cutout",
    "textures": {
        "particle": "yourmod:part/your_part"
    },
    "elements": [
        {
            "name": "w",
            "from": [7, 0, 7],
            "to": [9, 3, 9],
            "rotation": {"angle": 0, "axis": "x", "origin": [8, 2.125, 4.25]},
            "faces": {
                "up": {"uv": [7, 7, 9, 9], "texture": "#particle", "tintindex": 0}
            }
        }
    ]
}
```

See the `"tintindex": 0`? That's exactly what makes it tick.
Whever a quad has a tint index, it will be transformed into *tint slot* by HammerMultipart.
You then need to handle the given tint slot, which is exactly what we are doing inside of `getTintLayerColor` method. Transforming `tintindex` 0 into a red color.