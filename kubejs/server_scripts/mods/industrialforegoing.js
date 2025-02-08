ServerEvents.recipes(event => {
    if (isExpertMode) {
      event.replaceInput({ id: 'industrialforegoingsouls:soul_laser_base' }, 'industrialforegoing:machine_frame_advanced', 'industrialforegoing:machine_frame_advanced')

      event.recipes.industrialforegoing.dissolution_chamber("industrialforegoing:machine_frame_simple", ['#poly:plastics', 'industrialforegoing:machine_frame_pity', '#poly:plastics', 'minecraft:nether_brick', 'minecraft:nether_brick', 'energizedpower:steel_ingot',  '#forge:gears/bronze', 'energizedpower:steel_ingot'], Fluid.of("industrialforegoing:latex", 250), 300).id('kubejs:machine_frame_simple')
      event.recipes.industrialforegoing.dissolution_chamber("industrialforegoing:machine_frame_advanced", ['#poly:plastics', 'industrialforegoing:machine_frame_simple', '#poly:plastics', '#poly:advanced_circuit', '#poly:advanced_circuit', 'energizedpower:advanced_alloy_ingot', '#forge:gears/netherite', 'energizedpower:advanced_alloy_ingot'], Fluid.of("industrialforegoing:latex", 250), 300).id('kubejs:industrialforegoing/machine_frame_advanced')
      event.recipes.industrialforegoing.dissolution_chamber("industrialforegoing:machine_frame_supreme","", ['mekanism:hdpe_sheet', 'industrialforegoing:machine_frame_advanced', 'mekanism:hdpe_sheet', 'mekanism:ultimate_control_circuit', 'mekanism:ultimate_control_circuit', 'energizedpower:energized_crystal_matrix', '#forge:gears/stellarium', 'energizedpower:energized_crystal_matrix'], Fluid.of("industrialforegoing:latex", 250), 300).id('kubejs:industrialforegoing/machine_frame_supreme')

      event.shaped('2x industrialforegoing:machine_frame_pity', [
        'WSW',
        'SCS',
        'WSW'
      ], {
        S: '#forge:plates/steel',
        C: 'tfmg:copper_coil',
        W: '#minecraft:logs'
      }).id('industrialforegoing:machine_frame_pity')

    // event.remove({ output: 'industrialforegoing:machine_frame_simple' })
    // event.custom(
    //   {
    //     "type": "industrialforegoing:dissolution_chamber",
    //     "input": [
    //       {
    //         "tag": "poly:plastics"
    //       },
    //       {
    //         "item": "industrialforegoing:machine_frame_pity"
    //       },
    //       {
    //         "tag": "poly:plastics"
    //       },
    //       {
    //         "item": "minecraft:nether_brick"
    //       },
    //       {
    //         "item": "minecraft:nether_brick"
    //       },
    //       {
    //         "item": "energizedpower:steel_ingot"
    //       },
    //       {
    //         "tag": "forge:gears/bronze"
    //       },
    //       {
    //         "item": "energizedpower:steel_ingot"
    //       },
    //     ],
    //     "inputFluid": "{Amount:250,FluidName:\"industrialforegoing:latex\"}",
    //     "output": {
    //       "count": 1,
    //       "item": "industrialforegoing:machine_frame_simple"
    //     },
    //     "processingTime": 300
    //   })

    //   event.remove({ output: 'industrialforegoing:machine_frame_advanced' })
    //   event.custom(
    //     {
    //       "type": "industrialforegoing:dissolution_chamber",
    //       "input": [
    //         {
    //           "tag": "poly:plastics"
    //         },
    //         {
    //           "item": "industrialforegoing:machine_frame_simple"
    //         },
    //         {
    //           "tag": "poly:plastics"
    //         },
    //         {
    //           "tag": "poly:advanced_circuit"
    //         },
    //         {
    //           "tag": "poly:advanced_circuit"
    //         },
    //         {
    //           "item": "energizedpower:advanced_alloy_ingot"
    //         },
    //         {
    //           "tag": "forge:gears/netherite"
    //         },
    //         {
    //           "item": "energizedpower:advanced_alloy_ingot"
    //         },
    //       ],
    //       "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:pink_slime\"}",
    //       "output": {
    //         "count": 1,
    //         "item": "industrialforegoing:machine_frame_advanced"
    //       },
    //       "processingTime": 300
    //     })

    //     event.remove({ output: 'industrialforegoing:machine_frame_supreme' })
    //     event.custom(
    //       {
    //         "type": "industrialforegoing:dissolution_chamber",
    //         "input": [
    //           {
    //             "item": "mekanism:hdpe_sheet"
    //           },
    //           {
    //             "item": "industrialforegoing:machine_frame_advanced"
    //           },
    //           {
    //             "item": "mekanism:hdpe_sheet"
    //           },
    //           {
    //             "item": "mekanism:ultimate_control_circuit"
    //           },
    //           {
    //             "item": "mekanism:ultimate_control_circuit"
    //           },
    //           {
    //             "item": "energizedpower:energized_crystal_matrix"
    //           },
    //           {
    //             "tag": "forge:gears/stellarium"
    //           },
    //           {
    //             "item": "energizedpower:energized_crystal_matrix"
    //           },
    //         ],
    //         "inputFluid": "{Amount:250,FluidName:\"industrialforegoing:ether_gas\"}",
    //         "output": {
    //           "count": 1,
    //           "item": "industrialforegoing:machine_frame_supreme"
    //         },
    //         "processingTime": 300
    //       })
    }  
})