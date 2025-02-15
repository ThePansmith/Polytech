
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
    // Colors are not right atm  
    let basicpolyball = JsonIO.read('kubejs/config/basicpolyball.json');
    
    basicpolyball.forEach(([id, color]) => {
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

    const modpolyball = [
        ['minecraft', 'basic', '#d5d5d5'],
        ['mekanism', 'tech', '#7f5f5f'],
        ['create', 'tech', '#909c92'],
        ['energizedpower', 'tech', '#ff7b7b'],
        ['industrialforegoing', 'tech', '#ff3e00'],
        ['thermal', 'tech', '#db8534'],
        ['ad_astra', 'space', '#946c4c'],
        ['extendedcrafting', 'endgame', '#333333'],
        ['thermalendergy', 'endgame', '#f13c3c'],
        ['tfmg', 'tech', '#5e5e5e'],
        ['tconstruct', 'tinkers', '#3f4f5f'],
        ['enderio', 'tech', '#4c2265'],
        ['powah', 'energy', '#6e6e6e'],
        ['createaddition', 'energy', '#f8c600']
    ]

    for (const [mod, superclass, color] of modpolyball) {
        if (Platform.isLoaded(mod)) {
            event.create(`${mod}_polyball`)
                .textureJson({ layer0: 'kubejs:item/polyball' })
                .color(0, color)
                .glow(true)
                .tag(`poly:polyball/${superclass}`)
                .rarity('rare')
        }
    }

    const superpolyball = [
        ['basic', '#d5d5d5'],
        ['tech', '#7f5f5f'],
        ['space', '#946c4c'],
        ['endgame', '#333333'],
        ['tinkers', '#3f4f5f'],
        ['energy', '#6e6e6e'],
    ]

    for (const [superclass, color] of superpolyball) {
            event.create(`${superclass}_polyball`)
                .textureJson({ layer0: 'kubejs:item/polyball' })
                .color(0, color)
                .glow(true)
                .rarity('epic')
    }
})