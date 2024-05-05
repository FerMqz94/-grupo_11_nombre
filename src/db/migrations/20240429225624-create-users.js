'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "rols"
          },
<<<<<<< HEAD
          key: 'id'

        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        defaultValue: 1
      }, 
=======
          key: "id"
        },
        defaultValue: 1,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        
      },
>>>>>>> 50003ddfd2f4a450e3d183a3025a118b0761d2d0
      avatar: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      deletedAt:{
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
  
};