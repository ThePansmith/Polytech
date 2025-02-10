if (Platform.isLoaded('oritech')) {
  ServerEvents.recipes(event => {
    if (isExpertMode) {
      event.recipes.actuallyadditions.laser('forge:dusts/coal', 'oritech:carbon_fibre_strands', 1500).id('kubejs:aa/carbon_fibre_strands')

      event.remove({ output: 'oritech:machine_core_3' })
      event.shaped('oritech:machine_core_3', [
        'BRB',
        'RCR',
        'BRB'
      ], {
        R: 'oritech:carbon_fibre_strands',
        C: '#poly:energized_metal',
        B: 'justdirethings:ferricore_ingot' //also tag to some magic metal
      }).id("oritech:crafting/core3")
    }
  })
}