// priority: 0
ItemEvents.tooltip(tooltip => {
    const tools = ['minecraft:wooden_pickaxe', 'minecraft:wooden_axe', 'minecraft:wooden_hoe', 'minecraft:wooden_sword', 'minecraft:wooden_shovel', 'minecraft:stone_pickaxe', 'minecraft:stone_axe', 'minecraft:stone_hoe', 'minecraft:stone_sword', 'minecraft:stone_shovel']

    if (isExpertMode) {
        tools.forEach(tool => {
            tooltip.addAdvanced(tool, (item, adv, text) => {
                text.add(1, Text.translatable('kjs.vanilla.tool.durability.1'))
                text.add(2, Text.translatable('kjs.vanilla.tool.durability.2'))
            })
        })
    } else {
    }
})
