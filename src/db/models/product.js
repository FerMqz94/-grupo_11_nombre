'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Tiene muchas relaciones "hasMany"

    
      Product.hasMany(models.Products_Sizes, {
        foreignKey: "id_product",
        as: "productSizes",
      });

      Product.hasMany(models.Products_Colors, {
        foreignKey: "id_product",
        as: "productColors",
      });

      Product.hasMany(models.Favorites, {
        foreignKey: "id_product",
        as: "favorites",
      });

      // Pertenece a una categoría "belongsTo"
      Product.belongsTo(models.Categories, {
        foreignKey: "id_category",
        as: "category"
      });

      // Pertenece a muchos "belongsToMany" para colores y tamaños
      Product.belongsToMany(models.Colors, {
        through: "Products_Colors",
        foreignKey: 'id_product',
        otherKey: 'id_color',
        as: 'colors'
      });

      Product.belongsToMany(models.Sizes, {
        through: "Products_Sizes",
        foreignKey: 'id_product',
        otherKey: 'id_size',
        as: 'sizes'
      });

      // Pertenece a muchos "belongsToMany" para ordenes
      Product.belongsToMany(models.Orders, {
        through: "Orders_Products",
        foreignKey: "id_product",
        otherKey: "id_order",
        as: "orders",
      });
    }
  }
  
  Product.init({
    images: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    featuredDescription: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10, 2), 
    new: DataTypes.BOOLEAN, 
    sale: DataTypes.BOOLEAN, 
    available: DataTypes.BOOLEAN, 
    id_category: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    // underscored: true,
    // paranoid: true
  });

  return Product;
};
