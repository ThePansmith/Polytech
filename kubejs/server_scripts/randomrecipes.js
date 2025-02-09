ServerEvents.recipes(event => {
    if (isExpertMode) {
        // event.shaped('energizedpower:alloy_furnace', [
        //     'SSS',
        //     'FCF',
        //     'PPP'
        //   ], {
        //     P: 'minecraft:bricks',
        //     C: 'industrialforegoing:machine_frame_pity',
        //     F: 'minecraft:blast_furnace',
        //     S: '#forge:plates/steel'
        //   }).id('energizedpower:crafting/alloy_furnace')
        
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