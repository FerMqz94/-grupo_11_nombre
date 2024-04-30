'use strict';

const usersJSON = require("../../database/users.json")

const usersJSONDBMapped = usersJSON.map((u) => {

  return {
    name: u.name,
    surname: u.surname,
    email: u.email,
    password: u.password,
    role: u.role,
    avatar: u.avatar
  }
})



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Users',usersJSONDBMapped, {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
    
  }
};