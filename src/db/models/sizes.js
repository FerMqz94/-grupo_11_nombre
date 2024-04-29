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


      // Tiene muchas = HasMany = N:1
      Sizes.hasMany(models.Products_Sizes,{
        foreignKey: "id_size",
        as: "Products_Sizes",
      })
      
      // Pertenece a muchos = belongsToMany = N:M
      Sizes.belongsToMany(models.Product, {
        through: models.Products_Sizes,
        foreignKey: 'id_size',
        otherKey: 'id_product',
        as: 'Products'
      });
    }
  }
  Sizes.init({
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sizes',
    tableName: 'sizes'
  });
  return Sizes;
};