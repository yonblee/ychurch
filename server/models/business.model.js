'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
 
    static associate(models) {
      Business.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      Business.hasMany(models.Revenue, {
        foreignKey: "business_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      Business.hasMany(models.Report, {
        foreignKey: "business_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      Business.hasMany(models.Expenditure, {
        foreignKey: "business_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      Business.hasMany(models.Budget, {
        foreignKey: "business_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      Business.hasMany(models.Notification, {
        foreignKey: "business_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      Business.hasOne(models.Subscription, {
        foreignKey: "business_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Business.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: 5,
          msg: "Name too short."
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("for-profit", "non-profit", "church", "state-enterprise", "others"),
      defaultValue: "church"
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: 10,
          msg: "Invalid address length."
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "Phone",
        msg: "Phone number is taken."
      },
      validate: {
        len: {
          args: [3, 15],
          msg: "Contact too long or short."
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
      onUpdate: "CASCADE"
    },
  },
   {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};