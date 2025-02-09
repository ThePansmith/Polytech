ServerEvents.recipes(event => {
    function reconstruct(input, output, rf) {

      // Can do these two in a single function, cba rn :tr:
        event.remove({ output: output })
        event.custom({
            "type": "actuallyadditions:laser",
            "energy": rf,
            "ingredient": {
                "item": input
            },
            "result": {
                "item": output
            }
        })
    }

    function reconstructkeeprecipe(input, output, rf) {
      event.custom({
          "type": "actuallyadditions:laser",
          "energy": rf,
          "ingredient": {
              "item": input
          },
          "result": {
              "item": output
          }
      })
  }


    function empower(output, base, input1, input2, input3, input4, rf, time, color) {
        event.remove({ output: output })
        event.custom({
            "type": "actuallyadditions:empowering",
            "base": {
              "item": base
            },
            "color": color,
            "energy": rf,
            "modifiers": [
              {
                "item": input1
              },
              {
                "item": input2
              },
              {
                "item": input3
              },
              {
                "item": input4
              }
            ],
            "result": {
              "item": output
            },
            "time": time
          })
        }

    if (isExpertMode) {
        // event.remove({id: 'oritech:centrifuge/carbon'})
        // reconstruct("forge:dusts/coal", "oritech:carbon_fibre_strands", 1500)
        reconstruct("createaddition:iron_rod", 'thermal:redstone_servo', 1500)
        reconstruct("minecraft:gold_ingot", "thermal:rf_coil", 2500)
        reconstructkeeprecipe('minecraft:glowstone_dust', 'ae2:sky_dust', 250)  
        empower('mekanism:elite_control_circuit', 'mekanism:advanced_control_circuit', 'mekanism:alloy_reinforced', 'integrateddynamics:crystalized_menril_chunk', 'mekanism:alloy_reinforced', 'integrateddynamics:crystalized_menril_chunk', 2000, 60, 6522834) 
        empower('mekanism:ultimate_control_circuit', 'mekanism:elite_control_circuit', 'mekanism:alloy_atomic', 'cyclic:gem_obsidian', 'mekanism:alloy_atomic', 'cyclic:gem_obsidian', 20000, 60, 6522834)
    }
})