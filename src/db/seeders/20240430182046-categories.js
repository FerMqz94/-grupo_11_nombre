'use strict';

const productsJSON = require("../../database/products.json")

const categoryDBMapped = productsJSON.map((p) => {
  return {
    name: p.category
  }; 
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', categoryDBMapped, {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Categories', null, {});
    
  }
};
