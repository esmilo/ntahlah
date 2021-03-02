"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          id: 55,
          name: "Rest API",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 56,
          name: "Authentication & Authorization",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 57,
          name: "3rd Party Api & Error Handler",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 58,
          name: "Jquery & Ajax",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 59,
          name: "OAUTH",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 60,
          name: "Git Workflow",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 61,
          name: "Heroku & Firebase Hosting",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 62,
          name: "CSS & SASS",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 63,
          name: "Vue Directive",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 64,
          name: "Vue Lifecycle",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 65,
          name: "Vue Component",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 66,
          name: "JEST & Supertest",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 67,
          name: "Vue CLI & Component Review",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 68,
          name: "Vue Router",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 69,
          name: "Vuex",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 70,
          name: "Socket Io",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 71,
          name: "Background Job & Queue",
          PhaseId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Topics", null, {})
  }
}
