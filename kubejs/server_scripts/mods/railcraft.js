ServerEvents.recipes(event => {
    const wiremat = [ 'copper', 'iron', 'gold', 'electrum']
    wiremat.forEach(wiremat => {
        event.custom({
        "type": "railcraft:rolling",
        "key": {
          "a": {
            "item": `thermal:${wiremat}_plate`
          }
        },
        "pattern": [
          "a  ",
          "a  ",
          "   ",
        ],
        "result": {
          "count": 4,
          "item": `createaddition:${wiremat}_wire`
        }
      })
    })

})