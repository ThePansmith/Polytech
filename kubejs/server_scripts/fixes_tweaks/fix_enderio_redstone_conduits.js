/**
 * Temporary fix for EnderIO redstone conduits not connecting to various blocks
 * see https://github.com/Team-EnderIO/EnderIO/issues/852#issuecomment-2395092479
 */
ServerEvents.tags('block', event => {
    const list = [
        // Thermal/Systeams dynamos & boilers
        '#thermal:dynamos',
        'steamdynamo:steam_dynamo',
        'systeams:steam_dynamo',
        /^systeams:.*_boiler$/,

        // Modded lamps
        /^quark:.*_lamp$/,
        /^chipped:.*_lamp$/,
    ]

    event.add('enderio:redstone_connectable', list)
})
