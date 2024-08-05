'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Business, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      User.hasMany(models.Revenue, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      User.hasMany(models.Report, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      User.hasMany(models.Expenditure, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      User.hasMany(models.Budget, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      User.hasOne(models.Subscription, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      User.hasOne(models.Account, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      User.hasMany(models.Notification, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      User.hasOne(models.Subscription, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  User.init({
    fullname: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-,. ])*$/,
          msg: "Invalid character in full name"
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "Email",
        msg: "Email is taken"
      },
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid Email format."
        }
      }
    },
    phone: {
      type:DataTypes.STRING,
      allowNull: true,
      unique: {
        name: "Phone",
        msg: "Phone number is taken"
      },
      validate: {
        len: {
          args: [3, 15],
          msg: "Phone number too short or long."
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: 23,
          msg: "Password is short."
        }
      }
    },
    birthday: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM("female", "male", "others"),
      defaultValue: "male",
    },
    role: {
      type:DataTypes.ENUM({
        values: ["admin", "user", "moderator"]
      }),
      defaultValue: "admin"
    },
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};