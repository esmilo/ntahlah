const router = require("express").Router()
const { addQuiz, getQuizByIdWithTopic } = require("../controllers/quiz")

router.post("/", addQuiz)
router.get("/:quizId/topics", getQuizByIdWithTopic)

module.exports = router
