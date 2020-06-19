const express = require('express');

const router = express.Router();

const { MoviesController } = require('../controllers');

router.get('/api/v1/movies', MoviesController.findAll);

router.get(`/api/v1/movies/${_id}`, MoviesController.findOne);

module.exports = router;