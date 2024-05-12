'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      
      
      // Muchos a muchos = belongsToMany = N:M
      Orders.belongsToMany(models.Product, {
        through: "Orders_Products",
        foreignKey: "id_order",
        otherKey: "id_product",
        as: "products",
      })
      // Pertenece a = belongsTo = 1:N
      Orders.belongsTo(models.Users, {
        foreignKey: "id_user",
        as: "users"
      })
    }
  }
  Orders.init({      
    total: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },    
    state: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [["completed", "pending", "canceled"]],
          msg: "Los valores validos de estado son 'completed', 'pending' o 'canceled'",
        },
      },
      defaultValue: "pending"
    },
    id_user: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Orders',
    // underscored: true,
    paranoid: true
  });
  return Orders;
};