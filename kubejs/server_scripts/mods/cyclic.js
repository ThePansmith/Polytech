if (Platform.isLoaded('cyclic')) {
  ServerEvents.recipes(event => {
    if (isExpertMode) {

      event.shaped('3x kubejs:reinforced_stone', [
        'BCB',
        'CSC',
        'BCB'
      ], {
        B: 'railcraft:reinforced_rail',
        C: 'quark:sturdy_stone',
        S: 'copperandtuffbackport:copper_grate',
      })

      event.replaceInput({ id: 'cyclic:generator_fuel' }, '#forge:nuggets/copper', 'kubejs:reinforced_stone')
      event.replaceInput({ id: 'cyclic:generator_food' }, '#forge:nuggets/copper', 'kubejs:reinforced_stone')
      event.replaceInput({ id: 'cyclic:generator_fluid' }, 'minecraft:magma_block', 'kubejs:reinforced_stone')
      event.replaceInput({ id: 'cyclic:generator_item' }, 'cyclic:eye_redstone', 'kubejs:reinforced_stone')
      event.replaceInput({ id: /cyclic/ }, 'cyclic:compressed_cobblestone', 'kubejs:reinforced_stone')
      event.replaceInput({ id: /cyclic:.*_pipe/ }, '#minecraft:stairs', 'kubejs:reinforced_stone')
      
      event.remove({ id: 'cyclic:uncrafter' })
      event.remove({ id: 'cyclic:compressed_cobblestone_u' })
    }
  })
}