const router = require("express").Router()
const quizRouter = require("./quiz")
const phaseRouter = require("./phase")
const topicRouter = require("./topic")

router.use("/quizzes", quizRouter)
router.use("/phases", phaseRouter)
router.use("/topics", topicRouter)

module.exports = router
