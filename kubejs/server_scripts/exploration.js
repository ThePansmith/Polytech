ServerEvents.recipes(event => {
    if (isExpertMode) {
        event.custom({
            "type": "aether:enchanting",
            "category": "enchanting_food",
            "cookingtime": 250,
            "experience": 0.35,
            "ingredient": {
              "item": "minecraft:iron_ingot"
            },
            "result": 'energizedpower:steel_ingot'
          })
    }
})