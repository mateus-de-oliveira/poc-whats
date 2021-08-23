const wa = require('@open-wa/wa-automate')

const launchConfig = {
  useChrome: true,
  cacheEnabled: false,
  sessionId: 'hr',
}

wa.create(launchConfig).then((client) => start(client))

async function start(client) {
  await client.onMessage((message) => {
    if (message.type === 'location') {
      //Using destructuring
      const {
        // The text associated with the location
        loc,
        //Latitude
        lat,
        //Longitude
        lng,
      } = message
      console.log(loc, lat, lng)
    }
  })
}
