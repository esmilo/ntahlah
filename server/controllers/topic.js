const { Topic, Quiz } = require("../models")

const getTopic = async (req, res) => {
  try {
    const topics = await Topic.findAll()
    return res.json(topics)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getTopicByIdWithQuizzes = async (req, res) => {
  try {
    const { topicId } = req.params
    const topic = await Topic.findByPk(Number(topicId), {
      include: [Quiz]
    })
    return res.json(topic)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  getTopic,
  getTopicByIdWithQuizzes
}
