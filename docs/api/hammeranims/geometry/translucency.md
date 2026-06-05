---
sidebar_position: 255
---

# 👁️ Translucency Sort

This is an extra layer of optimization that you may use to change render types for specific parts of the model.

In 1.12.2 this enforces translucency vertex sorting on the mesh post-render.

In modern MC this renders in a different render type supplied by `IVertexRenderer.wrap(ISplitVertexConsumer bb)`

Adding this system to your models is quite simple:
- Navigate into your bone or cube in the `.geo.json` file;
- Add `"render_type": "translucent"` property;

You can specify these values for the `render_type`:
- `` (empty string) - default render type, defined by the renderer and may be unpredictable;
- `solid` - renders the mesh with no transparency at all;
- `cutout` - renders the mesh with binary transparency (wither opaque or invisible);
- `translucent` - introduces full alpha spectrum, allowing for all 255 values to be used, but is the most computationally demading, so please use with caution;

The end result should look something like this:
```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.unknown",
				"texture_width": 64,
				"texture_height": 64,
				"visible_bounds_width": 2,
				"visible_bounds_height": 2.5,
				"visible_bounds_offset": [0, 0.75, 0]
			},
			"bones": [
				{
					"name": "MyTranslucentBone",
					"render_type": "translucent",
					"pivot": [0, 0, 0],
					"cubes": [
```

...Or in case of per-cube translucency...
```json
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.unknown",
				"texture_width": 64,
				"texture_height": 64,
				"visible_bounds_width": 2,
				"visible_bounds_height": 2.5,
				"visible_bounds_offset": [0, 0.75, 0]
			},
			"bones": [
				{
					"name": "MyBone",
					"pivot": [0, 0, 0],
					"cubes": [
						{
							"origin": [-4.5, 0, -4.5],
							"render_type": "translucent",
							"size": [9, 1, 9],
							"uv": {
```