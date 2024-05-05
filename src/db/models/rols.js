'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rols extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Rols.hasMany(models.Users,{
        foreignKey: "id_rol",
        as: "users",
      })
      
    }
  }
  Rols.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rols',
    tableName: 'rols',
    timestamps: false,
    underscored: true
  });
  return Rols;
};