'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders_Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Pertenece a = belongsTo = 1:N
      Orders_Products.belongsTo(models.Orders, {
        foreignKey: "id_order",
        as: "Orders",
      })

      Orders_Products.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "Product",
      })

    }
  }
  Orders_Products.init({
    quantity: DataTypes.INTEGER,
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders_Products',
    tableName: 'orders_Products',
  });
  return Orders_Products;
};