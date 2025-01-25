ServerEvents.recipes(event => {
    const wiremat = [ 'copper', 'tin', 'gold']
    wiremat.forEach(wiremat => {
        event.custom({
        "type": "railcraft:rolling",
        "key": {
          "a": {
            "tag": `#forge:plates/${wiremat}`
          }
        },
        "pattern": [
          "a  ",
          "a  ",
          "   ",
        ],
        "result": {
          "count": 6,
          "id": `createaddition:${wiremat}_wire`
        }
      })
    })

})