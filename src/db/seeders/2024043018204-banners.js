'use strict';

const bannersJSON = require("../../database/banners.json")

const bannersJSONDBMapped = bannersJSON.map((b) => {

  return {
    name: b.name
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Banners', bannersJSONDBMapped , {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Banners', null, {});
    
  }
};
