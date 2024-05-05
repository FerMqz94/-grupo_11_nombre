'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // define association here

      // Tiene muchas = HasMany = N:1
      Categories.hasMany(models.Product,{
        foreignKey: "id_category",
        as: "products",
      })
      
    }
  }
  Categories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
    tableName: 'categories',
    underscored: true
  });
  return Categories;
};