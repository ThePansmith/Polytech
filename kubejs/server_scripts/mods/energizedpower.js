ServerEvents.recipes(event => {
    if (isExpertMode) {
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

    event.shaped('energizedpower:advanced_machine_frame', [
      'BGB',
      'OCO',
      'FGF'
    ], {
      C: 'energizedpower:hardened_machine_frame',
      G: '#poly:advanced_circuit',
      F: '#forge:plates/advanced_alloy',
      B: '#poly:advanced_caps',
      O: 'actuallyadditions:advanced_coil'
    }).id("energizedpower:crafting/advanced_machine_frame")

    event.remove({ output: 'energizedpower:reinforced_advanced_machine_frame' })
    event.custom(
      {
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "item": "energizedpower:energized_crystal_matrix"
          },
          {
            "item": "energizedpower:energized_crystal_matrix"
          },
          {
            "item": "energizedpower:energized_crystal_matrix"
          },
          {
            "item": "energizedpower:processing_unit"
          },
          {
            "item": "energizedpower:processing_unit"
          },
          {
            "item": "industrialforegoing:pink_slime_ingot"
          },
          {
            "item": "energizedpower:advanced_machine_frame"
          },
          {
            "item": "industrialforegoing:pink_slime_ingot"
          },
        ],
        "inputFluid": "{Amount:250,FluidName:\"tconstruct:ender_slime\"}",
        "output": {
          "count": 1,
          "item": "energizedpower:reinforced_advanced_machine_frame"
        },
        "processingTime": 300
      })
    }})