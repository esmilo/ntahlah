const router = require("express").Router()
const { addQuiz } = require("../controllers/quiz")

router.post("/", addQuiz)

module.exports = router
