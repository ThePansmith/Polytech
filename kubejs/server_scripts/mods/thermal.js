if (Platform.isLoaded('thermal')) {
    ServerEvents.recipes(event => {
        if (isExpertMode) {
            event.replaceInput({ id: 'thermal:energy_duct_4' }, '#c:glass_blocks', 'quark:pipe')
            event.replaceInput({ id: 'thermal:fluid_duct_4' }, '#forge:ingots/lead', 'quark:pipe')

            event.recipes.actuallyadditions.laser('thermal:redstone_servo', 'createaddition:iron_rod', 1500).id("kubejs:redstone_servo")
            event.recipes.actuallyadditions.laser('thermal:rf_coil', 'minecraft:gold_ingot', 2500).id("kubejs:rf_coil")

            // event.shaped('thermal:machine_frame', [
            //     'AAA',
            //     'GSG',
            //     'DCD'
            // ], {
            //     G: 'thermal:redstone_servo',
            //     A: 'actuallyadditions:empowered_enori_crystal',
            //     C: 'thermal:rf_coil',
            //     S: 'actuallyadditions:iron_casing',
            //     D: 'actuallyadditions:empowered_void_crystal'
            // }).id("thermal:machine_frame")

            event.recipes.create.mechanical_crafting('thermal:machine_frame', [
                'AAAAA',
                'A C A',
                'GFSFG',
                'D B D',
                'DDDDD'
              ], {
                G: 'thermal:redstone_servo',
                A: 'actuallyadditions:enori_crystal',
                C: 'thermal:rf_coil',
                S: 'actuallyadditions:iron_casing',
                D: 'actuallyadditions:void_crystal',
                B: 'enderio:dark_bimetal_gear',
                F: '#poly:basic_circuit'
              }).id("thermal:machine_frame")

        }
    })
}