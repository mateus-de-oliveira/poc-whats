const wa = require('@open-wa/wa-automate')
const express = require('express')

const app = express()

const launchConfig = {
  cacheEnabled: false,
  sessionId: 'hr',
}

let chatId = '558596849077@c.us'

async function start(client) {
  client.sendText(chatId, '<3')
}

app.get('/api', (request, response) => {
  wa.create(launchConfig).then((client) => start(client))
  return response.status(200).json('OK')
})


app.listen('3333', () => {
  console.log('SERVIDOR RODANDO')
})

