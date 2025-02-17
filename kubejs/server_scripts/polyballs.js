ServerEvents.recipes(event => {
    if (isExpertMode) {
        global.basicpolyball.forEach(([id, , , amount]) => {
            if (amount === undefined) { amount = 256 }
            let [mod, material] = id.split(':');
            if (Platform.isLoaded(mod)) {
                event.recipes.extendedcrafting.compressor(`kubejs:${material}_polyball`, 'minecraft:diamond', id, amount, 5000000, 5000000).id(`kubejs:compressor/${material}_polyball`);
            }
        });

        global.modpolyball.forEach(([mod, , , core, customGroup]) => {
            if (customGroup === true || Platform.isLoaded(mod)) {
                let inputs = global.basicpolyball
                    .filter(([id, , group]) => (group || id.split(':')[0]) === mod)
                    .map(([id]) => `kubejs:${id.split(':')[1]}_polyball`);
                if (inputs.length > 0) {
                    event.recipes.extendedcrafting.combination(`kubejs:${mod}_polyball`, core, inputs, 1000000, 500000);
                }
            }
        });

        global.superpolyball.forEach(([superclass]) => {
            let inputs = global.modpolyball
                .filter(([mod, sc,,, customGroup ]) => sc === superclass && (customGroup === true || Platform.isLoaded(mod)))
                .map(([mod]) => `kubejs:${mod}_polyball`);
            if (inputs.length > 0) {
                event.recipes.extendedcrafting.combination(`kubejs:${superclass}_polyball`, 'minecraft:dragon_egg', inputs, 5000000, 1000000);
            }
        });
    }
});