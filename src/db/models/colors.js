'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Pertenece a muchos = belongsToMany = N:M
      Colors.belongsToMany(models.Product, {
        through: "Products_Colors",
        foreignKey: 'id_color',
        otherKey: 'id_product',
        as: 'products'
      });
      Colors.belongsToMany(models.Orders, {
        through: "Orders_Products",
        foreignKey: "id_color",
        otherKey: "id_order",
        as: "orders",
      });
    }
  }
  Colors.init({
    name: DataTypes.STRING,
    hexadecimal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Colors',
    tableName: 'colors',
    // underscored: true,
    paranoid: true
    // sequelize,
    // modelName: 'Colors',

    // timestamps: false,
    // onDelete: "CASCADE"
  });
  return Colors;
};