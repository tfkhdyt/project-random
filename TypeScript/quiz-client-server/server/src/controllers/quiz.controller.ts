import { Request, Response } from 'express'
import questions, { IQuestion } from '../datas/question.data'

export const getQuestions = (req: Request, res: Response) => {
  const _questions = questions.map((value) => {
    return {
      id: value.id,
      question: value.question,
    }
  })
  res.send({
    questions: _questions,
  })
}

export const getQuestion = (req: Request, res: Response) => {
  const { id } = req.params
  const question: IQuestion = questions.find((value) => value.id == Number(id))!
  res.send({
    question: {
      id: question.id,
      question: question.question,
    },
  })
}

export const answerQuestion = (req: Request, res: Response) => {
  const { id } = req.params
  const { answer: userAnswer } = req.body
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
  res.send({
    result,
  })
}
