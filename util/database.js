const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'atib', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
