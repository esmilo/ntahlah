"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Quizzes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING
      },
      a: {
        type: Sequelize.STRING
      },
      b: {
        type: Sequelize.STRING
      },
      c: {
        type: Sequelize.STRING
      },
      d: {
        type: Sequelize.STRING
      },
      e: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.ENUM(["a", "b", "c", "d", "e"])
      },
      TopicId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Quizzes")
  }
}
