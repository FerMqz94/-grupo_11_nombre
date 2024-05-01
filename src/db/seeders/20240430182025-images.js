'use strict';

const productsJSON = require("../../database/products.json")

const imagesDBMapped = productsJSON.map((p) => {
const images = p.image.map(img => {
    return {
      name: img,
      id_product: p.id
    }
  })   
  return images;  
}).flat(1)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Images', imagesDBMapped, {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Images', null, {});
    
  }
};
