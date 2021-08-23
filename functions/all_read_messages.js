const wa = require('@open-wa/wa-automate')

const launchConfig = {
  useChrome: true,
  cacheEnabled: false,
  sessionId: 'hr',
}

wa.create(launchConfig).then((client) => start(client))

async function start(client) {
  await client.onAnyMessage((message) => {
    console.log(message.body)
  })
}
