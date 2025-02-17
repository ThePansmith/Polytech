ServerEvents.recipes(event => {
    if (isExpertMode) {
        // Creative Items
        // Required Creative Items
        // The oblgitory creative storage, power, cell, etc
        // May skip tank
        event.shaped('3x functionalstorage:max_storage_upgrade', [
            'NNN',
            'CPC',
            'NNN'
        ], {
            N: 'functionalstorage:netherite_upgrade',
            P: 'kubejs:storage_polyball',
            C: '#forge:chests'
        })

        event.recipes.extendedcrafting.shaped_table("mekanism:creative_energy_cube", [
            'AABAA',
            'ACDCA',
            'BEFEB',
            'GCDCG',
            'GGBGG'
        ], {
            A: 'kubejs:energy_polyball',
            B: 'kubejs:ultimate_control_circuit_polyball',
            C: 'extendedcrafting:black_iron_ingot',
            D: 'megacells:mega_energy_cell',
            E: 'mekanismgenerators:fission_fuel_assembly',
            F: 'mekanismgenerators:fusion_reactor_controller',
            G: 'kubejs:tech_polyball'
        }).id('kubejs:extended/creative_energy_cube')

        event.recipes.extendedcrafting.shaped_table("create:handheld_worldshaper", [
            "AAABBBAAA",
            "AACCBCCAA",
            "ACDDCDDCA",
            "BCDEEEDCB",
            "BBCEEECBB",
            "BCDEEEDCB",
            "ACDDCDDCA",
            "AACCBCCAA",
            "AAABBBAAA"
        ], {
            A: 'kubejs:storage_polyball',
            B: 'kubejs:material_polyball',
            C: 'kubejs:tech_polyball',
            D: 'kubejs:energy_polyball',
            E: 'kubejs:extreme_polyball'
        }).id('kubejs:extended/handheld_worldshaper')

        // Optional Creative Items
        // Due to the nature of the polyball system, it is flexable with what mods are loaded, as such, the items crafted with it should be as well
        if (Platform.isLoaded('tconstruct')) {
        event.recipes.create.mixing(('create:creative_blaze_cake'),['create:blaze_cake', 'kubejs:create_polyball']).superheated()
        event.recipes.create.mechanical_crafting("create:creative_motor", [
            'ABBB ',
            'CDEEE',
            'ABBB '
        ], {
            A: 'mekanism:block_refined_obsidian',
            B: 'mekanism:ingot_refined_obsidian',
            C: 'kubejs:create_polyball',
            D: 'createaddition:electric_motor',
            E: 'create:shaft'
        }).id('kubejs:extended/creative_motor')
    }
        let creativetinkers = [
            [{ "item": 'tconstruct:creative_slot', "nbt": { "slot": "upgrades" } }, 'tconstruct:molten_iron'],
            [{ "item": 'tconstruct:creative_slot', "nbt": { "slot": "defense" } }, 'tconstruct:molten_copper'],
            [{ "item": 'tconstruct:creative_slot', "nbt": { "slot": "abilities" } }, 'tconstruct:liquid_soul'],
            [{ "item": 'tconstruct:creative_slot', "nbt": { "slot": "souls" } }, 'tconstruct:molten_emerald']
        ]
        if (Platform.isLoaded('tconstruct')) {
            creativetinkers.forEach(([slot, fluid]) => {
                event.custom({
                    "type": "tconstruct:casting_table",
                    "cast": {
                        "item": 'kubejs:tconstruct_polyball'
                    },
                    "cast_consumed": true,
                    "cooling_time": 120,
                    "fluid": {
                        "amount": 810,
                        "fluid": fluid
                    },
                    "result": slot
                })
            })
        }
    }
});