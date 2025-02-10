if (Platform.isLoaded('thermal')) {
    ServerEvents.recipes(event => {
        if (isExpertMode) {
            event.replaceInput({ id: 'thermal:energy_duct_4' }, '#c:glass_blocks', 'quark:pipe')
            event.replaceInput({ id: 'thermal:fluid_duct_4' }, '#forge:ingots/lead', 'quark:pipe')

            event.recipes.actuallyadditions.laser('thermal:redstone_servo', 'createaddition:iron_rod', 1500).id("kubejs:redstone_servo")
            event.recipes.actuallyadditions.laser('thermal:rf_coil', 'minecraft:gold_ingot', 2500).id("kubejs:rf_coil")

            event.shaped('thermal:machine_frame', [
                'AAA',
                'GSG',
                'DCD'
            ], {
                G: 'thermal:redstone_servo',
                A: '#forge:ingots/aluminum',
                C: 'thermal:rf_coil',
                S: 'actuallyadditions:iron_casing',
                D: 'actuallyadditions:empowered_void_crystal'
            }).id("thermal:machine_frame")

        }
    })
}