const wa = require('@open-wa/wa-automate')
var path = require('path')

const launchConfig = {
  useChrome: true,
  cacheEnabled: false,
  sessionId: 'hr',
}

const chatIdALana = '558586916263@c.us'
const chatId = '558592548240@c.us'
const url_gif = 'https://media.giphy.com/media/bdGdF94ymhiYo/giphy.gif'
const path_video = path.join(__dirname, 'files/video_mateus.mp4')

wa.create(launchConfig).then((client) => start(client))

async function start(client) {
  await client.sendGiphy(chatIdALana, url_gif, `Eai gatinha`)

  /*  await client.sendVideoAsGif(
    chatId,
    path_video,
    'Mateus o louco.mp4',
    `Não liga para a loucura`,
  )*/
}
