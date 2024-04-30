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

      // Tiene muchas = HasMany = N:1
      Colors.hasMany(models.Products_Colors,{
        foreignKey: "id_color",
        as: "Products_Colors",
      })


      // Pertenece a muchos = belongsToMany = N:M
      Colors.belongsToMany(models.Product, {
        through: models.Products_Colors,
        foreignKey: 'id_color',
        otherKey: 'id_product',
        as: 'Products'
      });
    }
  }
  Colors.init({
    name: DataTypes.STRING,
    hexadecimal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Colors',
    tableName: 'colors'
  });
  return Colors;
};