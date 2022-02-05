"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerQuestion = exports.getQuestion = exports.getQuestions = void 0;
const question_data_1 = __importDefault(require("../datas/question.data"));
const getQuestions = (req, res) => {
    const _questions = question_data_1.default.map((value) => {
        return {
            id: value.id,
            question: value.question,
        };
    });
    console.log('Seorang user me-request semua pertanyaan');
    res.send({
        questions: _questions,
    });
};
exports.getQuestions = getQuestions;
const getQuestion = (req, res) => {
    const { id } = req.params;
    try {
        const question = question_data_1.default.find((value) => value.id == Number(id));
        console.log(`Seorang user me-request pertanyaan nomor ${id} (${question.question})`);
        res.send({
            question: {
                id: question.id,
                question: question.question,
            },
        });
    }
    catch (err) {
        console.log(`Seorang user me-request pertanyaan nomor ${id} yang di mana pertanyaan tidak ada`);
        res.status(404).send({
            error: 'Nomor pertanyaan tidak valid!',
        });
    }
};
exports.getQuestion = getQuestion;
const answerQuestion = (req, res) => {
    const { id } = req.params;
    const { answer: userAnswer } = req.body;
    try {
        const question = question_data_1.default.find((value) => value.id == Number(id));
        let result;
        if (question.answer.toString().toLowerCase() ===
            userAnswer.toString().toLowerCase().trim()) {
            result = true;
        }
        else {
            result = false;
        }
        console.log(`Seorang user menjawab pertanyaan nomor ${id} (${question.question}) dengan ${result ? 'benar' : 'salah'} (${userAnswer.toString().trim()})`);
        res.send({
            result,
        });
    }
    catch (err) {
        console.log(`Seorang user menjawab pertanyaan nomor ${id} yang di mana pertanyaan tidak ada`);
        res.status(404).send({
            error: 'Nomor pertanyaan tidak valid!',
        });
    }
};
exports.answerQuestion = answerQuestion;
