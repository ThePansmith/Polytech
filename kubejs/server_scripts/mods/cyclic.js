ServerEvents.recipes(event => {
    if (isExpertMode) {
      event.replaceInput({ id: 'cyclic:generator_fuel' }, '#forge:nuggets/copper', 'kubejs:reinforced_stone')
      event.replaceInput({ id: 'cyclic:generator_food' }, '#forge:nuggets/copper', 'kubejs:reinforced_stone')
      event.replaceInput({ id: 'cyclic:generator_fluid' }, 'minecraft:magma_block', 'kubejs:reinforced_stone')
      event.replaceInput({ id: 'cyclic:generator_item' }, 'cyclic:eye_redstone', 'kubejs:reinforced_stone')
      event.replaceInput({ id: /cyclic/ }, 'cyclic:compressed_cobblestone', 'kubejs:reinforced_stone')
      event.remove({id: 'cyclic:uncrafter' })
      event.remove({id: 'cyclic:compressed_cobblestone_u' })
    }
})