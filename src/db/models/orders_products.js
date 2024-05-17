'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders_Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  Orders_Products.init({
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    quantity: {
      type : DataTypes.INTEGER,
      defaultValue: 1
    },
     id_color: DataTypes.INTEGER,// coso si lees esto te advierto que te tengo bronca por clavarme el vsito cuando te pregunte si estabas y no te costaba nada decir que no podias cordobez hdp
    id_size: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Orders_Products',
    tableName: 'orders_products',
    underscored: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at"
  });
  return Orders_Products;
};