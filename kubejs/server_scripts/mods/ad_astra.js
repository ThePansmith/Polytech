if (Platform.isLoaded('ad_astra')) {
  ServerEvents.recipes(event => {
    if (isExpertMode) {
      event.replaceInput({ id: 'ad_astra:etrionic_blast_furnace' }, 'minecraft:blast_furnace', 'mekanism:steel_casing')

      event.shaped('ad_astra:nasa_workbench', [
        'IEI',
        'NAN',
        'CRC'
      ], {
        I: 'powah:energizing_rod_niotic',
        R: '#poly:adastra_casing_prereq',
        E: '#poly:advanced_circuit',
        A: 'energizedpower:assembling_machine',
        N: 'minecraft:netherite_block',
        C: 'jaopca:storage_blocks.energized_copper'
      }).id('ad_astra:nasa_workbench')
    }
  })
}