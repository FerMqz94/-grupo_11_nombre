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


      Users.belongsTo(models.Rols, {
        foreignKey: "id_rol",
        as: "rol"
      })

      // Pertenece a muchos = belongsToMany = N:M
      Users.belongToMany(models.Favorites, {
        through: "Favorites",
        foreignKey: "id_user",
        otherKey: "id_product",
        as: "favorites",
      })

      Users.hasMany(models.Orders, {
        foreignKey: "id_user",
        as: "orders",
      })

    }
  }
  Users.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_rol: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    tableName : "users"
  });
  return Users;
};