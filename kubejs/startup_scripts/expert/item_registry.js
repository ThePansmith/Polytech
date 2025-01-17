
/**
 * Item Registry - defines ID, name, texture
 * and certain other properties of custom items.
 */
StartupEvents.registry('item', event => {
    if (!isExpertMode) {
        return;
    }
        // Various items
        const temptextures = [
            ['empowered', '#64E867'],
            ['industrial', '#CA79CB'],
            ['advanced', '#486d7b'],
            ['prediction', '#ba2727']
        ]

        for (const [item, Color] of temptextures) {
            event.create(`${item}_chip`)
                .textureJson({ layer0: 'kubejs:item/tempwafer' })
                .color(0, Color);
        
    }
})
