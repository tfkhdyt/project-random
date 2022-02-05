import { Request, Response } from 'express'
import questions, { IQuestion } from '../datas/question.data'

export const getQuestions = (req: Request, res: Response) => {
  const _questions = questions.map((value) => {
    return {
      id: value.id,
      question: value.question,
    }
  })
  console.log('Seorang user me-request semua pertanyaan')
  res.send({
    questions: _questions,
  })
}

export const getQuestion = (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const question: IQuestion = questions.find(
      (value) => value.id == Number(id)
    )!
    console.log(
      `Seorang user me-request pertanyaan nomor ${id} (${question.question})`
    )
    res.send({
      question: {
        id: question.id,
        question: question.question,
      },
    })
  } catch (err: unknown) {
    console.log(
      `Seorang user me-request pertanyaan nomor ${id} yang di mana pertanyaan tidak ada`
    )
    res.status(404).send({
      error: 'Nomor pertanyaan tidak valid!',
    })
  }
}

export const answerQuestion = (req: Request, res: Response) => {
  const { id } = req.params
  const { answer: userAnswer } = req.body
  try {
    const question = questions.find((value) => value.id == Number(id))!
    let result
    if (
      question.answer.toString().toLowerCase() ===
      userAnswer.toString().toLowerCase().trim()
    ) {
      result = true
    } else {
      result = false
    }
    console.log(
      `Seorang user menjawab pertanyaan nomor ${id} (${
        question.question
      }) dengan ${result ? 'benar' : 'salah'} (${userAnswer.toString().trim()})`
    )
    res.send({
      result,
    })
  } catch (err: unknown) {
    console.log(
      `Seorang user menjawab pertanyaan nomor ${id} yang di mana pertanyaan tidak ada`
    )
    res.status(404).send({
      error: 'Nomor pertanyaan tidak valid!',
    })
  }
}
