'use strict';

const productsJSON = require("../../database/products.json")

const productsDBMapped = productsJSON.map((p) => {

const categoryIDS = {
  'Abrigos': 1,
  'Jeans': 2,
  'Buzos y sweaters': 3,
  'Remeras': 4,
  'Camisas y blusas': 5,
  'Tops': 6,
  'Pantalones y shorts': 7,
  'Vestidos y polleras': 8,
  'Cápsula Beige': 9,
  'Cápsula American': 10,
  'Cápsula 3024': 11,
  'Sin categoría': 12
}


  return {
    images: p.images,
    name: p.name,
    description: p.description,
    featuredDescription: p.featuredDescription,
    price: p.price,
    new: p.new,
    sale: p.sale,
    available: p.available,
    id_category: categoryIDS[p.category ? p.category : 'Sin categoría'],
  }
})



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Products',productsDBMapped, {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Products', null, {});
    
  }
};
