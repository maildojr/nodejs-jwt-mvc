const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Users extends Model {}
Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize,
    modelName: 'users',
    createdAt: false,
    updatedAt: false
});

sequelize.sync();
module.exports = Users;