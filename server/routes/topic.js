const router = require("express").Router()
const { getTopic, getTopicById } = require("../controllers/topic")

router.get("/", getTopic)
router.get("/:topicId", getTopicById)

module.exports = router
