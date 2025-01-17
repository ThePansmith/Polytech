ServerEvents.recipes(event => {
  // Very rough draft, likely all of this will be replaced
    if (isExpertMode) {
        event.replaceInput({ id: /powah/ }, 'powah:dielectric_paste', 'thermal:steel_ingot')
        event.replaceInput({ id: /powah/ }, 'minecraft:iron_ingot', 'thermal:steel_plate')
        event.replaceInput({ id: /laserio/ }, 'minecraft:iron_ingot', 'thermal:steel_ingot')

        event.replaceInput({ output: 'tfmg:heavy_machinery_casing' }, 'tfmg:steel_casing', 'kubejs:basic_casing')

        event.replaceInput({ input: 'industrialforegoing:machine_frame_pity' }, 'industrialforegoing:machine_frame_pity', 'kubejs:basic_casing')
        event.replaceInput({ input: 'industrialforegoing:simple_machine_frame' }, 'industrialforegoing:simple_machine_frame', 'kubejs:advanced_casing')
        event.replaceInput({ input: 'industrialforegoing:advanced_machine_frame' }, 'industrialforegoing:advanced_machine_frame', 'kubejs:complex_casing')

        event.replaceInput({ id: 'modularrouters:modular_router' }, 'modularrouters:blank_module', 'kubejs:basic_casing') 
        event.replaceInput({ id: /thermal/ }, 'thermal:machine_frame', 'kubejs:basic_casing')

        event.replaceInput({ id: /actuallyadditions/ }, 'actuallyadditions:iron_casing', 'kubejs:advanced_casing')
        event.replaceInput({ id: /hostile/ }, '#forge:obsidian', 'kubejs:advanced_casing')

        event.replaceInput({ id: /mekanism/ }, 'mekanism:steel_casing', 'kubejs:complex_casing')
        event.replaceInput({ id: 'ad_astra:nasa_workbench' }, '#forge:storage_blocks/steel', 'kubejs:complex_casing')

    event.shaped('2x kubejs:basic_casing', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        S: 'thermal:steel_plate',
        C: 'tfmg:copper_coil',
    })

    event.shaped('2x kubejs:advanced_casing', [
        'SPS',
        'CBC',
        'SPS'
    ], {
        S: 'thermal:steel_plate',
        P: '#poly:rubbers',
        C: '#poly:basic_caps',
        B: 'kubejs:basic_casing'
    })

    event.shaped('mekanism:metallurgic_infuser', [
        'SPS',
        'AOA',
        'SPS'
    ], {
        S: 'thermal:steel_plate',
        P: '#poly:rubbers',
        O: 'mekanism:block_osmium',
        A: 'kubejs:advanced_casing'
    }).id('mekanism:metallurgic_infuser')

    event.shaped('4x kubejs:empowered_chip', [
        'SBS',
        'AOA',
        'SBS'
    ], {
        O: '#poly:empowered_gem',
        A: 'actuallyadditions:advanced_coil',
        B: 'actuallyadditions:black_quartz',
        S: 'actuallyadditions:emeradic_crystal'
    })

    event.shaped('3x kubejs:industrial_chip', [
        'SBS',
        'AOA',
        'SBS'
    ], {
        O: 'industrialforegoing:machine_frame_simple',
        A: 'industrialforegoing:plastic',
        B: 'industrialforegoing:conveyor',
        S: 'industrialforegoing:pink_slime'
    })

    event.shaped('2x kubejs:prediction_chip', [
        'SAS',
        'AOA',
        'SAS'
    ], {
        O: '#poly:cards',
        A: 'hostilenetworks:overworld_prediction',
        S: 'hostilenetworks:prediction_matrix'
    })

    event.shaped('kubejs:advanced_chip', [
        'SBS',
        'AOA',
        'SBS'
    ], {
        O: '#poly:cards',
        A: 'industrialforegoing:plastic',
        B: 'mekanism:alloy_infused',
        S: 'mekanism:advanced_control_circuit'
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": 'poly:combine_chips'
              },
              {
                "tag": 'poly:combine_chips'
              },
              {
                "tag": 'poly:tech_chips'
              },
              {
                "tag": 'poly:tech_chips'
              }
        ],
        "inputFluid": "{Amount:2000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
          "count": 2,
          "item": "kubejs:complex_casing",
          "nbt": "{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
        },
        "processingTime": 400
      })

      event.custom({
        "type": "actuallyadditions:empowering",
        "base": {
          "item": "kubejs:advanced_casing"
        },
        "color": 6522834,
        "energy": 5000,
        "modifiers": [
          {
            "tag": 'poly:combine_chips'
          },
          {
            "tag": 'poly:tech_chips'
          },
          {
            "tag": 'poly:combine_chips'
          },
          {
            "tag": 'poly:tech_chips'
          }
        ],
        "result": {
          "item": "kubejs:complex_casing"
        },
        "time": 50
      })
    }
})