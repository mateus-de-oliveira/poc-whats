const wa = require('@open-wa/wa-automate')

let chatId = '558592548240@c.us'
wa.create().then((client) => start(client))

async function start(client) {
  await client.simulateTyping(chatId, true)
}
