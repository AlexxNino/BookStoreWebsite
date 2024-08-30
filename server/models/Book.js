const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// Define the model
const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name' // Map to the correct column name
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'price' // Map to the correct column name
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'imagepath' // Map to the correct column name
  },
}, {
  tableName: 'books', // Explicitly set the table name
  timestamps: false  // Disable the automatic `createdAt` and `updatedAt` columns
});

module.exports = Book;
