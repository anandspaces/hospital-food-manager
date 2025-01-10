const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('Patient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  diseases: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  allergies: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roomNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bedNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  floorNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactInfo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emergencyContact: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Patient;
