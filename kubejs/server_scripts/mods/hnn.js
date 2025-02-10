if (Platform.isLoaded('oritech')) {
    ServerEvents.recipes(event => {
        if (isExpertMode) {
            event.replaceInput({ id: /hostile/ }, '#forge:obsidian', 'kubejs:predictive_casing')
            event.shaped('kubejs:predictive_casing', [
                'BGB',
                'CSC',
                'BGB'
            ], {
                B: 'actuallyadditions:empowered_void_crystal',
                G: '#poly:plastics',
                C: '#poly:basic_circuit',
                S: 'industrialforegoing:machine_frame_advanced',
            })

            event.shaped('hostilenetworks:blank_data_model', [
                'ZZP',
                'ZCP',
                'ZZP'
            ], {
                Z: '#forge:plates/zinc',
                C: '#poly:basic_circuit',
                P: '#poly:plastics'
            }).id('hostilenetworks:framework')

            if (Platform.isLoaded('oritech')) {
                event.shaped('6x kubejs:predictive_casing', [
                    'BGB',
                    'CSC',
                    'BGB'
                ], {
                    B: 'actuallyadditions:void_crystal',
                    G: '#poly:plastics',
                    C: 'oritech:super_ai_chip',
                    S: 'enderio:dark_steel_block',
                })

                event.shaped('6x hostilenetworks:blank_data_model', [
                    'ZZP',
                    'ZCP',
                    'ZZP'
                ], {
                    Z: '#forge:plates/zinc',
                    forge: 'oritech:super_ai_chip',
                    P: '#poly:plastics'
                }).id('kubejs:framework_alt')
            }
        }
    })
}