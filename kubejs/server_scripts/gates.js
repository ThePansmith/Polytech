ServerEvents.recipes(event => {
  // Very rough draft, likely most of this will be reworked
  if (isExpertMode) {

    // General unthemed overrides
    event.replaceInput({ id: /powah/ }, 'powah:dielectric_paste', '#forge:ingots/steel')
    event.replaceInput({ id: /powah/ }, 'minecraft:iron_ingot', '#forge:plates/steel')
    event.replaceInput({ id: /laserio/ }, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.replaceInput({ id: 'modularrouters:modular_router' }, 'modularrouters:blank_module', 'industrialforegoing:machine_frame_pity')
    event.replaceInput({ id: 'ad_astra:etrionic_blast_furnace' }, 'minecraft:blast_furnace', 'mekanism:steel_casing')


    // Machine casings and otherwise
    // These generally should have multiple ways to obtain, be it tagged items, alterative recipes, or otherwise
    // Remember that magic is not required, but can help you to get ahead. Magic recipes should go in their applicable mod js file.
    // Currently most all of these are just crafting table recipes, but don't be afraid to mix it up. Assemblers, Sequences (once create port is done), Empowerment, etc are all fair game
    

    event.shaped('2x industrialforegoing:machine_frame_pity', [
      'WSW',
      'SCS',
      'WSW'
    ], {
      S: '#forge:plates/steel',
      C: 'tfmg:copper_coil',
      W: '#minecraft:logs'
    }).id('industrialforegoing:machine_frame_pity')

    // event.remove({ output: 'oritech:machine_core_3' })
    // event.shaped('oritech:machine_core_3', [
    //   'BRB',
    //   'RCR',
    //   'BRB'
    // ], {
    //   R: 'oritech:carbon_fibre_strands',
    //   forge: '#poly:energized_metal',
    //   B: 'justdirethings:ferricore_ingot' //also tag to some magic metal
    // }).id("oritech:crafting/core3")

    event.shaped('2x energizedpower:basic_machine_frame', [
      'BBB',
      'FCF',
      'BSB'
    ], {
      C: 'industrialforegoing:machine_frame_pity',
      F: '#createaddition:spools',
      B: '#forge:plates/steel',
      S: '#forge:storage_blocks/silicon'
    }).id("energizedpower:crafting/basic_machine_frame")

    event.shaped('2x energizedpower:hardened_machine_frame', [
      'BGB',
      'FCF',
      'BGB'
    ], {
      C: 'energizedpower:basic_machine_frame',
      G: '#poly:energized_metal',
      F: '#poly:plastics',
      B: '#forge:plates/invar',
    }).id("energizedpower:crafting/hardened_machine_frame")

    event.shaped('rftoolsbase:machine_frame', [
      'BPB',
      'FCF',
      'BPB'
    ], {
      C: 'industrialforegoing:machine_frame_pity',
      P: '#poly:plastics',
      F: '#poly:energized_metal',
      B: '#forge:plates/steel'
    }).id("rftoolsbase:machine_frame")

    event.remove({ id: 'productivebees:bee_cage_block' }) //have an alt magic recipe thats cheaper
    event.shaped('8x productivebees:bee_cage', [
      'LPL',
      'LHL',
      'LPL'
    ], {
      L: '#minecraft:logs',
      P: '#poly:plastics',
      H: 'minecraft:honey_block' 
    }).id("productivebees:bee_cage") 

    event.shaped('actuallyadditions:iron_casing', [
      'DGD',
      'CSC',
      'DGD'
    ], {
      G: 'enderio:dark_steel_ingot',
      D: 'railcraft:white_iron_tank_wall',
      C: '#poly:basic_caps',
      S: '#poly:aa_casing_prereq'
    }).id("actuallyadditions:iron_casing")

    event.shaped('thermal:machine_frame', [
      'AAA',
      'GSG',
      'DCD'
    ], {
      G: 'thermal:redstone_servo',
      A: '#forge:ingots/aluminum',
      C: 'thermal:rf_coil',
      S: 'actuallyadditions:iron_casing',
      D: 'actuallyadditions:empowered_void_crystal'
    }).id("thermal:machine_frame")

    event.shaped('2x kubejs:reinforced_stone', [
      'BCB',
      'CSC',
      'BCB'
    ], {
      C: 'railcraft:reinforced_rail',
      B: 'quark:sturdy_stone',
      S: 'copperandtuffbackport:copper_grate',
    })


    event.replaceInput({ id: /hostile/ }, '#forge:obsidian', 'kubejs:predictive_casing')
    event.shaped('kubejs:predictive_casing', [
      'BGB',
      'CSC',
      'BGB'
    ], {
      B: 'actuallyadditions:empowered_void_crystal',
      G: '#poly:plastics',
      C: '#poly:basic_circuit',
      S: 'enderio:dark_steel_block',
    })

    // event.shaped('6x kubejs:predictive_casing', [
    //   'BGB',
    //   'CSC',
    //   'BGB'
    // ], {
    //   B: 'actuallyadditions:void_crystal',
    //   G: '#poly:plastics',
    //   C: 'oritech:super_ai_chip',
    //   S: 'enderio:dark_steel_block',
    // })

    event.shaped('hostilenetworks:blank_data_model', [
      'ZZP',
      'ZCP',
      'ZZP'
    ], {
      Z: '#forge:plates/zinc',
      C: '#poly:basic_circuit',
      P: '#poly:plastics'
    }).id('hostilenetworks:framework')

    // event.shaped('6x hostilenetworks:blank_data_model', [
    //   'ZZP',
    //   'ZCP',
    //   'ZZP'
    // ], {
    //   Z: '#forge:plates/zinc',
    //   forge: 'oritech:super_ai_chip',
    //   P: '#poly:plastics'
    // }).id('kubejs:framework_alt')

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

    event.shaped('2x fluxnetworks:flux_core', [
      'IEI',
      'CRC',
      'IEI'
    ], {
      I: 'fluxnetworks:flux_dust',
      R: 'enderio:vibrant_gear',
      C: 'mekanism:ultimate_control_circuit',
      E: 'tconstruct:manyullyn_ingot'
    }).id('fluxnetworks:fluxcore')

    event.shaped('fluxnetworks:flux_block', [
      'IEI',
      'CRC',
      'IEI'
    ], {
      C: 'fluxnetworks:flux_core',
      I: 'energizedpower:advanced_alloy_plate',
      R: 'appflux:energy_processor',
      E: 'tconstruct:hepatizon_ingot'
    }).id('fluxnetworks:fluxblock')

    event.shaped('mekanism:metallurgic_infuser', [
      'SPS',
      'AOA',
      'SPS'
    ], {
      S: '#forge:plates/steel',
      P: '#poly:plastics',
      O: 'mekanism:block_osmium',
      A: 'industrialforegoing:machine_frame_simple'
    }).id('mekanism:metallurgic_infuser')

    event.shaped('2x mekanism:steel_casing', [
      'IEI',
      'CRD',
      'IGI'
    ], {
      I: 'enderio:dark_steel_ingot',
      R: 'mekanism:block_osmium',
      E: '#poly:advanced_circuit',
      C: 'enderio:void_chassis',
      G: 'enderio:dark_bimetal_gear',
      D: 'energizedpower:advanced_machine_frame'
    }).id('mekanism:steel_casing')

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