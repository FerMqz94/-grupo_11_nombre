'use strict';

const productsJSON = require("../../database/products.json")

const sizesDBMapped = productsJSON.map((p) => {
const sizes = p.sizes.map(siz => {
    return {
      
    }
  })   
  return images;  
}).flat(1)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Products_Sizes', sizesDBMapped, {});
  
  },
  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Products_Sizes', null, {});
    
  }
};
