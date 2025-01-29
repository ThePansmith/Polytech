ServerEvents.recipes(event => {
    if (isExpertMode) {

        event.custom({
    "type": "botania:mana_infusion",
    "catalyst": {
      "type": "block",
      "block": "botania:alchemy_catalyst"
    },
    "group": "botania:manaless_steel",
    "input": {
      "item": "botania:manasteel_ingot"
    },
    "mana": 300,
    "output": {
      "item": "energizedpower:steel_ingot"
    }
  })
}})