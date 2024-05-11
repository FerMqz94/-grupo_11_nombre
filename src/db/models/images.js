'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Pertenece a = belongsTo = 1:N
      Images.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "products"
      })

    }
  }
  Images.init({
    name: DataTypes.STRING,
    id_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Images',
    tableName: 'images',
    // underscored: true,
    paranoid: true
  });
  return Images;
};