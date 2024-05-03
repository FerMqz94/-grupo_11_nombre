'use strict';

const rolsJSON = require("../../database/rols.json");

const rolsDBMapped = rolsJSON.map((r) => {
  return { name: r.name };
});



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Rols', rolsDBMapped, {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Rols', null, {});
     
  }
};
