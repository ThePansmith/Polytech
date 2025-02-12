/**
 * unify chipped since they dont do that anymore
 * @private
 * @param {TagEvent.Item & TagEvent.Block} event
 */
const unifyChisel = (event) => {
    // regex here means
    // `^` = beginning, `$` = end, `.+` = anything that isnt whitespace, any length

    const IRON_BLOCKLIKES = /^chipped:(?!.+_raw_).+_iron_block$/;
    const GOLD_BLOCKLIKES = /^chipped:(?!.+_raw_).+_gold_block$/;
    // event.add('forge:glass/colorless', /^chipped:.+_glass$/) // most of the glass here only have fancy trims, but they are all not dyed
    event.add('forge:cobblestone/normal', /^chipped:.+(?!_mossy)_cobblestone(_bricks)?$/)
    event.add('forge:cobblestone/mossy', /^chipped:.+_mossy_cobblestone(_bricks)?$/)
    event.add('forge:cobblestone', /^chipped:.+_cobblestone(_bricks)?$/)
    event.add('forge:storage_blocks/glowstone', /^chipped:.+_glowstone$/)
    event.add('forge:storage_blocks/redstone', /^chipped:.+_redstone_block$/)
    event.add('forge:storage_blocks/iron', IRON_BLOCKLIKES)
    event.add('forge:storage_blocks/gold', GOLD_BLOCKLIKES)
    event.add('forge:storage_blocks/diamond', /^chipped:.+_diamond_block$/);
    event.add('forge:storage_blocks/emerald', /^chipped:.+_emerald_block$/);
    event.add('forge:storage_blocks/lapis', /^chipped:.+_lapis_block$/);

    event.add('minecraft:planks', /^chipped:.+_planks$/)

    event.add('forge:glass', /^chipped:.+_glass(_pillar)?$/)
    event.add('forge:storage_blocks', [IRON_BLOCKLIKES, GOLD_BLOCKLIKES, /^chipped:.+_diamond_block$/, /^chipped:.+_emerald_block$/, /^chipped:.+_glowstone$/, /^chipped:.+_lapis_block$/, /^chipped:.+_redstone_block$/])
    event.add('minecraft:piglin_loved', GOLD_BLOCKLIKES)
}

ServerEvents.tags('item', event => {
    event.add('poly:plastics', [ 'industrialforegoing:plastic', 'thermal:cured_rubber', 'mekanism:hdpe_sheet', 'tfmg:plastic_sheet'])
    event.add('poly:basic_caps', ['enderio:basic_capacitor', 'powah:capacitor_basic_large', 'tfmg:capacitor_'])
    event.add('poly:advanced_caps', ['enderio:double_layer_capacitor', 'powah:capacitor_blazing'])
    event.add("poly:cards", ['integrateddynamics:variable', 'computercraft:disk'])
    event.add("poly:energized_metal", ['powah:steel_energized', 'tfmg:magnetic_ingot'])
    event.add("poly:aa_casing_prereq", ['rftoolsbase:machine_frame', 'industrialforegoing:machine_frame_simple'])
    event.add("poly:adastra_casing_prereq", ['mekanism:steel_casing', 'enderio:ensouled_chassis'])
    event.add("poly:mek_casing_prereq", ['enderio:void_chassis', 'thermal:machine_frame'])
    event.add("poly:basic_circuit", ['mekanism:basic_control_circuit', 'energizedpower:basic_circuit'])
    event.add("poly:advanced_circuit", ['mekanism:advanced_control_circuit', 'energizedpower:advanced_circuit'])


    event.add('forge:heads', 'enderio:enderman_head')
    event.add('forge:coal_coke', 'tfmg:coal_coke')
    event.add("forge:sawdust", "#forge:dusts/wood")

    event.add('forge:gems/coal', 'minecraft:coal')
    event.add('forge:ingots/coal', 'minecraft:coal')
})


// // Unification regexes are definited in startup script _initial.js
// ServerEvents.tags('item', event => {
//     event.removeAllTagsFrom(global.unificationPattern)
//     event.removeAllTagsFrom(global.manualUnification)
//     event.removeAllTagsFrom(global.nuclearcraftFuelPattern)
//     event.removeAllTagsFrom(global.nuclearcraftMaterialPattern)
// })

// ServerEvents.recipes(event => {
//     event.remove({ output: global.unificationPattern })
//     event.remove({ output: global.manualUnification })
//     event.remove({ output: global.nuclearcraftFuelPattern })
//     event.remove({ output: global.nuclearcraftMaterialPattern })

//     // Tags cannot be removed from items in HammerLib (see https://github.com/dragon-forge/HammerLib/issues/71).
//     // Thus, we replace the input of any recipe that uses one of the tags of those items with the corresponding GT item.
//     let hammerLibGears = ["iron", "diamond"]
//     hammerLibGears.forEach(material => {
//         event.replaceInput({ input: `#forge:gears/${material}` }, `#forge:gears/${material}`, `gtceu:${material}_gear`)
//     })
// })
