'use strict';

const sizesJSON = require("../../database/sizes.json");
const productsJSON = require("../../database/products.json");


const sizesDBMapped = productsJSON.flatMap((product) => {
  return product.sizes.map((sizeId) => {
    return {
      id_product: product.id,
      id_size: sizeId
    };
  });
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('products_sizes', sizesDBMapped, {});
  },
  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('products_sizes', null, {});
  }
};
