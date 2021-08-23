const wa = require('@open-wa/wa-automate')
const path = require('path')

const launchConfig = {
  useChrome: true,
  cacheEnabled: false,
  sessionId: 'hr',
}

var path_video = path.join(__dirname, 'files/video_mateus.mp4')
let chatId = '558592548240@c.us'

wa.create(launchConfig).then((client) => start(client))

async function start(client) {
  client.sendFile(chatId, path_video, 'Video louco do Mateus', '*LOUCURA*')
}
