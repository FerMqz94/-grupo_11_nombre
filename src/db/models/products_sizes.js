'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products_Sizes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  Products_Sizes.init({
    id_product: DataTypes.INTEGER,
    id_size: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products_Sizes',
    tableName: 'products_sizes',
    underscored: true,
    paranoid: true
  });
  return Products_Sizes;
};