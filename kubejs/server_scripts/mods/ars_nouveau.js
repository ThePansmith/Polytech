ServerEvents.recipes(event =>{
    //Steel Block alt recipe
    event.recipes.ars_nouveau.enchanting_apparatus(
        //Inputs
        [
            '#minecraft:coals',
            'ars_nouveau:fire_essence'
        ],
            'minecraft:iron_block', //Reagent Item (goes into the enchanting apparatus itself)
            'thermal:steel_block',  //Output Item
            2500,                   //Source required (One Jar = 10000)
    )
    //Basic Machine Frame alt recipe
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            '#ad_astra:steel_plates',
            '#ad_astra:steel_plates',
            '#createaddition:spools',
            '#forge:storage_blocks/silicon',
            'ars_nouveau:manipulation_essence'
        ],
            'industrialforegoing:machine_frame_pity',
            '3x energizedpower:basic_machine_frame',
            10000,
    )
})
