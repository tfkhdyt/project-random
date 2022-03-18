// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
import axios, {AxiosResponse} from 'axios'
import { load } from 'cheerio'
import fs from 'fs'
import pretty from 'pretty'
import superagent from 'superagent'

interface IJenisKata {
  [key: string]: string
}

const parseJenisKata = (char: string) => {
  const jenisKata: IJenisKata = {
    n: 'nomina (kata benda)'
  }
  return jenisKata[char] || undefined
}

const scrapeDataFromKbbi = async (keyword: string) => {
  let ejaan, jenisKata, deskripsi: any[] = []
  try {
    const result = await superagent.get(`https://kbbi.web.id/${keyword.toLowerCase()}`)
    const data = result.text
    const $ = load(data)
    const body = $('#d1')
    console.log(pretty(body.html() as string))
    ejaan = '/' + body.children('b').first().text() + '/'
    jenisKata = parseJenisKata(body.children('em').first().text())
    body.children('b').each((i, el) => {
      deskripsi.push((el.next as unknown as Node).nodeValue)
    })
  } catch (err) {
    console.log(err)
  }
  // console.log(pretty(html))
  const result = {
    ejaan,
    jenisKata,
    deskripsi
  }
  console.log(result)
}

scrapeDataFromKbbi('sekolah')
