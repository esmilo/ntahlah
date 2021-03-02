"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          id: 27,
          name: "Debugging",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 28,
          name: "Recursive",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 29,
          name: "Sort & Searching",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 30,
          name: "ES6",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 31,
          name: "OOP Basic",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 32,
          name: "Karakteristik OOP & Interaksi antar Class",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 33,
          name: "OOP Composition, Aggregation & Factory Method",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 34,
          name: "Review OOP & Interaksi antar file",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 35,
          name: "Review OOP",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 36,
          name: "Callback",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 37,
          name: "MVC synchronous",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 38,
          name: "MVC asynchronous",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 39,
          name: "Database Schema",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 40,
          name: "Database Modeling with SQL",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 41,
          name: "Review MVC & callback",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 42,
          name: "Express Introduction",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 43,
          name: "Template Engine EJS",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 44,
          name: "Express & MVC",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 45,
          name: "Express & MVC & PSQL",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 46,
          name: "EJS & component & Validasi querystring",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 47,
          name: "Promise",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 48,
          name: "Sequelize Introduction",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 49,
          name: "Express & Sequelize",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 50,
          name: "Sequelize One to Many",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 51,
          name: "Sequelize Many to Many",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 52,
          name: "Sequelize Hooks, Static Method & Instanc Method",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 53,
          name: "Sequelize Validation & Helper",
          PhaseId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 54,
          name: "Middleware & Express Session & Bcrypt",
          PhaseId: 2,
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
