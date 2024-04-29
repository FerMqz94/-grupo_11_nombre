'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products_Colors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      // Pertenece a = belongsTo = 1:N
      Products_Colors.belongsTo(models.Product, {
         foreignKey: 'id_product', 
         as: 'Product' });

      Products_Colors.belongsTo(models.Color, {
         foreignKey: 'id_color',
         as: 'Color' });


    }
  }
  Products_Colors.init({
    id_product: DataTypes.INTEGER,
    id_color: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products_Colors',
    tableName: 'products_colors'
  });
  return Products_Colors;
};