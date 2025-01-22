ServerEvents.recipes(event => {
    const wiremat = [ 'copper', 'tin', 'gold']
    wiremat.forEach(wiremat => {
        event.custom({
        "type": "railcraft:rolling",
        "key": {
          "a": {
            "item": `alltheores:${wiremat}_plate`
          }
        },
        "pattern": [
          "a  ",
          "a  ",
          "   ",
        ],
        "result": {
          "count": 6,
          "id": `energizedpower:${wiremat}_wire`
        }
      })
    })

})