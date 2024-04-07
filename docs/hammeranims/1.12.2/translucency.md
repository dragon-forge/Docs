---
sidebar_position: 0
---

# 👁️ Translucency sort

Older versions of the game do not support `MultiBufferSource` and as such, translucency must be specified inside geometry jsons.

Doing so is quite simple:
- Navigate into your bone or cube
- Add `"render_type": "translucent"` property.

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