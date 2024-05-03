'use strict';

const colorsJSON = require("../../database/colors.json")

const colorsDBMapped = colorsJSON.map((c) => {
      return {
        name: c.name,
        hexadecimal: c.code
      }
    })

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Colors', colorsDBMapped , {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Colors', null, {});
    
  }
};
