ServerEvents.recipes(event => {
    if (Platform.isLoaded('oritech')) {
        if (isExpertMode) {
            event.recipes.actuallyadditions.laser('forge:dusts/coal', 'oritech:carbon_fibre_strands', 1500).id('kubejs:aa/carbon_fibre_strands')
        }
    }
})