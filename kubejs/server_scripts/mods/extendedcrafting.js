if (Platform.isLoaded('extendedcrafting')) {
  ServerEvents.recipes(event => {
    if (isExpertMode) {
      event.remove({ id: 'extendedcrafting:frame' })
      event.custom(
        {
          "type": "industrialforegoing:dissolution_chamber",
          "input": [
            {
              "tag": 'forge:plates/netherite'
            },
            {
              "tag": "poly:adastra_casing_prereq"
            },
            {
              "tag": 'forge:plates/netherite'
            },
            {
              "item": "ae2:singularity"
            },
            {
              "item": "ae2:singularity"
            },
            {
              "tag": 'forge:plates/netherite'
            },
            {
              "tag": "poly:adastra_casing_prereq"
            },
            {
              "tag": 'forge:plates/netherite'
            },
          ],
          "inputFluid": "{Amount:1000,FluidName:\"tconstruct:molten_glass\"}",
          "output": {
            "count": 1,
            "item": "extendedcrafting:frame"
          },
          "processingTime": 300
        })
    }
  })
}