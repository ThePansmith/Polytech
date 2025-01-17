/**
 * Block Registry - defines ID, name,
 * block properties, and block tags of custom blocks.
 */
StartupEvents.registry("block", event => {
    if (!isExpertMode) {
        return;
    }

    // Machine Casings
    const casings = [
        'basic',
        'advanced',
        'complex',
        'extreme',
        'insane'
    ]

    casings.forEach(casing => {
        event.create(`${casing}_casing`)
            .soundType('metal')
            .resistance(6).hardness(5)
            .tagBlock("mineable/pickaxe")
            .tagBlock("forge:mineable/wrench")
            .requiresTool(true);
    });
});