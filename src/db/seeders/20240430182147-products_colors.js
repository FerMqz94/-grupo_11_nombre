'use strict';

const productsJSON = require("../../database/products.json");

const productsColorsDBMapped = productsJSON.map(product => product.colors.map(colorId => ({
    id_product: product.id,
    id_color: colorId,
}))).flat(); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Products_Colors', productsColorsDBMapped, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Products_Colors', null, {});
  }
};


