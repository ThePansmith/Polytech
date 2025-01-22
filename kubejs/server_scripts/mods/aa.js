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
    if (isExpertMode) {
        event.remove({id: 'oritech:centrifuge/carbon'})
        reconstruct("c:dusts/coal", "oritech:carbon_fibre_strands", 1500)
        reconstruct("c:ingots/iron", "pneumaticcraft:ingot_iron_compressed", 3000)
    }
})