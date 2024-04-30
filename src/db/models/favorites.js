'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Pertenece a = belongsTo = 1:N
      Favorites.belongsTo(models.Users, {
        foreignKey: "id_user",
        as: "Users"
      })

      Favorites.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "Product"
      })

    }
  }
  Favorites.init({
    id_user: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorites',
    tableName: 'favorites',
  });
  return Favorites;
};