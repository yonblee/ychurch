'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expenditure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Expenditure.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      Expenditure.belongsTo(models.Business, {
        foreignKey: "business_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Expenditure.init({
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [3, 116],
          msg: "Description too short or long."
        }
      }
    },
    amount_one: {
      allowNull: false,
      type: DataTypes.FLOAT,
      validate: {
        isFloat: {
          args: true,
          msg: "Invalid amount format."
        },
        min: {
          args: 1,
          msg: "Invalid amount length."
        }
      }
    },
    amount_two: {
      type:DataTypes.FLOAT,
      validate: {
        isFloat: {
          args: true,
          msg: "Invalid amount format."
        },
        min: {
          args: 1,
          msg: "Invalid amount length."
        }
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          args: true,
          msg: "Invalid date."
        }
      }
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
    modelName: 'Expenditure',
  });
  return Expenditure;
};