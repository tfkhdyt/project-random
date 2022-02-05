import { Router } from 'express'
import {
  getQuestions,
  getQuestion,
  answerQuestion,
} from '../controllers/quiz.controller'

const router = Router()

router.get('/questions', getQuestions)
router.get('/questions/:id', getQuestion)
router.post('/answer/:id', answerQuestion)

export default router
