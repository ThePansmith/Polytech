// priority: 0
ItemEvents.tooltip(tooltip => {
    if (isExpertMode) {
        const tools = [ 'minecraft:wooden_pickaxe', 'minecraft:wooden_axe', 'minecraft:wooden_hoe', 'minecraft:wooden_sword', 'minecraft:wooden_shovel', 'minecraft:stone_pickaxe', 'minecraft:stone_axe', 'minecraft:stone_hoe', 'minecraft:stone_sword', 'minecraft:stone_shovel']
        tools.forEach(tool => {
            tooltip.add(tool, Text.translatable('kjs.vanilla.tool.durability'))
          })
    } else {
    }
})
