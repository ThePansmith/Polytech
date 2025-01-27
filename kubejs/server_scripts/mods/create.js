ServerEvents.recipes(event => {

  if (isExpertMode) {
  event.recipes.create.mixing(('energizedpower:steel_ingot'),[ 'minecraft:iron_ingot', '#forge:coal_coke']).heated()
  }

})