
/**
 * Item Registry - defines ID, name, texture
 * and certain other properties of custom items.
 */
StartupEvents.registry('item', event => {
    if (!isExpertMode) {
        return;
    }
})
