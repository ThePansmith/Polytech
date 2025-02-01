/**
 * Block Registry - defines ID, name,
 * block properties, and block tags of custom blocks.
 */
ItemEvents.modification(event => {
    if (!isExpertMode) {
        return;
    }

    const tools = [ 'minecraft:wooden_pickaxe', 'minecraft:wooden_axe', 'minecraft:wooden_hoe', 'minecraft:wooden_sword', 'minecraft:wooden_shovel', 'minecraft:stone_pickaxe', 'minecraft:stone_axe', 'minecraft:stone_hoe', 'minecraft:stone_sword', 'minecraft:stone_shovel']
    tools.forEach(tool => {
    event.modify(tool, item => {
        item.maxDamage = 1
      })
    })
});

