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

      // Pertenece a = belongsTo = 1:N
      Orders.belongsTo(models.Users, {
        foreignKey: "id_user",
        as: "users"
      })

      // Muchos a muchos = belongsToMany = N:M
      Orders.belongsToMany(models.Product, {
        through: "orders_products",
        foreignKey: "id_order",
        otherKey: "id_product",
        as: "products",
      })

    }
  }
  Orders.init({      
    total: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },    
    status: {
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
    paranoid: true,
  });
  return Orders;
};