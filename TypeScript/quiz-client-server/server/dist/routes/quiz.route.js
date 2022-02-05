"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quiz_controller_1 = require("../controllers/quiz.controller");
const router = (0, express_1.Router)();
router.get('/questions', quiz_controller_1.getQuestions);
router.get('/questions/:id', quiz_controller_1.getQuestion);
router.post('/answer/:id', quiz_controller_1.answerQuestion);
exports.default = router;
