'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          min: {
            args: 5,
            msg: "Name too short."
          }
        }
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM("for-profit", "non-profit", "church", "state-enterprise"),
        defaultValue: "church"
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          min: {
            args: 10,
            msg: "Invalid address length."
          }
        }
      },
      phone: {
        type: Sequelize.STRING,
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
      }
      ,
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE", 
        onUpdate: "CASCADE"
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
    await queryInterface.dropTable('Businesses');
  }
};