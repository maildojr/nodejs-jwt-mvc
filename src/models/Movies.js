const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Movies extends Model {}
Movies.init({
    title: DataTypes.STRING,
    release_year: DataTypes.STRING,
    genre: DataTypes.TEXT,
    director: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    // myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
    sequelize,
    modelName: 'movies',
    // timestamps: true,
    createdAt: false,
    updatedAt: false
});

sequelize.sync();
module.exports = Movies;