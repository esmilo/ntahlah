"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Phases",
      [
        {
          id: 1,
          name: "Phase 0",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Phase 1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "Phase 2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: "Phase 3",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Phases", null, {})
  }
}
