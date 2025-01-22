ServerEvents.recipes(event => {
if (isExpertMode) {

    // Pipes
    event.replaceInput({ id: /pipez:.*_pipe/ }, 'minecraft:iron_ingot', '#c:plates/steel')
    event.replaceInput({ output: 'pipez:item_pipe' }, '#c:dusts/redstone', 'moderndynamics:item_pipe')
    event.replaceInput({ output: 'pipez:fluid_pipe' }, '#c:dusts/redstone', 'moderndynamics:fluid_pipe')
    event.replaceInput({ output: 'pipez:energy_pipe' }, '#c:dusts/redstone', 'mekanism:basic_universal_cable')


    event.replaceInput({ id: /laserio/ }, 'minecraft:iron_ingot', '#c:plates/steel')
    event.replaceInput({ output: 'prettypipes:pipe' }, 'minecraft:copper_ingot', '#c:ingots/steel')
    }
})