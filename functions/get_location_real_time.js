const wa = require('@open-wa/wa-automate')

const launchConfig = {
  useChrome: true,
  cacheEnabled: false,
  sessionId: 'hr',
}

let chatId = '558592548240@c.us'

wa.create(launchConfig).then((client) => start(client))

async function start(client) {
  const liveLocationCallback = (currentLiveLocation) => {
    console.log(
      'Atualização ao vivo de localização:',
      currentLiveLocation.id,
      currentLiveLocation.lat,
      currentLiveLocation.lng,
    )
  }
  await client.onMessage(async (message) => {
    if (message.shareDuration) {
      await client.onLiveLocation(message.from, liveLocationCallback)
    }
  })
}
