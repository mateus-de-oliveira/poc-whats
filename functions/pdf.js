const wa = require('@open-wa/wa-automate')

var path = require('path')

var path_pdf = path.join(__dirname, 'files/pythonbasico.pdf')
let chatId = '558592548240@c.us'

wa.create().then((client) => start(client))

async function start(client) {
  await client.sendFile(
    chatId,
    path_pdf,
    'Apostila de Python',
    'Toma uma apostila para tu aprender melhor sobre python',
  )
}
