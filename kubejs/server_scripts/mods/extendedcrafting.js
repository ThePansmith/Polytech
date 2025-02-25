if (Platform.isLoaded('extendedcrafting')) {
  ServerEvents.recipes(event => {
    if (isExpertMode) {
      event.remove({ id: 'extendedcrafting:frame' })
      if (Platform.isLoaded('tconstruct')) {
      event.custom(
        {
          "type": "industrialforegoing:dissolution_chamber",
          "input": [
            {
              "tag": 'forge:plates/netherite'
            },
            {
              "item": "mekanism:ultimate_control_circuit"
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
              "tag": "poly:adastra_casing_prereq"
            },
            {
              "tag": 'forge:gears/netherite'
            },
            {
              "tag": "poly:adastra_casing_prereq"
            },
          ],
          "inputFluid": "{Amount:1000,FluidName:\"tconstruct:molten_glass\"}",
          "output": {
            "count": 1,
            "item": "extendedcrafting:frame"
          },
          "processingTime": 300
        })
      } else {
        event.custom(
        {
          "type": "industrialforegoing:dissolution_chamber",
          "input": [
            {
              "tag": 'forge:plates/netherite'
            },
            {
              "item": "mekanism:ultimate_control_circuit"
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
              "tag": "poly:adastra_casing_prereq"
            },
            {
              "tag": 'forge:gears/netherite'
            },
            {
              "tag": "poly:adastra_casing_prereq"
            },
          ],
          "output": {
            "count": 1,
            "item": "extendedcrafting:frame"
          },
          "processingTime": 300
        })
      }
    }
  })
}