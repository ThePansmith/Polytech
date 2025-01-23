ServerEvents.recipes(event => {
    if (isExpertMode) {
        event.shaped('energizedpower:alloy_furnace', [
            'SSS',
            'FCF',
            'PPP'
          ], {
            S: 'minecraft:bricks',
            C: 'industrialforegoing:machine_frame_pity',
            F: 'minecraft:blast_furnace',
            P: '#c:plates/steel'
          }).id('industrialforegoing:machine_frame_pity')
        }
    })