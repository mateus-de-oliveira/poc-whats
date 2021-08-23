const wa = require('@open-wa/wa-automate')

const launchConfig = {
  cacheEnabled: false,
  sessionId: 'hr',
}

let chatId = '558596849077@c.us'

wa.create(launchConfig).then((client) => start(client))

async function start(client) {
  client.sendText(chatId, '<3')
}
