ServerEvents.recipes(event => {

  if (isExpertMode) {
  event.replaceInput({ id: 'ad_astra:etrionic_blast_furnace' }, 'minecraft:blast_furnace', 'kubejs:advanced_casing')
  }

})