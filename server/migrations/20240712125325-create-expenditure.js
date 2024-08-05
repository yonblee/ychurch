'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Expenditures', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      description: {
        type: Sequelize.TEXT,
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
        type: Sequelize.FLOAT,
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
        type:Sequelize.FLOAT,
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
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: {
            args: true,
            msg: "Invalid date."
          }
        }
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE", 
        onUpdate: "CASCADE", 
      },
      business_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Businesses",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable('Expenditures');
  }
};