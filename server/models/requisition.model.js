'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Requisition extends Model {

    static associate(models) {
      Requisition.belongsTo(models.Business, {
        foreignKey: "business_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      Requisition.belongsTo(models.User, {
        as: "creator",
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"

      })
    }
  }
  Requisition.init({
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          args: true,
          msg: "Invalid amount."
        }
      }
    },
    purpose: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [10, 255],
          msg: "Purpose too short or long."
        }
      }
    },
    state: {
        type: DataTypes.ENUM("pending", "approved", "declined"),
        defaultValue: "pending",
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    business_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Businesses",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }
  }, {
    sequelize,
    modelName: 'Requisition',
  });
  return Requisition;
};