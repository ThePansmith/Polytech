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

        event.replaceInput({ id: /powah/ }, 'powah:dielectric_paste', '#forge:ingots/steel')
        event.replaceInput({ id: /powah/ }, 'minecraft:iron_ingot', '#forge:plates/steel')
        event.replaceInput({ id: /laserio/ }, 'minecraft:iron_ingot', '#forge:ingots/steel')
        event.replaceInput({ id: 'modularrouters:modular_router' }, 'modularrouters:blank_module', 'industrialforegoing:machine_frame_pity')
    } 
    })