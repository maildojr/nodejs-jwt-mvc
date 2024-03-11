const express = require('express');

const MovieController = require('./controllers/MoviesController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();

// Public routes
routes.get('/', (req, res) => {
    res.send('Public router');
})

// Auth routes
routes.get('/login', AuthController.login);

// Private routes
routes.use('*', AuthController.tokenValidated);
routes.get('/movies', MovieController.index);
routes.get('/movies/:id', MovieController.show);
routes.post('/movies', MovieController.store);
routes.put('/movies/:id', MovieController.update);
routes.delete('/movies/:id', MovieController.destroy);

module.exports = routes;