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

      // Tiene muchas = HasMany = N:1
      // 🌝
      Product.hasMany(models.Images,{
        foreignKey: "id_product",
        as: "images",
      })

      Product.hasMany(models.Products_Sizes,{
        foreignKey: "id_product",
        as: "Products_Sizes",
      })
      Product.hasMany(models.Products_Colors,{
        foreignKey: "id_product",
        as: "Products_Colors",
      })

      Product.hasMany(models.Favorites,{
        foreignKey: "id_product",
        as: "Favorites",
      })

      // Pertenece a = belongsTo = 1:N
      Product.belongsTo(models.Categories, {
        foreignKey: "id_category",
        as: "category"
      })

      // Pertenece a muchos = belongsToMany = N:M
       // 🌝
      Product.belongsToMany(models.Colors, {
        through: "Products_Colors",
        foreignKey: 'id_product',
        otherKey: 'id_color',
        as: 'colors'
      });

      // 🌝
      Product.belongsToMany(models.Sizes, {
        through: "Products_Sizes",
        foreignKey: 'id_product',
        otherKey: 'id_size',
        as: 'sizes'
      });

      // 🌝
      Product.belongsToMany(models.Orders,{
        through: "Orders_Products",
        foreignKey: "id_product",
        otherKey: "id_order",
        as: "orders",
      })
      // 🌝
      
      Product.belongToMany(models.Favorites, {
        through: "Favorites",
        foreignKey: "id_user",
        otherKey: "id_user",
        as: "favorites",
      })


    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    featuredDescription: DataTypes.TEXT,
    price: DataTypes.DECIMAL(6, 2),
    new: DataTypes.INTEGER,
    sale: DataTypes.INTEGER,
    available: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};