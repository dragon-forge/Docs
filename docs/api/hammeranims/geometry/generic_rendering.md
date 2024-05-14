---
sidebar_position: 2
---

# 🍋 Generic Rendering

When rendering anything that is not an entity, you'd have to write the rendering process yourself. You're going to need to obtain the `IGeometricModel` and render it with `RenderData`.

## ⚓ Get IGeometricModel
The process of getting `IGeometricModel` instance is as follows:
- Create a repository class containing all of the `IGeometricModel` instances as public static fields. Their default value **should** be `IGeometricModel.EMPTY` for safety, but you can avoid initializing the models altogether, if your code doesn't access the models before the game finishes loading.
- Subscribe to `RefreshStaleModelsEvent` fired on `HammerAnimationsApi.EVENT_BUS` by calling `HammerAnimationsApi.EVENT_BUS.register(ModGeoRepository.class);`
- Create a event listener for `RefreshStaleModelsEvent` and call `IGeometryContainer.createModel()`:
    ```java
    @SubscribeEvent
    public static void refreshGeom(RefreshStaleModelsEvent event)
    {
        MY_MODEL = ModGeometries.MY_MODEL.createModel();
    }
    ```
Now you have a valid model, you can apply the animation system to the model (See [`📝 Registration → 📤 Getting models from container`](./registration#-getting-models-from-container)) and then render it.

:::danger Warning!
If you don't have any animations for the model, call `IGeometricModel.resetPose` before rendering to ensure that no previous renderer's animations could bleed into the current renderer.
:::

## ⚙️ RenderData

This is an abstract class that varies between version of the game, but maintans compatibility for easier maintaining.

- Generally speaking, you must have a final instance of `RenderData` in your renderer (be it entity renderer, tile renderer, item renderer etc).

- Before rendering a model, you must call `RenderData.apply` to set the mandatory fields of the data.

- After you have both `IGeometricModel` and `RenderData` ready, in your render code, call `IGeometricModel.renderModel(RenderData)` to perform the render operation.