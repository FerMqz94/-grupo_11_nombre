'use strict';

const favoritesJSON = require("../../database/favorites.json");

const favoritesDBMapped = favoritesJSON.map((f) => {
  return {
    id_user: f.id_user,
    id_product: f.id_product
  }
}) 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Favorites', favoritesDBMapped , {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Favorites', null, {});
    
  }
};
