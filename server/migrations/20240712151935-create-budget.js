'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Budgets', {
  id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID
  },
  description: {
      type: Sequelize.TEXT,
      validate: {
        len: {
          args: [3, 116],
          msg: "Description too short or long."
        }
      }
  },
  threshold: {
    type:Sequelize.FLOAT,
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
    type: Sequelize.STRING,
    validate: {
      len: {
        args: [1, 50],
        msg: "Currency too short or long."
      }
    }
},
  from: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: {
        args: true,
        msg: "Invalid date."
      }
    }
  },
  to: {
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
    await queryInterface.dropTable('Budgets');
  }
};