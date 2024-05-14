---
sidebar_position: 1
---

# 🐦 Entity Rendering
HammerAnimation provides a system to dynamically render a geometry with animations, but creating a whole entity renderer would be tedious.

Instead, you can use HammerAnimations' provided class, `BedrockEntityRenderer<T>`.

The class offers a seamless integration of your model into the game.

To change the render type of the model, override `BedrockEntityRenderer.getRenderType` method.

An example of registering a renderer and in-place registration:
```java
package org.zeith.hammeranims.core.client.render.entity;

import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.entity.*;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.client.event.EntityRenderersEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;
import org.zeith.hammeranims.HammerAnimations;
import org.zeith.hammeranims.core.contents.entity.EntityBilly;
import org.zeith.hammeranims.core.init.ContainersHA;

@Mod.EventBusSubscriber(value = Dist.CLIENT, bus = Mod.EventBusSubscriber.Bus.MOD)
public class RenderEntityBilly
		extends BedrockEntityRenderer<EntityBilly>
{
// Here is where the texture is specified
	protected final ResourceLocation texture = new ResourceLocation("hammeranims", "textures/entity/billy.png");
	
	public RenderEntityBilly(EntityRendererProvider.Context pContext)
	{
		// Here is where we specify the geometry file
		super(pContext, ContainersHA.BILLY_GEOM, 0.5F);
	}
	
// This method is responsible for properly choosing the transparency of a given model.
// Use RenderType.entityCutoutNoCull for entities that have either opaque or invisible pixels (no in-between!)
// Use RenderType.entitySolid for entities that do not have any transparency at all (ex. creepers)
// Use RenderType.entityTranslucent for entities that have translucency (partial translucency)
// Use RenderType.entityTranslucentEmissive for entities that have translucency (partial translucency) and should be glowing in darkness
	@Override
	protected RenderType getRenderType(ResourceLocation texture)
	{
		return RenderType.entityCutout(texture);
	}
	
// This method binds our renderer to the entity type
	@SubscribeEvent
	public static void registerRenderer(EntityRenderersEvent.RegisterRenderers e)
	{
		e.registerEntityRenderer(ContainersHA.BILLY_ENTITY, RenderEntityBilly::new);
	}
	
// Here we provide the texture for a given entity.
	@Override
	public ResourceLocation getTextureLocation(EntityBilly entity)
	{
		return texture;
	}
}
```