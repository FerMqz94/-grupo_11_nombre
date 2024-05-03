'use strict';

const sizesJSON = require("../../database/sizes.json")
const productsJSON = require("../../database/products.json")

const sizesDBMapped = productsJSON.map((p) => {
const sizes = p.sizes.map(siz => {
    return {
      
    }
  })   
  return sizes;  
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
