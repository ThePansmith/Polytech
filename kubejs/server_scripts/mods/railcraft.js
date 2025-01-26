ServerEvents.recipes(event => {
    const wiremat = [ 'copper', 'tin', 'gold']
    wiremat.forEach(wiremat => {
        event.custom({
        "type": "railcraft:rolling",
        "key": {
          "a": {
            "item": `energizedpower:${wiremat}_plate`
          }
        },
        "pattern": [
          "a  ",
          "a  ",
          "   ",
        ],
        "result": {
          "count": 6,
          "item": `createaddition:${wiremat}_wire`
        }
      })
    })

})