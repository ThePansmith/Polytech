ServerEvents.recipes(event => {
    if (isExpertMode) {
        // // Could make this automatic; read the entries for the forge:ingots tag, then use the visble ones in a recipe
        // event.recipes.extendedcrafting.shapeless_table(
        //     'extendedcrafting:the_ultimate_ingot',
        //     ['minecraft:iron_ingot', 'minecraft:copper_ingot', 'minecraft:gold_ingot', 'minecraft:netherite_ingot', 'mekanism:alloy_infused', 'mekanism:alloy_reinforced', 'mekanism:alloy_atomic', 'create:andesite_alloy', 'mekanism:ingot_refined_obsidian', 'mekanism:ingot_refined_glowstone', 'mekanism:ingot_osmium', 'mekanism:ingot_uranium', 'energizedpower:tin_ingot', 'energizedpower:steel_ingot', 'energizedpower:redstone_alloy_ingot', 'energizedpower:advanced_alloy_ingot', 'energizedpower:energized_copper_ingot', 'energizedpower:energized_gold_ingot', 'industrialforegoing:pink_slime_ingot', 'thermal:lead_ingot', 'thermal:silver_ingot', 'thermal:nickel_ingot', 'thermal:rose_gold_ingot', 'thermal:bronze_ingot', 'thermal:invar_ingot', 'thermal:constantan_ingot', 'thermal:signalum_ingot', 'thermal:lumium_ingot', 'thermal:enderium_ingot', 'ad_astra:etrium_ingot', 'ad_astra:desh_ingot', 'ad_astra:ostrum_ingot', 'ad_astra:calorite_ingot', 'extendedcrafting:black_iron_ingot', 'extendedcrafting:redstone_ingot', 'extendedcrafting:enhanced_redstone_ingot', 'extendedcrafting:ender_ingot', 'extendedcrafting:enhanced_ender_ingot', 'extendedcrafting:crystaltine_ingot', 'thermalendergy:prismalium_ingot', 'thermalendergy:melodium_ingot', 'thermalendergy:stellarium_ingot', 'create:zinc_ingot', 'create:brass_ingot', 'tfmg:cast_iron_ingot', 'tfmg:aluminum_ingot', 'tfmg:lithium_ingot', 'tfmg:magnetic_ingot', 'tconstruct:cobalt_ingot', 'tconstruct:slimesteel_ingot', 'tconstruct:amethyst_bronze_ingot', 'tconstruct:rose_gold_ingot', 'tconstruct:pig_iron_ingot', 'tconstruct:queens_slime_ingot', 'tconstruct:manyullyn_ingot', 'tconstruct:hepatizon_ingot', 'enderio:copper_alloy_ingot', 'enderio:energetic_alloy_ingot', 'enderio:vibrant_alloy_ingot', 'enderio:redstone_alloy_ingot', 'enderio:conductive_alloy_ingot', 'enderio:pulsating_alloy_ingot', 'enderio:dark_steel_ingot', 'enderio:soularium_ingot', 'enderio:end_steel_ingot', 'megacells:sky_steel_ingot', 'powah:steel_energized', 'createaddition:electrum_ingot']
        // ).id('kubejs:extended/ultimate_ingot')

        // event.recipes.extendedcrafting.shapeless_table(
        //     'kubejs:the_ultimate_gem',
        //     ['minecraft:emerald', 'minecraft:lapis_lazuli', 'minecraft:diamond', 'minecraft:quartz', 'minecraft:amethyst_shard', 'minecraft:prismarine_crystals', 'mekanism:fluorite_gem', 'powah:crystal_blazing', 'powah:crystal_niotic', 'powah:crystal_spirited', 'powah:crystal_nitro', 'thermal:apatite', 'thermal:cinnabar', 'thermal:niter', 'thermal:sulfur', 'thermal:ruby', 'thermal:sapphire', 'actuallyadditions:black_quartz', 'ae2:certus_quartz_crystal', 'ae2:charged_certus_quartz_crystal', 'ae2:fluix_crystal', 'appflux:redstone_crystal', 'enderio:pulsating_crystal', 'enderio:vibrant_crystal', 'enderio:ender_crystal', 'enderio:enticing_crystal', 'enderio:weather_crystal', 'enderio:prescient_crystal', 'tconstruct:earth_slime_crystal', 'tconstruct:sky_slime_crystal', 'tconstruct:ender_slime_crystal', 'integrateddynamics:crystalized_menril_chunk', 'integrateddynamics:crystalized_chorus_chunk', 'thermal:xp_crystal', 'cyclic:gem_obsidian', 'minecraft:amethyst_shard', 'actuallyadditions:restonia_crystal', 'actuallyadditions:palis_crystal', 'actuallyadditions:diamatine_crystal', 'actuallyadditions:void_crystal', 'actuallyadditions:emeradic_crystal', 'actuallyadditions:enori_crystal']
        // ).id('kubejs:extended/ultimate_gem')
 
        let basicpolyball = JsonIO.read('kubejs/config/basicpolyball.json');
        basicpolyball.forEach(([id, color]) => {
            let [mod, material] = id.split(':');
             event.recipes.extendedcrafting.compressor(`kubejs:${material}_polyball`, 'minecraft:diamond', 

        .input(id)  // Raw material (used for crafting the polyball)
        .output(polyballName)  // Output: polyball
        .color(color);  // Optionally apply color or other properties
    }
})