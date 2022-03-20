import { Fetcher } from './Fetcher'
import { Scraper } from './Scraper'

const main = async () => {
  // let message: string
  const fetcher = new Fetcher('bicara')
  const html = await fetcher.getData()

  const scraper = new Scraper(html)
  const result = await scraper
    .getData()
    .catch((err) => console.error(err.message))
  if (!result) {
    return
  }

  console.log(result)
}

main()
