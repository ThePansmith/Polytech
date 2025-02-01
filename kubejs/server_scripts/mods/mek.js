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
}

  })