const CronJob = require('cron').CronJob
const puppeteer = require('puppeteer')
const wa = require('@open-wa/wa-automate')

console.log('Programa vai iniciar as 22:00 de todos os dias')
const job = new CronJob(
  '00 50 14 * * *',
  async function () {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://ifce.edu.br/maracanau/noticias', {
      waitUntil: 'networkidle2',
    })

    const pageCountLast = await page.$$eval(
      '#content-core > ul > li',
      (pages) => pages.length - 1,
    )

    let searchUrlLastPage = await page.$eval(
      `#content-core > ul > li:nth-child(${pageCountLast}) > a`,
      (el) => el.href,
    )

    await page.goto(searchUrlLastPage, {
      waitUntil: 'networkidle2',
    })

    const articlesCount = await page.$$eval(
      '#content-core > div > article',
      (articles) => articles.length,
    )

    let articles = await page.$$eval(
      `#content-core > div > article`,
      (articles) =>
        articles.map((article) => {
          const title = article.querySelector(
            'header > span.summary > a',
          ).textContent
          const description = article.querySelector('p').textContent
          let update_at = article.querySelector(
            'header > span.documentByLine',
          ).innerText
          update_at = update_at.slice(1).split(' ').slice(1).join(' ')
          const link = article.querySelector('header > span.summary > a').href

          const object = {
            title,
            description,
            update_at,
            link,
          }

          return object
        }),
    )

    articles = articles.reverse()
    articles = articles[0]

    let chatId = '558596849077@c.us'
    wa.create().then((client) => start(client))
    async function start(client) {
      await client.sendText(chatId, articles.title + '\n' + articles.link)
    }

    await browser.close()
  },
  null,
  true,
  'America/Sao_Paulo',
)

job.start()
