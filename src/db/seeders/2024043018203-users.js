'use strict';

const usersJSON = require("../../database/users.json")

const usersJSONDBMapped = usersJSON.map((u) => {

const rols = {
  "REGULAR" : 1,
  "ADMIN" : 2,  
}

  return {
    name: u.name,
    username: u.username,
    email: u.email,
    password: u.password,
    id_rol: rols[u.rol],
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