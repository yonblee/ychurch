'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {

    static associate(models) {
      Account.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Account.init({
    apikey: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: {
          args: true,
          msg: "Unacceptable API key"
        }
      }
    },
    footprint: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE", 
      onUpdate: "CASCADE", 
    },
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};