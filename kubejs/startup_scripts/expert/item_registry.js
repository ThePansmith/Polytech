
/**
 * Item Registry - defines ID, name, texture
 * and certain other properties of custom items.
 */
StartupEvents.registry('item', event => {
    if (!isExpertMode) {
        return;
    }
    event.create('the_ultimate_gem').glow(true).rarity("epic")

    // Create assembly items
    event.create('incomplete_reinforced_advanced_machine_frame')

    // Polyballs
    global.basicpolyball.forEach(([id, color]) => {
        const [mod, material] = id.split(':');
        if (Platform.isLoaded(mod)) {
            event.create(`${material}_polyball`)
                .textureJson({ layer0: 'kubejs:item/polyball' })
                .color(0, color)
                .glow(true)
                .tag(`poly:polyball/${mod}`)
                .rarity('uncommon')
        }
    })

    global.modpolyball.forEach(([mod, superclass, color]) => {
        if (Platform.isLoaded(mod)) {
            event.create(`${mod}_polyball`)
                .textureJson({ layer0: 'kubejs:item/polyball' })
                .color(0, color)
                .glow(true)
                .tag(`poly:polyball/${superclass}`)
                .rarity('rare')
        }
    })

    global.superpolyball.forEach(([superclass, color]) => {
        event.create(`${superclass}_polyball`)
            .textureJson({ layer0: 'kubejs:item/polyball' })
            .color(0, color)
            .glow(true)
            .rarity('epic')
    })
})