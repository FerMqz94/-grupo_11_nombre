'use strict';

const productsJSON = require("../../database/products.json")

const productsDBMapped = productsJSON.map((p) => {


  return {
    name: p.name,
    description: p.description,
    featuredDescription: p.featuredDescription,
    price: p.price,
    new: p.new,
    sale: p.sale,
    available: p.available,
    id_category: p.id_category,
  }
})



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Products', [
      {

      }
     ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', [], {});
    
  }
};
