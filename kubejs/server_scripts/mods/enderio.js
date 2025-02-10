if (Platform.isLoaded('enderio')) {
ServerEvents.recipes(event => {
  if (isExpertMode) {
    event.recipes.actuallyadditions.laser('enderio:grains_of_infinity', 'create:powdered_obsidian', 250).id("kubejs:obbytransform")
    event.shaped('2x enderio:void_chassis', [
      'IEI',
      'CRC',
      'IEI'
    ], {
      C: '#poly:advanced_caps',
      I: 'enderio:grains_of_infinity',
      R: 'actuallyadditions:iron_casing',
      E: 'powah:ender_core'
    }).id('enderio:void_chassis')

    event.shaped('enderio:ensouled_chassis', [
      'IEI',
      'CRC',
      'IEI'
    ], {
      C: 'enderio:soul_chain',
      I: 'energizedpower:advanced_alloy_plate',
      R: 'enderio:void_chassis',
      E: 'enderio:end_steel_ingot'
    }).id('enderio:ensouled_chassis')

    event.shaped('enderio:primitive_alloy_smelter', [
      'SSS',
      'FCF',
      'PPP'
    ], {
      P: 'minecraft:deepslate',
      C: 'industrialforegoing:machine_frame_pity',
      F: 'minecraft:blast_furnace',
      S: '#forge:plates/steel'
    }).id('enderio:primitive_alloy_smelter')

  }
})
}