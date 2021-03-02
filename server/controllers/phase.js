const { Phase, Topic } = require("../models")

const getPhase = async (req, res) => {
  try {
    const phase = await Phase.findAll()
    return res.json(phase)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getPhaseWithTopics = async (req, res) => {
  try {
    const { phaseId } = req.params
    const topics = await Phase.findByPk(Number(phaseId), {
      include: [Topic]
    })
    return res.json(topics)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  getPhase,
  getPhaseWithTopics
}
