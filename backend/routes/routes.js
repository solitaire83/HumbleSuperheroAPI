const express = require('express');
const router = express.Router();

const getSuperHeroes = require('./getSuperHeroes');
const postSuperHeroes = require('./postSuperHeroes');

router.use(getSuperHeroes);
router.use(postSuperHeroes);

module.exports = router;