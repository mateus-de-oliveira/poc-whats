const wa = require('@open-wa/wa-automate')

const launchConfig = {
  useChrome: true,
  cacheEnabled: false,
  sessionId: 'hr',
}

let chatId = '558592548240@c.us'

wa.create(launchConfig).then((client) => start(client))

async function start(client) {
  client.sendLocation(
    chatId,
    -3.8717659140304583,
    -38.61386143260012,
    'Minha casa',
  )
}
