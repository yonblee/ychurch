'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      fullname: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
            msg: "Invalid character in full name"
          }
        }
      },
      email: {
        type:Sequelize.STRING,
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
        type:Sequelize.STRING,
        allowNull: true,
        unique: {
          name: true,
          msg: "Phone number exist."
        },
        validate: {
          len: {
            args: [3, 15],
            msg: "Phone number too short or long."
          }
        }
      },
      password: {
        type:Sequelize.STRING,
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
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.ENUM("female", "male", "others"),
        defaultValue: "male",
      },
      role: {
        type:Sequelize.ENUM("admin", "user", "moderator"),
        defaultValue: "admin"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};