/** /kjs inventory will be your friend. */

JEIEvents.hideItems(event => {

    // Enderio cleanup
    event.hide(/enderio:clear_glass_.*_.*/)
    event.hide(/enderio:fused_quartz_.*_.*/)
    event.hide(/enderio:powdered_.*/)
    event.hide(/enderio:.*_ingot/)
    event.hide(/enderio:.*_nugget/)
    event.hide(/enderio:.*_block/)
    event.hide(/enderio:filled_soul_vial/)
    event.hide('enderio:broken_spawner')

    // AE2
    event.hide(/ae2:facade/)

    // Mekanism
    event.hide(/mekanism:creative_fluid_tank/)
    event.hide(/mekanism:creative_chemical_tank/)
    // Rftools
    event.hide(/rftoolsutility:syringe/)
})

JEIEvents.addItems(event => {
    // AE2 stuff
    event.add(Item.of('ae2:facade', { item: "minecraft:iron_block" }))

    // EnderIO
    event.add('enderio:broken_spawner')
    event.add('enderio:reinforced_obsidian_block')
    event.add(Item.of('enderio:filled_soul_vial', '{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:zombie"}}}}'))

    // Mekanism
    event.add('mekanism:creative_fluid_tank')
    event.add('mekanism:creative_chemical_tank')

    // Rftools
    event.add('rftoolsutility:syringe')
})

