'use strict';

const productsJSON = require("../../database/products.json")

const DBMapped = JSON.map((p) => {


  return {

  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Colors', [], {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Colors', null, {});
    
  }
};
