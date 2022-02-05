export interface IQuestion {
  id: number
  question: string
  answer: string | number
}

const questions: IQuestion[] = [
  {
    id: 1,
    question: 'Siapa pembuat bahasa JavaScript?',
    answer: 'Brendan Eich',
  },
  {
    id: 2,
    question: 'Pada tahun berapa ES6 dirilis?',
    answer: 2015,
  },
]

export default questions
