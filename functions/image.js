const wa = require('@open-wa/wa-automate')
const path = require('path')

const launchConfig = {
  useChrome: true,
  cacheEnabled: false,
  sessionId: 'hr',
}

var path_image = path.join(__dirname, 'files/foto.jpg')
let chatId = '558592548240@c.us'

wa.create(launchConfig).then((client) => start(client))

async function start(client) {
  client.sendImage(chatId, path_image, 'gostoso.jpeg', 'O *GOSTOSO*')
}
