'use strict';

const colorsJSON = require("../../database/colors.json");
const productsJSON = require("../../database/products.json");

const colorsProductsDBMapped = colorsJSON
  .map((col) => {
    const productFind = productsJSON.find((productDB) => {
      return productDB.name === col.name; 
    });
    return {
      id_product: productFind ? productFind.id : null,
      id_color: col.id_color
    };
  }).flat(1);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    
    await queryInterface.bulkInsert('Products_Colors', colorsProductsDBMapped, {});
  
  },

  async down (queryInterface, Sequelize) {    

    
    await queryInterface.bulkDelete('Products_Colors', null, {});
    
  }
};
