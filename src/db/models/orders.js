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
        as: "Users"
      })

      // Tiene muchas = HasMany = N:1
      Orders.hasMany(models.Orders_Products, {
        foreignKey: "id_order",
        as: "Orders_Products",
      })

    }
  }
  Orders.init({
    total: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};