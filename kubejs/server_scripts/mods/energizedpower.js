ServerEvents.recipes(event => {
    if (isExpertMode) {
        event.shaped('energizedpower:alloy_furnace', [
            'SSS',
            'FCF',
            'PPP'
          ], {
            P: 'minecraft:bricks',
            C: 'industrialforegoing:machine_frame_pity',
            F: 'minecraft:blast_furnace',
            S: '#c:plates/steel'
          }).id('energizedpower:crafting/alloy_furnace')
        }
    })