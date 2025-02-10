ServerEvents.recipes(event => {
    if (isExpertMode) {
        event.remove({ id: 'productivebees:bee_cage_block' })
        event.shaped('8x productivebees:bee_cage', [
          'LPL',
          'LHL',
          'LSL'
        ], {
          L: '#minecraft:logs',
          P: '#poly:plastics',
          H: 'minecraft:honey_block',
          S: 'powah:steel_energized'
        }).id("productivebees:bee_cage")
    }})