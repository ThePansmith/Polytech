ServerEvents.recipes(event => {
  if (isExpertMode) {
    event.replaceInput({ id: 'industrialforegoingsouls:soul_laser_base' }, 'industrialforegoing:machine_frame_advanced', 'industrialforegoing:machine_frame_advanced')

    event.shaped('2x industrialforegoing:machine_frame_pity', [
      'WSW',
      'SCS',
      'WSW'
    ], {
      S: '#forge:plates/steel',
      C: 'tfmg:copper_coil',
      W: '#minecraft:logs'
    }).id('industrialforegoing:machine_frame_pity')

    event.remove({ output: 'industrialforegoing:machine_frame_simple' })
    event.custom(
      {
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "tag": "poly:plastics"
          },
          {
            "item": "industrialforegoing:machine_frame_pity"
          },
          {
            "tag": "poly:plastics"
          },
          {
            "item": "minecraft:nether_brick"
          },
          {
            "item": "minecraft:nether_brick"
          },
          {
            "item": "energizedpower:steel_ingot"
          },
          {
            "tag": "forge:gears/bronze"
          },
          {
            "item": "energizedpower:steel_ingot"
          },
        ],
        "inputFluid": "{Amount:250,FluidName:\"industrialforegoing:latex\"}",
        "output": {
          "count": 1,
          "item": "industrialforegoing:machine_frame_simple"
        },
        "processingTime": 300
      })

    event.remove({ output: 'industrialforegoing:machine_frame_advanced' })
    event.custom(
      {
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "tag": "poly:plastics"
          },
          {
            "item": "industrialforegoing:machine_frame_simple"
          },
          {
            "tag": "poly:plastics"
          },
          {
            "tag": "poly:advanced_circuit"
          },
          {
            "tag": "poly:advanced_circuit"
          },
          {
            "item": "energizedpower:advanced_alloy_ingot"
          },
          {
            "tag": "forge:gears/netherite"
          },
          {
            "item": "energizedpower:advanced_alloy_ingot"
          },
        ],
        "inputFluid": "{Amount:250,FluidName:\"industrialforegoing:latex\"}",
        "output": {
          "count": 1,
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "processingTime": 300
      })

    event.remove({ output: 'industrialforegoing:machine_frame_supreme' })
    event.custom(
      {
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "item": "mekanism:hdpe_sheet"
          },
          {
            "item": "industrialforegoing:machine_frame_advanced"
          },
          {
            "item": "mekanism:hdpe_sheet"
          },
          {
            "item": "mekanism:ultimate_control_circuit"
          },
          {
            "item": "mekanism:ultimate_control_circuit"
          },
          {
            "item": "energizedpower:energized_crystal_matrix"
          },
          {
            "tag": "forge:gears/stellarium"
          },
          {
            "item": "energizedpower:energized_crystal_matrix"
          },
        ],
        "inputFluid": "{Amount:250,FluidName:\"industrialforegoing:latex\"}",
        "output": {
          "count": 1,
          "item": "industrialforegoing:machine_frame_supreme"
        },
        "processingTime": 300
      })
  }
})