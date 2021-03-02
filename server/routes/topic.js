const router = require("express").Router()
const { getTopic, getTopicByIdWithQuizzes } = require("../controllers/topic")

router.get("/", getTopic)
router.get("/:topicId/quizzes", getTopicByIdWithQuizzes)

module.exports = router
