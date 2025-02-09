// Listen to item tag event
ServerEvents.recipes(event => {
    event.replaceInput({ input: 'mekanism:basic_control_circuit' }, 'mekanism:basic_control_circuit', '#poly:basic_circuit');
    event.replaceInput({ input: 'energizedpower:basic_circuit' }, 'energizedpower:basic_circuit', '#poly:basic_circuit');
    event.replaceInput({ input: 'mekanism:advanced_control_circuit' }, 'mekanism:advanced_control_circuit', '#poly:advanced_circuit');
    event.replaceInput({ input: 'energizedpower:advanced_circuit' }, 'energizedpower:advanced_circuit', '#poly:advanced_circuit');
    event.replaceInput({ input: 'powah:steel_energized' }, 'powah:steel_energized', '#poly:energized_metal');
    event.replaceInput({ input: 'tfmg:magnetic_ingot' }, 'tfmg:magnetic_ingot', '#poly:energized_metal');
    event.replaceInput({ input: 'enderio:basic_capacitor' }, 'enderio:basic_capacitor', '#poly:basic_caps');
    event.replaceInput({ input: 'powah:capacitor_basic_large' }, 'powah:capacitor_basic_large', '#poly:basic_caps');
    event.replaceInput({ input: 'tfmg:capacitor_' }, 'tfmg:capacitor_', '#poly:basic_caps');
    event.replaceInput({ input: 'industrialforegoing:plastic' }, 'industrialforegoing:plastic', '#poly:plastics');
    event.replaceInput({ input: 'thermal:cured_rubber' }, 'thermal:cured_rubber', '#poly:plastics');
    event.replaceInput({ input: 'tfmg:plastic_sheet' }, 'tfmg:plastic_sheet', '#poly:plastics');
    
    event.replaceInput({ input: 'railcraft:coal_dust' }, 'railcraft:coal_dust', 'mekanism:dust_coal');


  })