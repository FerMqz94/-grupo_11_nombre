'use strict';

const productsJSON = require("../../database/products.json");


const existingProductIds = new Set([1,2,3,4,5]);

const sizesDBMapped = productsJSON.flatMap((product) => {
  
  if (!existingProductIds.has(product.id)) return [];
  return product.sizes.map((sizeId) => {
    return {
      id_product: product.id,
      id_size: sizeId,
    };
  });
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products_Sizes', sizesDBMapped, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products_Sizes', null, {});
  }
};
