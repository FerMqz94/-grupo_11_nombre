'use strict';

const productsJSON = require("../../database/products.json")

const colorsDBMapped = productsJSON.map((p) => {
  const colors = p.colors.map(col => {
      return {
        name: col
      }
    })   
    return colors;  
  }).flat(1)


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Colors', colorsDBMapped , {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Colors', null, {});
    
  }
};
