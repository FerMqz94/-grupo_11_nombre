"use strict";

const ordersJSON = require("../../database/orders.json");
const productsJSON = require("../../database/products.json");

const ordersProductsDBMapped = ordersJSON
  .map((ord) => {
    const productMapped = ord.products.map((productOrd) => {
      const productFind = productsJSON.find((productDB) => {
        return productDB.name === productOrd.name;
      });
      return {
        id_order: ord.id,
        id_product: productFind ? productFind.id : null,
        quantity: productOrd.quantity,
        id_color: productOrd.id_color,
        id_size: productOrd.id_size    
        
      };
    });
    return productMapped;
  })
  .flat(1);



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Orders_Products', ordersProductsDBMapped, {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Orders_Products', null, {});
    
  }
};
