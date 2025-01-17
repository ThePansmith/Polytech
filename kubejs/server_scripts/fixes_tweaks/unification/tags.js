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
    event.add('poly:rubbers', ['thermal:cured_rubber', 'industrialforegoing:plastic'])
    event.add('poly:basic_caps', ['enderio:basic_capacitor', 'powah:capacitor_basic_large'])
    event.add('poly:combine_chips', ['kubejs:empowered_chip', 'kubejs:industrial_chip'])
    event.add('poly:tech_chips', ['kubejs:advanced_chip', 'kubejs:prediction_chip'])
    event.add("poly:empowered_gem", /actuallyadditions:empowered_.+_crystal$/)
    event.add("poly:cards", ['integrateddynamics:variable', 'computercraft:disk'])


    event.add('forge:heads', 'enderio:enderman_head')
    event.add('forge:coal_coke', 'tfmg:coal_coke')

    // Sawdust
    event.add("forge:sawdust", "#forge:dusts/wood")

})

ServerEvents.tags('block', event => {

    unifyChisel(event);
})

ServerEvents.tags('fluid', event => {

    unifyChisel(event);
})

// Unification regexes are definited in startup script _initial.js
ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(global.unificationPattern)
    event.removeAllTagsFrom(global.manualUnification)
    event.removeAllTagsFrom(global.nuclearcraftFuelPattern)
    event.removeAllTagsFrom(global.nuclearcraftMaterialPattern)
})

ServerEvents.recipes(event => {
    event.remove({ output: global.unificationPattern })
    event.remove({ output: global.manualUnification })
    event.remove({ output: global.nuclearcraftFuelPattern })
    event.remove({ output: global.nuclearcraftMaterialPattern })

    // Tags cannot be removed from items in HammerLib (see https://github.com/dragon-forge/HammerLib/issues/71).
    // Thus, we replace the input of any recipe that uses one of the tags of those items with the corresponding GT item.
    let hammerLibGears = ["iron", "diamond"]
    hammerLibGears.forEach(material => {
        event.replaceInput({ input: `#forge:gears/${material}` }, `#forge:gears/${material}`, `gtceu:${material}_gear`)
    })
})
