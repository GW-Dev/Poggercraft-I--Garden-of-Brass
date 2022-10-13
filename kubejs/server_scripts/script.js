// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({output: 'chisel:iron_chisel'}),
	event.remove({output: 'chisel:diamond_chisel'}),
	event.remove({output: 'appliedenergistics2:calculation_processor_press'}),
	event.remove({output: 'appliedenergistics2:engineering_processor_press'}),
	event.remove({output: 'appliedenergistics2:logic_processor_press'}),
	event.remove({output: 'appliedenergistics2:silicon_press'}),
	event.remove({output: 'create:chromatic_compound'}),
	event.remove({output: 'create:rose_quartz'}),
	event.remove({id: "create:mixing/brass_ingot"}),
	event.remove({id: "create:mixing/crushed_brass"}),
	event.remove({id: "pneumaticcraft:pressure_chamber/compressed_iron_ingot"}),
	event.remove({id: "pneumaticcraft:pressure_chamber/compressed_iron_block"}),
	event.remove({id: "pneumaticcraft:explosion_crafting/compressed_iron_ingot"}),
	event.remove({id: "pneumaticcraft:explosion_crafting/compressed_iron_block"}),
	event.replaceInput({output: 'create:electron_tube'}, "#forge:nuggets/iron", "botania:elementium_ingot")
	event.replaceInput({mod: 'mythicbotany'}, "#forge:ingots/iron", "pneumaticcraft:ingot_iron_compressed")
	event.replaceInput({id: 'create:sequenced_assembly/precision_mechanism'}, "#forge:plates/gold", "botania:elementium_block")
	event.replaceInput({output: 'appliedenergistics2:controller'}, "appliedenergistics2:smooth_sky_stone_block", "pneumaticcraft:compressed_iron_block")
	event.replaceInput({mod: 'appliedenergistics2'}, "#forge:ingots/iron", "pneumaticcraft:ingot_iron_compressed")
	event.replaceInput({mod: 'bloodmagic'}, "#forge:ingots/gold", "#forge:ingots/brass")
	event.replaceInput({output: "create:andesite_alloy"}, "#forge:nuggets/iron", "botania:manasteel_nugget")
	event.remove({id: "create:crafting/materials/andesite_alloy_from_zinc"})
	event.remove({id: "create:mixing/andesite_alloy_from_zinc"})
	event.replaceInput({mod: 'bloodmagic'}, "#forge:storage_blocks/gold", "#forge:storage_blocks/brass")
	event.replaceInput({mod: 'bloodmagic'}, "#forge:nuggets/gold", "#forge:nuggets/brass")
	event.replaceInput({mod: 'bloodmagic'}, "#forge:ingots/iron", "create:rose_quartz")
	event.replaceInput({mod: 'bloodmagic'}, "#forge:storage_blocks/iron", "create:chromatic_compound")
	event.replaceInput({id: 'bloodmagic:altar/weakbloodorb'}, "#forge:gems/diamond", "#forge:ingots/brass")
	event.replaceInput({id: 'bloodmagic:altar/apprenticebloodorb'}, "#forge:storage_blocks/redstone", "create:electron_tube")
	event.replaceInput({id: 'bloodmagic:altar/magicianbloodorb'}, "#forge:storage_blocks/brass", "create:chromatic_compound")
	event.replaceInput({id: 'bloodmagic:altar/masterbloodorb'}, "bloodmagic:weakbloodshard", "pneumaticcraft:compressed_iron_block")
	event.replaceInput({id: 'bloodmagic:ritual_stone_blank'}, "#forge:obsidian", "create:electron_tube")
	event.replaceInput({id: 'bloodmagic:altar/slate'}, "#forge:stone", "create:chromatic_compound")
	event.replaceInput({output: 'createaddition:capacitor'}, "minecraft:redstone_torch", "create:chromatic_compound")

	event.recipes.createMixing('appliedenergistics2:charged_certus_quartz_crystal', [
		"botania:terrasteel_ingot",
		"botania:dragonstone_block",
		"botania:mana_diamond_block",
      ]).superheated()

	event.recipes.createMixing('minecraft:ink_sac', [
		"minecraft:rotten_flesh",
		"#forge:dyes/black"
      ]).heated()

	event.recipes.createMixing('appliedenergistics2:certus_quartz_crystal', [
		"botania:dragonstone",
		"botania:mana_diamond",
		"create:brass_ingot"
      ]).heated()

	event.recipes.createMixing(Fluid.of('pneumaticcraft:oil', 500), [
		"botania:elementium_block",
        Fluid.of("minecraft:water", 1000)
      ]).superheated().replaceIngredient('appliedenergistics2:charged_certus_quartz_crystal', 'appliedenergistics2:certus_quartz_crystal')

	event.recipes.createMixing('create:crushed_brass', [
		"botania:elementium_nugget",
		"botania:elementium_nugget",
		"create:crushed_copper_ore",
		"create:crushed_zinc_ore"
      ]).heated()

	event.recipes.createMixing('create:brass_ingot', [
		"botania:elementium_nugget",
		"botania:elementium_nugget",
		"#forge:ingots/copper",
		"#forge:ingots/zinc"
      ]).heated()

	event.recipes.createMixing('minecraft:seagrass', [
		"minecraft:grass",
		Fluid.of("minecraft:water", 500)
      ])

	event.recipes.createMixing('minecraft:sea_pickle', [
		"minecraft:seagrass",
		"minecraft:nether_wart",
		"minecraft:glowstone_dust"
      ])
	
	event.recipes.createMixing('create:rose_quartz', [
		"botania:elementium_block",
		"appliedenergistics2:charged_certus_quartz_crystal",
        Fluid.of("minecraft:lava", 250)
      ]).heated()

	event.recipes.createMixing('mana-and-artifice:vinteum_ore', [
		"#forge:gems/lapis",
		"appliedenergistics2:charged_certus_quartz_crystal",
        Fluid.of("minecraft:lava", 250)
      ]).heated()

	event.recipes.createMixing('create:chromatic_compound', [
        '#forge:dusts/glowstone',
        '#forge:dusts/glowstone',
        '#forge:dusts/glowstone',
        'create:powdered_obsidian',
        'create:powdered_obsidian',
        'create:powdered_obsidian',
        'create:polished_rose_quartz',
		'botania:terrasteel_ingot',
		'botania:elementium_ingot',
		'botania:manasteel_ingot'
      ]).superheated()

	  event.recipes.createMixing('pneumaticcraft:ingot_iron_compressed', [
        'create:refined_radiance_casing',
		'create:shadow_steel_casing',
		'create:refined_radiance_casing',
		'create:shadow_steel_casing',
		'botania:terrasteel_block',
		'botania:elementium_block',
		'botania:manasteel_block'
      ]).superheated()

	event.shaped('chisel:iron_chisel', [
		'III',
		' I ',
		' S '
		], {
		S: 'minecraft:stick',
		I: '#forge:ingots/iron'
	})

	event.shaped('chisel:diamond_chisel', [
		'III',
		' I ',
		' S '
		], {
		S: 'minecraft:stick',
		I: '#forge:gems/diamond'
	})

	event.shaped('appliedenergistics2:calculation_processor_press', [
		'BSB',
		'STS',
		'BSB'
		], {
		S: 'create:andesite_alloy',
		B: 'create:brass_ingot',
		T: 'botania:terrasteel_ingot'
	})

	event.shaped('appliedenergistics2:engineering_processor_press', [
		'BSB',
		'STS',
		'BSB'
		], {
		S: 'create:andesite_alloy',
		B: 'create:brass_ingot',
		T: 'botania:elementium_ingot'
	})

	event.shaped('appliedenergistics2:logic_processor_press', [
		'BSB',
		'STS',
		'BSB'
		], {
		S: 'create:andesite_alloy',
		B: 'create:brass_ingot',
		T: 'botania:manasteel_ingot'
	})

	event.shaped('appliedenergistics2:silicon_press', [
		'BSB',
		'STS',
		'BSB'
		], {
		S: 'create:andesite_alloy',
		B: 'create:brass_ingot',
		T: 'minecraft:diamond'
	})

	event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "bloodmagic:weakbloodshard",
		  
		},
		"output": {
		  "item": "mana-and-artifice:chimerite_gem",
		  "count": 1
		},
		"mana": 2000
	  })

	event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:tree_bark",
		  
		},
		"output": {
		  "item": "farmersdelight:tree_bark",
		  "count": 2
		},
		"mana": 2000,
		"catalyst": {
		"type": "block",
		"block": "botania:conjuration_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "botania:cell_block",
		  
		},
		"output": {
		  "item": "minecraft:kelp",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "minecraft:kelp",
		  
		},
		"output": {
		  "item": "minecraft:bamboo",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "minecraft:bamboo",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_beetroots",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_beetroots",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_cabbages",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_cabbages",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_rice",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_rice",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_onions",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_onions",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_tomatoes",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_tomatoes",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_carrots",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_carrots",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_potatoes",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_potatoes",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_beetroots",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})