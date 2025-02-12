
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
})
