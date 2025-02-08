const express = require('express');
const router = express.Router();

const heroes = require('../utils/Database');

router.get('/superheroes', (req, res) => {
    // sorting the heroes by score in descending order
    const _sortedheroes = heroes.sort((a, b) => b.score - a.score);
    res.status(200).json(_sortedheroes)
});

module.exports = router;