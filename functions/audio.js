const wa = require('@open-wa/wa-automate')

var path = require('path')

var path_audio = path.join(__dirname, 'files/audio.opus')

let chatId = '558598091564@c.us'
wa.create().then((client) => {
  start(client)
})

async function start(client) {
  await client.sendPtt(chatId, path_audio)
}
