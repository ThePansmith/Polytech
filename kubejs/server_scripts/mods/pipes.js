ServerEvents.recipes(event => {
if (isExpertMode) {

    // Pipes
    event.replaceInput({ id: /pipez:.*_pipe/ }, 'minecraft:iron_ingot', '#forge:plates/steel')
    event.replaceInput({ id: /cyclic:.*_pipe/ }, '#minecraft:stairs', 'kubejs:reinforced_stone')
    event.replaceInput({ output: 'pipez:item_pipe' }, '#forge:dusts/redstone', 'quark:pipe')
    event.replaceInput({ output: 'pipez:fluid_pipe' }, '#forge:dusts/redstone', 'create:fluid_pipe')
    event.replaceInput({ output: 'pipez:energy_pipe' }, '#forge:dusts/redstone', 'thermal:energy_duct')
    event.replaceInput({ id: 'thermal:energy_duct_4' }, '#c:glass_blocks', 'quark:pipe')
    event.replaceInput({ id: 'thermal:fluid_duct_4' }, '#forge:ingots/lead', 'quark:pipe')
    event.replaceInput({ output: 'integrateddynamics:cable' }, '#forge:dusts/redstone', 'pipez:universal_pipe')

    event.replaceInput({ id: /laserio/ }, 'minecraft:iron_ingot', '#forge:plates/steel')
    event.replaceInput({ output: 'prettypipes:pipe' }, 'minecraft:copper_ingot', '#forge:ingots/steel')
    }
})