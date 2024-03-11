const Movies = require('../models/Movies');

module.exports = {
    async index(req, res){
        try {
            const movies = await Movies.findAll();
            return res.json(movies);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async show(req, res){
        const { id } = req.params;
        try {
            const movie = await Movies.findAll({ where: { id: id }});
            return res.json(movie);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async store(req, res){
        const { title, release_year, genre, director, rating } = req.body;
        try {
            const movie = await Movies.create({ title, release_year, genre, director, rating });
            return res.json(movie);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async update(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op;
        const { title, release_year, genre, director, rating } = req.body;
        const { id } = req.params;
        try {
            await Movies.update({ title, release_year, genre, director, rating }, { where: { id: { [Op.eq]: id }}});
            return res.json({message: `Movie updated with success!`});
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    async destroy(req, res){
        const { id } = req.params;
        try {
            await Movies.destroy({ where: { id: id }});
            return res.json({message: `Movie deleted with success!`});
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
}