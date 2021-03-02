"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          id: 72,
          name: "Intro to React",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 73,
          name: "React Hooks, useEffect & useState",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 74,
          name: "Rules & Custom Hooks",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 75,
          name: "React Router",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 76,
          name: "Redux & React-Redux",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 77,
          name: "Redux Thunk & Middleware",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 78,
          name: "Context",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 79,
          name: "Frontend Testing with RTL",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 80,
          name: "React Native",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 81,
          name: "React Navigation",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 82,
          name: "React Native Gesture Handler",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 83,
          name: "MongoDB",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 84,
          name: "Microservice & Redis",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 85,
          name: "GraphQL",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 86,
          name: "GraphQL Client",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 87,
          name: "GraphQL Client Cache",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 88,
          name: "AWS",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 89,
          name: "Docker",
          PhaseId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 90,
          name: "Code Convention",
          PhaseId: 4,
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
