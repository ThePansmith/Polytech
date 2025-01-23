ServerEvents.recipes(event => {
  if (isExpertMode) {
    event.remove({id: /oritech:crafting.+alloy.+/})
    event.remove({id: /silentgear:.+_ingot/})
    event.remove({id: /railcraft:.+_ingot_crafted_with_ingots/ })
  }
})