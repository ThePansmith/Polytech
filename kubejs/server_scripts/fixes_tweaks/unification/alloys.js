ServerEvents.recipes(event => {
    const alloySmelting = (inputs, result, duration, rf) => {
        // do not const anything here, weird optimization happening with the js vm
                if (Platform.isLoaded('create')) {event.recipes.create.mixing((result),inputs).heated() }
                event.recipes.enderio.alloy_smelting(result, inputs).energy(rf);
                // TODO: get schema working for EP Smelter
                // https://github.com/JDDev0/EnergizedPower/blob/1.20.1/src/generated/resources/data/energizedpower/recipes/alloy_furnace/steel_ingot.json
              };
            
              alloySmelting(['#forge:ingots/nickel', "2x #forge:ingots/iron"],'3x thermal:invar_ingot', 12, 1000);
              alloySmelting(['#forge:ingots/tin', "3x #forge:ingots/copper"],'4x thermal:bronze_ingot', 12, 1000);
              alloySmelting(['3x enderio:dark_steel_ingot', '3x thermal:bronze_ingot', '3x thermal:invar_ingot'], 'energizedpower:advanced_alloy_ingot', 12, 1000);
    })