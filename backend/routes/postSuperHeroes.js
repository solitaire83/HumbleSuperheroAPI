const express = require('express');
const router = express.Router();

const heroes = require('../utils/Database');

// for more modularity, i moved the validation functions to a separate file
const {HeroInput, HeroExistent} = require('../funcs/validations');

router.post('/superheroes', (req, res) => {
    const {name, superpower, score} = req.body;

    const validation = HeroInput(name, superpower, score);
    if (!validation.valid) {
        return res.status(400).json({ err: validation.msg });
    }
    
    if(HeroExistent(heroes, name)) {
        return res.status(400).json({err: `Sorry, the hero (${name}) already exists in the database!`});
    }

    heroes.push({name, superpower, score});
    res.status(201).json({status: `Congrats, your hero (${name}) has been added!`, herodata: {name, superpower, score}})
})

module.exports = router;