'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {

    static associate(models) {
      Budget.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      Budget.belongsTo(models.Business, {
        foreignKey: "business_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Budget.init({
    description: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [3, 116],
            msg: "Description too short or long."
          }
        }
    },
    threshold: {
      type:DataTypes.FLOAT,
      validate: {
        isFloat: {
          args: true,
          msg: "Invalid threshold format."
        },
        min: {
          args: 1,
          msg: "Invalid threshold length."
        }
      }
    },
    currency: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 50],
          msg: "Currency too short or long."
        }
      }
  },
    from: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          args: true,
          msg: "Invalid date."
        }
      }
    },
    to: {
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
    }
  }, {
    sequelize,
    modelName: 'Budget',
  });
  return Budget;
};