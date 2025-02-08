ServerEvents.recipes(event => {

  if (isExpertMode) {
    if (Platform.isLoaded('create')) {
  event.recipes.create.mixing(('energizedpower:steel_ingot'),['minecraft:iron_ingot', '#forge:coal_coke']).heated()
    }
  }

})