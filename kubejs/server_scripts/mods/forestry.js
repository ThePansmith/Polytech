ServerEvents.recipes(event => {

  if (isExpertMode) {
    event.shaped('4x forestry:sturdy_machine', [
      'SSS',
      'SCS',
      'SSS'
  ], {
      S: '#forge:ingots/bronze',
      C: 'kubejs:basic_casing',
  }).id("forestry:sturdy_machine")
  }

})