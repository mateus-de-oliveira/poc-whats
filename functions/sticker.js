const wa = require('@open-wa/wa-automate')

const launchConfig = {
  useChrome: true,
  cacheEnabled: false,
  sessionId: 'hr',
}

const chatId = '558592548240@c.us'
const url_gif = 'https://media.giphy.com/media/qKePip325mH2U/giphy.gif'

wa.create(launchConfig).then((client) => start(client))

async function start(client) {
  await client.sendStickerfromUrl(chatId, url_gif, `Amo macaco`)
}
