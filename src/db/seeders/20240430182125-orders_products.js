'use strict';

const JSON = require("../../database")

const DBMapped = JSON.map((p) => {


  return {

  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Orders_Products', [], {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Orders_Products', null, {});
    
  }
};
