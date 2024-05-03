'use strict';





/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    
    // await queryInterface.bulkInsert('Products_Colors', [], {});
  
  },

  async down (queryInterface, Sequelize) {    

    
    await queryInterface.bulkDelete('Products_Colors', null, {});
    
  }
};
