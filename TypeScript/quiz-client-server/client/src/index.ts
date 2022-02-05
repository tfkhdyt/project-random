import inquirer from 'inquirer'
import axios, { AxiosError } from 'axios'

const answeredQuestions: number[] = []

const showMenu = async () => {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Pilih menu',
      choices: [
        {
          value: 'answer',
          name: 'Jawab pertanyaan',
        },
        {
          value: 'exit',
          name: 'Keluar program',
        },
      ],
    },
  ])
}

const showQuestions = async () => {
  const res = await axios.get('http://localhost:4000/api/v1/questions')
  const questions: IQuestion[] = res.data.questions
  interface IQuestion {
    id: number
    question: string
    answer?: string | number
  }
  const choices = questions
    .filter((value) => !answeredQuestions.includes(value.id))
    .map((value) => {
      return {
        value: value.id,
        name: value.question,
      }
    })
  return choices
}

const showQuestion = async (questionId: number, answer: string | number) => {
  return await axios.post(`http://localhost:4000/api/v1/answer/${questionId}`, {
    answer,
  })
}

const handleError = (err: AxiosError) => {
  if (axios.isAxiosError(err)) {
    throw err
  }
  throw new Error('Terjadi error')
}

;(async () => {
  console.log('QUIZ FTI UNIBBA')
  while (true) {
    const answers = await showMenu()
    if (answers.menu == 'answer') {
      try {
        const choices = await showQuestions()
        if (choices.length == 0) {
          console.log('Pertanyaan sudah habis!')
          console.log('Terima kasih sudah bermain!')
          break
        }
        const answers = await inquirer.prompt([
          {
            type: 'list',
            name: 'question',
            message: 'Pilih pertanyaan',
            choices,
          },
        ])
        const questionId = answers.question
        // console.log(questionId)
        while (true) {
          const userAnswer = await inquirer.prompt([
            {
              type: 'inpur',
              name: 'answer',
              message: 'Jawaban',
            },
          ])
          try {
            const realAnswer = await showQuestion(questionId, userAnswer.answer)
            if (realAnswer.data.result) {
              answeredQuestions.push(questionId)
              console.log('Jawaban benar!')
              break
            } else {
              console.log('Jawaban salah!')
            }
          } catch (err) {
            handleError(err as AxiosError)
          }
        }
      } catch (err) {
        handleError(err as AxiosError)
      }
    } else if (answers.menu == 'exit') {
      console.log('Terima kasih telah bermain!')
      break
      // process.exit(0)
    }
  }
  process.exit(0)
})()
