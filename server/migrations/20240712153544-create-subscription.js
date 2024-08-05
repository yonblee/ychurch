'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Subscriptions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      subscription:{
        type: Sequelize.ENUM("freemium", "premium", "trial"),
        defaultValue: "trial",
      },
      start: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: {
            args: true,
            msg: "Invalid start date."
          }
        }
      },
      end: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: {
            args: true,
            msg: "Invalid end date."
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
    await queryInterface.dropTable('Subscriptions');
  }
};