'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sizes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
     // Pertenece a muchos = belongsToMany = N:M
      Sizes.belongsToMany(models.Product, {
        through: "Products_Sizes",
        foreignKey: 'id_size',
        otherKey: 'id_product',
        as: 'products'
      });
    }
  }
  Sizes.init({
    size: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sizes',
    tableName: 'sizes',
    underscored: true
  });
  return Sizes;
};