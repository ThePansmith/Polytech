if (Platform.isLoaded('actuallyadditions')) {
    ServerEvents.recipes(event => {
      if (isExpertMode) {
        event.shaped('actuallyadditions:iron_casing', [
            'DGD',
            'CSC',
            'DGD'
          ], {
            G: 'enderio:dark_steel_ingot',
            D: 'railcraft:white_iron_tank_wall',
            C: '#poly:basic_caps',
            S: '#poly:aa_casing_prereq'
          }).id("actuallyadditions:iron_casing")
      }
    })
    }