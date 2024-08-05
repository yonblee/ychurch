'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {

    static associate(models) {
      Notification.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      Notification.belongsTo(models.Business, {
        foreignKey: "business_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Notification.init({
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [15, 116],
          msg: "Description too short or long."
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
    business_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Businesses",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};