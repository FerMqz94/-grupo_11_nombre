'use strict';

const sizesJSON = require("../../database/sizes.json")

const sizesJSONDBMapped = sizesJSON.map((s) => {

  return {
    size: s.size
  }
}).flat(1)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Sizes', sizesJSONDBMapped, {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Sizes', null, {});
    
  }
};
