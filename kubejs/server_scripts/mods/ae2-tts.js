ServerEvents.recipes(event => {
if (isExpertMode) {
    // AE2 //
    // TSS gating and conversion recipes
    event.replaceInput({ id: 'ae2:network/parts/terminals' }, '#ae2:illuminated_panel', 'toms_storage:storage_terminal')
    event.replaceInput({ id: 'ae2:network/parts/terminals_pattern_access' }, '#ae2:illuminated_panel', 'toms_storage:storage_terminal')
    event.shapeless('4x ae2:fluix_glass_cable', ['toms_storage:inventory_cable', '2x ae2:fluix_crystal']).id('poly:fluix_cable_alt')
    event.replaceInput({ id: /ae2/ }, 'minecraft:iron_ingot', '#c:ingots/steel')

    event.shaped('ae2:inscriber', [
        'SPS',
        'SFA',
        'SPS'
    ], {
        S: '#c:ingots/dark_steel',
        P: 'minecraft:sticky_piston',
        F: 'industrialforegoing:machine_frame_simple',
        A: '#c:ingots/bronze'
    }).id('ae2:network/blocks/inscribers')

    event.shaped('ae2:energy_acceptor', [
        'SCS',
        'VFV',
        'SCS'
    ], {
        V: 'ae2:quartz_vibrant_glass',
        F: 'industrialforegoing:machine_frame_simple',
        S: '#c:plates/steel',
        C: 'ae2:fluix_crystal'
    }).id('ae2:network/blocks/energy_energy_acceptor')
}
  })