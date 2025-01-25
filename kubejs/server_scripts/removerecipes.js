ServerEvents.recipes(event => {
  if (isExpertMode) {
    event.remove({id: /oritech:crafting.+alloy.+/})
    event.remove({id: /silentgear:.+_ingot/})
    event.remove({id: /railcraft:.+_ingot_crafted_with_ingots/ })
    event.remove({id: /thermal:fire_charge/ })
    event.remove({id: /energizedpower:crafting.+_wire/ })
    event.remove({id: /tfmg:stonecutting.+_wire/ })
  }
})