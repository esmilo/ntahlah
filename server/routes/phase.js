const router = require("express").Router()
const { getPhase, getPhaseWithTopics } = require("../controllers/phase")

router.get("/", getPhase)
router.get("/:phaseId/topics", getPhaseWithTopics)

module.exports = router
