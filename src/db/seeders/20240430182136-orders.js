'use strict';

const ordersJSON = require("../../database/orders.json")
const usersJSON = require("../../database/users.json") 

const ordersDBMapped = ordersJSON.map(o => {
  const user = usersJSON.find(u => u.email === o.user)
  return {
    id_user: user ? user.id : null,
    total: o.total,    
    state: o.state,
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Orders', ordersDBMapped, {});
  
  },

  async down (queryInterface, Sequelize) {    

    await queryInterface.bulkDelete('Orders', null, {});
    
  }
};
