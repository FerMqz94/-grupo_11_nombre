'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Tiene muchas = HasMany = N:1
      Users.hasMany(models.Favorites, {
        foreignKey: "id_user",
        as: "Favorites",
      })

      Users.hasMany(models.Orders, {
        foreignKey: "id_user",
        as: "Orders",
      })

    }
  }
  Users.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_role: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    tableName : "users"
  });
  return Users;
};