'use strict';

const productsJSON = require("../../database/products.json");


const productsSizesDBMapped = productsJSON.map(product => 
  product.sizes.map(sizeId => ({
    id_product: product.id,
    id_size: sizeId
  }))
).flat(); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Products_Sizes', productsSizesDBMapped, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Products_Sizes', null, {});
  }
};
