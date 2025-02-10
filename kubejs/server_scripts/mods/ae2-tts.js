ServerEvents.recipes(event => {
    if (isExpertMode) {
        // AE2 //
        // TSS gating and conversion recipes
        event.replaceInput({ id: 'toms_storage:storage_terminal' }, 'minecraft:glowstone', 'minecraft:redstone_block')
        event.replaceInput({ id: 'toms_storage:storage_terminal' }, 'minecraft:comparator', 'minecraft:copper_ingot')
        event.replaceInput({ id: 'ae2:network/parts/terminals' }, '#ae2:illuminated_panel', 'toms_storage:ts.storage_terminal')
        event.replaceInput({ id: 'ae2:network/parts/terminals_pattern_access' }, '#ae2:illuminated_panel', 'toms_storage:ts.storage_terminal')
        event.shapeless('4x ae2:fluix_glass_cable', ['toms_storage:ts.inventory_cable', '2x ae2:fluix_crystal']).id('poly:fluix_cable_alt')
        event.replaceInput({ id: /ae2/ }, 'minecraft:iron_ingot', '#forge:ingots/steel')

        // Alt recipe for skystone dust
        event.recipes.actuallyadditions.laser('ae2:sky_dust', 'minecraft:glowstone_dust', 250).id("kubejs:skydust")

        event.shaped('ae2:inscriber', [
            'SPS',
            'SFA',
            'SPS'
        ], {
            S: '#forge:ingots/dark_steel',
            P: 'minecraft:sticky_piston',
            F: 'industrialforegoing:machine_frame_simple',
            A: '#forge:ingots/bronze'
        }).id('ae2:network/blocks/inscribers')

        event.shaped('ae2:energy_acceptor', [
            'SCS',
            'VFV',
            'SCS'
        ], {
            V: 'ae2:quartz_vibrant_glass',
            F: 'industrialforegoing:machine_frame_simple',
            S: 'megacells:sky_steel_ingot',
            C: 'ae2:fluix_crystal'
        }).id('ae2:network/blocks/energy_energy_acceptor')
    }

    event.remove({ output: 'megacells:sky_steel_ingot' })
    event.custom({
        "type": "ae2:transform",
        "ingredients": [
            {
                "item": "ae2:fluix_crystal"
            },
            {
                "item": "enderio:dark_steel_ingot"
            },
            {
                "item": "ae2:sky_stone_block"
            }
        ],
        "result": {
            "count": 1,
            "item": "megacells:sky_steel_ingot"
        }
    })


})