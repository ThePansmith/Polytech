ServerEvents.recipes(event => {
if (isExpertMode) {

// could do this in a mech crafter recipe instead
event.shaped('mekanism:digital_miner', [
    'UTU',
    'FRF',
    'BGB'
  ], {
    U: 'mekanism:ultimate_control_circuit',
    G: 'mekanism:steel_casing',
    R: 'mekanism:robit',
    T: "computercraft:turtle_advanced",
    F: '#forge:gears/melodium',
    B: 'energizedpower:teleporter_processing_unit'
  }).id("mekanism:digital_miner")

  event.shaped('mekanism:metallurgic_infuser', [
    'SPS',
    'AOA',
    'SPS'
  ], {
    S: '#forge:plates/steel',
    P: '#poly:plastics',
    O: 'mekanism:block_osmium',
    A: 'industrialforegoing:machine_frame_simple'
  }).id('mekanism:metallurgic_infuser')

  event.shaped('2x mekanism:steel_casing', [
    'IEI',
    'CRD',
    'IGI'
  ], {
    I: 'enderio:dark_steel_ingot',
    R: 'mekanism:block_osmium',
    E: '#poly:advanced_circuit',
    C: 'enderio:void_chassis',
    G: 'enderio:dark_bimetal_gear',
    D: 'energizedpower:advanced_machine_frame'
  }).id('mekanism:steel_casing')

  event.recipes.actuallyadditions.empowering('mekanism:elite_control_circuit', 'mekanism:advanced_control_circuit', ['mekanism:alloy_reinforced', 'integrateddynamics:crystalized_menril_chunk', 'mekanism:alloy_reinforced', 'integrateddynamics:crystalized_menril_chunk'], 2000, 60, 6522834)
  event.recipes.actuallyadditions.empowering('mekanism:ultimate_control_circuit', 'mekanism:elite_control_circuit', ['mekanism:alloy_atomic', 'cyclic:gem_obsidian', 'mekanism:alloy_atomic', 'cyclic:gem_obsidian'], 20000, 60, 6522834)

}

  })