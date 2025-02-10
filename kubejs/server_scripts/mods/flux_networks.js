if (Platform.isLoaded('fluxnetworks')) {
    ServerEvents.recipes(event => {
      if (isExpertMode) {
        event.shaped('4x fluxnetworks:flux_core', [
          'IEI',
          'CRC',
          'IEI'
        ], {
          I: 'fluxnetworks:flux_dust',
          R: 'enderio:vibrant_gear',
          C: 'mekanism:ultimate_control_circuit',
          E: 'tconstruct:manyullyn_ingot'
        }).id('fluxnetworks:fluxcore')
    
        event.shaped('2x fluxnetworks:flux_block', [
          'IEI',
          'CRC',
          'IEI'
        ], {
          C: 'fluxnetworks:flux_core',
          I: 'energizedpower:advanced_alloy_plate',
          R: 'energizedpower:reinforced_advanced_machine_frame',
          E: 'tconstruct:hepatizon_ingot'
        }).id('fluxnetworks:fluxblock')
    
      }
    })
    }