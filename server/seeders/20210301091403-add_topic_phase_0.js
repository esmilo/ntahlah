"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          id: 1,
          name: "Basic CLI UNIX & Github",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Algorithm & Pseudocode",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "Conditional & Data Type",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: "Advance Conditional",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: "Iteration & Pseudocode",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: "Nested Loop",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          name: "Review Loop",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          name: "ES6",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          name: "Function",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 10,
          name: "Array",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 11,
          name: "Array Multidimensi",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 12,
          name: "Review Array",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 13,
          name: "Review Function & Array",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 14,
          name: "Modular Function",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 15,
          name: "Review all up to Modular Function",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 16,
          name: "Object Literal",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 17,
          name: "Review Object",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 18,
          name: "Review All",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 19,
          name: "Array Of Object",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 20,
          name: "Review Array Of Object",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 21,
          name: "Review All Mini Class",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 22,
          name: "HTML",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 23,
          name: "CSS",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 24,
          name: "DOM",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 25,
          name: "Git Branch",
          PhaseId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 26,
          name: "HTML & CSS & DOM",
          PhaseId: 1,
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
