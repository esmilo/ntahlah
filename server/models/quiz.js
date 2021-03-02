"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Topic)
    }
  }
  Quiz.init(
    {
      question: DataTypes.STRING,
      a: DataTypes.STRING,
      b: DataTypes.STRING,
      c: DataTypes.STRING,
      d: DataTypes.STRING,
      e: DataTypes.STRING,
      answer: DataTypes.STRING,
      TopicId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Quiz"
    }
  )
  return Quiz
}
