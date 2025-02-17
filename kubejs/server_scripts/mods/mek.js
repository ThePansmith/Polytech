ServerEvents.recipes(event => {
  if (isExpertMode) {

    // could do this in a mech crafter recipe instead
    event.shaped('mekanism:digital_miner', [
      'UTU',
      'FRF',
      'BGB'
    ], {
      U: 'mekanism:ultimate_control_circuit',
      G: 'mekanism:steel_casing',
      R: 'mekanism:robit',
      T: "computercraft:turtle_advanced",
      F: '#forge:gears/melodium',
      B: 'energizedpower:teleporter_processing_unit'
    }).id("mekanism:digital_miner")

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

    event.shaped('6x mekanismgenerators:fission_reactor_casing', [
      'SAS',
      'AOA',
      'SAS'
    ], {
      S: 'mekanism:hdpe_sheet',
      O: '#poly:polyball/tech',
      A: 'mekanism:steel_casing'
    }).id('mekanism:metallurgic_infuser').id("mekanismgenerators:fission_reactor/casing")

    event.replaceInput({ id: 'mekanismgenerators:reactor/frame' }, 'mekanism:steel_casing', 'kubejs:mekanism_polyball')


    // event.shaped('2x mekanism:steel_casing', [
    //   'IEI',
    //   'CRD',
    //   'IGI'
    // ], {
    //   I: 'enderio:dark_steel_ingot',
    //   R: 'mekanism:block_osmium',
    //   E: '#poly:advanced_circuit',
    //   C: 'enderio:void_chassis',
    //   G: 'enderio:dark_bimetal_gear',
    //   D: 'energizedpower:advanced_machine_frame'
    // }).id('mekanism:steel_casing')

    event.remove({ output: 'mekanism:steel_casing' })
    event.custom(
      {
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "item": "enderio:dark_steel_ingot"
          },
          {
            "tag": "poly:mek_casing_prereq"
          },
          {
            "item": "enderio:dark_steel_ingot"
          },
          {
            "item": "mekanism:block_osmium"
          },
          {
            "item": "mekanism:block_osmium"
          },
          {
            "tag": "poly:advanced_circuit"
          },
          {
            "item": "energizedpower:advanced_machine_frame"
          },
          {
            "tag": "poly:advanced_circuit"
          },
        ],
        "inputFluid": "{Amount:1000,FluidName:\"tfmg:liquid_concrete\"}",
        "output": {
          "count": 2,
          "item": "mekanism:steel_casing"
        },
        "processingTime": 400
      })

    event.remove({ output: 'mekanism:elite_control_circuit' })
    event.recipes.actuallyadditions.empowering('mekanism:elite_control_circuit', '#poly:advanced_circuit', ['mekanism:alloy_reinforced', 'integrateddynamics:crystalized_menril_chunk', 'mekanism:alloy_reinforced', 'integrateddynamics:crystalized_menril_chunk'], 2000, 60, 6522834)
    event.remove({ output: 'mekanism:ultimate_control_circuit' })
    event.recipes.actuallyadditions.empowering('mekanism:ultimate_control_circuit', 'mekanism:elite_control_circuit', ['mekanism:alloy_atomic', 'cyclic:gem_obsidian', 'mekanism:alloy_atomic', 'cyclic:gem_obsidian'], 20000, 60, 6522834)

  }

})