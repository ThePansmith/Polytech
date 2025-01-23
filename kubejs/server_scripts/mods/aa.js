ServerEvents.recipes(event => {
    function reconstruct(input, output, rf) {
        event.remove({ output: output })
        event.custom({
            "type": "actuallyadditions:laser",
            "energy": rf,
            "ingredient": {
                "tag": input
            },
            "result": {
                "id": output
            }
        })
    }

    function empower(output, count, base, input1, input2, input3, input4, rf, time, color) {
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
              "count": count,
              "id": output
            },
            "time": time
          })
        }

 
    if (isExpertMode) {
        event.remove({id: 'oritech:centrifuge/carbon'})
        reconstruct("c:dusts/coal", "oritech:carbon_fibre_strands", 1500)
        event.remove({id: 'oritech:centrifuge/carbon'})
        event.remove({id: /pneumaticcraft:explosion_crafting/})
        empower('pneumaticcraft:ingot_iron_compressed', 4, 'enderio:dark_steel_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 5000, 10, 3355443)
    }
})