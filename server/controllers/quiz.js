const { Quiz } = require("../models")

const addQuiz = async (req, res) => {
  try {
    const { question, a, b, c, d, e, answer, TopicId } = req.body
    const addQuiz = await Quiz.create({
      question,
      a,
      b,
      c,
      d,
      e,
      answer,
      TopicId
    })
    return res.status(201).json(addQuiz)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  addQuiz
}
