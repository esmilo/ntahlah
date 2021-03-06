"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Phase)
      this.hasMany(models.Quiz)
    }
  }
  Topic.init(
    {
      name: DataTypes.STRING,
      PhaseId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Topic"
    }
  )
  return Topic
}
