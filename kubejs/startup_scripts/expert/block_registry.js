/**
 * Block Registry - defines ID, name,
 * block properties, and block tags of custom blocks.
 */
StartupEvents.registry("block", event => {
    if (!isExpertMode) {
        return;
    }

    event.create('predictive_casing')
        .displayName("Predictive Casing")
        .soundType('metal')
        .resistance(4)
        .hardness(4)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .defaultCutout();

    event.create('reinforced_stone')
        .displayName("Reinforced Stone")
        .soundType('metal')
        .resistance(8)
        .hardness(4)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .defaultCutout();
});