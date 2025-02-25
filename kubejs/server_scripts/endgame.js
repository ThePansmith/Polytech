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
        event.shaped('sophisticatedstorage:stack_upgrade_omega_tier', [
            'NNN',
            'PPP',
            'NNN'
        ], {
            N: 'sophisticatedstorage:stack_upgrade_tier_5',
            P: 'kubejs:storage_polyball',
        }).id('sophisticatedstorage:stack_upgrade_omega_tier')

        // Temp? Might rework these

        // event.recipes.extendedcrafting.shaped_table("mekanism:creative_energy_cube", [
        //     'AABAA',
        //     'ACDCA',
        //     'BEFEB',
        //     'GCDCG',
        //     'GGBGG'
        // ], {
        //     A: 'kubejs:energy_polyball',
        //     B: 'kubejs:ultimate_control_circuit_polyball',
        //     C: 'extendedcrafting:black_iron_ingot',
        //     D: 'megacells:mega_energy_cell',
        //     E: 'mekanismgenerators:fission_fuel_assembly',
        //     F: 'mekanismgenerators:fusion_reactor_controller',
        //     G: 'kubejs:tech_polyball'
        // }).id('kubejs:extended/creative_energy_cube')

        event.recipes.extendedcrafting.shaped_table("mekanism:creative_energy_cube", [
            "AAAAAAAAA",
            "ABBBBBBBA",
            "ABCDEDCBA",
            "FGDHHHDGF",
            "IGJHKHJGI",
            "FGDHHHDGF",
            "FBCDEDCBF",
            "FBBBBBBBF",
            "FFFFFFFFF"
        ], {
            A: 'kubejs:energy_polyball',
            B: 'extendedcrafting:black_iron_ingot',
            C: 'mekanismgenerators:fission_fuel_assembly',
            D: 'megacells:mega_energy_cell',
            E: 'kubejs:ultimate_control_circuit_polyball',
            F: 'kubejs:tech_polyball',
            G: 'mekanismgenerators:fission_reactor_casing',
            H: 'mekanismgenerators:fusion_reactor_frame',
            I: 'kubejs:mekanism_polyball',
            J: 'mekanismgenerators:fusion_reactor_controller',
            K: 'mekanism:ultimate_energy_cube'
        }).id('kubejs:extended/creative_energy_cube_2')

        event.recipes.extendedcrafting.shaped_table("mekanism:creative_fluid_tank", [
            "AAABBBAAA",
            "ACCCCCCCA",
            "ACDEFEDCA",
            "BCEGHGECB",
            "BCFHIHFCB",
            "BCEGHGECB",
            "ACDEFEDCA",
            "ACCCCCCCA",
            "AAABBBAAA"
        ], {
            A: 'kubejs:material_polyball',
            B: 'kubejs:tech_polyball',
            C: 'kubejs:storage_polyball',
            D: 'mekanism:steel_casing',
            E: 'mekanism:steel_casing',
            F: 'kubejs:ultimate_control_circuit_polyball',
            G: 'functionalstorage:max_storage_upgrade',
            H: 'sophisticatedstorage:stack_upgrade_omega_tier',
            I: 'mekanism:ultimate_fluid_tank'
        }).id('kubejs:extended/creative_fluid_tank')

        event.recipes.extendedcrafting.shaped_table("mekanism:creative_chemical_tank", [
            "AAABBBAAA",
            "ACCCCCCCA",
            "ACDEFEDCA",
            "BCEGHGECB",
            "BCFHIHFCB",
            "BCEGHGECB",
            "ACDEFEDCA",
            "ACCCCCCCA",
            "AAABBBAAA"
        ], {
            A: 'kubejs:material_polyball',
            B: 'kubejs:tech_polyball',
            C: 'kubejs:storage_polyball',
            D: 'mekanism:steel_casing',
            E: 'mekanism:steel_casing',
            F: 'kubejs:ultimate_control_circuit_polyball',
            G: 'functionalstorage:max_storage_upgrade',
            H: 'sophisticatedstorage:stack_upgrade_omega_tier',
            I: 'mekanism:ultimate_chemical_tank'
        }).id('kubejs:extended/creative_chemical_tank')

        event.recipes.extendedcrafting.shaped_table("mekanism:creative_bin", [
            "AAABBBAAA",
            "ACDDEDDCA",
            "ADFGHGFDA",
            "BDGIIIGDB",
            "BEJIKIJEB",
            "BDGIIIGDB",
            "ADFGHGFDA",
            "ACDDEDDCA",
            "AAABBBAAA"
        ], {
            A: 'kubejs:tech_polyball',
            B: 'kubejs:energy_polyball',
            C: 'industrialforegoing:supreme_black_hole_tank',
            D: 'kubejs:material_polyball',
            E: 'megacells:cell_component_256m',
            F: 'mekanism:creative_energy_cube',
            G: 'kubejs:storage_polyball',
            H: 'mekanism:creative_fluid_tank',
            I: 'kubejs:extreme_polyball',
            J: 'mekanism:creative_chemical_tank',
            K: 'mekanism:ultimate_bin'
        }).id('kubejs:extended/creative_bin')

        // event.recipes.extendedcrafting.shaped_table("create:handheld_worldshaper", [
        //     "AAABBBAAA",
        //     "AACCBCCAA",
        //     "ACDDCDDCA",
        //     "BCDEEEDCB",
        //     "BBCEEECBB",
        //     "BCDEEEDCB",
        //     "ACDDCDDCA",
        //     "AACCBCCAA",
        //     "AAABBBAAA"
        // ], {
        //     A: 'kubejs:storage_polyball',
        //     B: 'kubejs:material_polyball',
        //     C: 'kubejs:tech_polyball',
        //     D: 'kubejs:energy_polyball',
        //     E: 'kubejs:extreme_polyball'
        // }).id('kubejs:extended/handheld_worldshaper')

        // Optional Creative Items
        // Due to the nature of the polyball system, it is flexable with what mods are loaded, as such, the items crafted with it should be as well
        if (Platform.isLoaded('create')) {
            event.recipes.create.mixing(('create:creative_blaze_cake'), ['create:blaze_cake', 'kubejs:create_polyball']).superheated()
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

        if (Platform.isLoaded('botania')) {
            event.custom({
                "type": "botania:runic_altar",
                "ingredients": [
                    {
                        "item": "kubejs:botania_polyball"
                    },
                    {
                        "item": "kubejs:livingrock_polyball"
                    },
                    {
                        "item": "kubejs:livingrock_polyball"
                    }
                ],
                "mana": 500000,
                "output": {
                    "count": 1,
                    "item": "botania:creative_pool"
                }
            })
        }
    }

    if (Platform.isLoaded('ars_nouveau')) {
        event.custom({
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": false,
            "pedestalItems": [
                {
                    "item": 'kubejs:ars_nouveau_polyball'
                },
                {
                    "item": 'kubejs:ars_nouveau_polyball'
                },
                {
                    "item": 'kubejs:ars_nouveau_polyball'
                },
                {
                    "item": 'kubejs:ars_nouveau_polyball'
                }
            ],
            "reagent": {
                "item": 'ars_nouveau:source_jar'
            },
            "output": {
                "item": 'ars_nouveau:creative_source_jar'
            },
            // in 1.21
            // "result": {
            //     "count": 1,
            //     "id": 'ars_nouveau:creative_source_jar'
            // },
            "sourceCost": 0
        })
    }
});