const request = require('supertest');
const express = require('express');
const postSuperHeroes = require('../routes/postSuperHeroes');

const app = express();
app.use(express.json());
app.use('/', postSuperHeroes);

describe('POST /superheroes', () => {
    it('should add a new superhero', async () => {
        const resp = await request(app)
            .post('/superheroes')
            .send({ name: 'Superman', superpower: 'Flying', score: 10 });

        expect(resp.status).toBe(201);
        expect(resp.body.status).toBe('Congrats, your hero (Superman) has been added!');
        expect(resp.body.herodata).toEqual({ name: 'Superman', superpower: 'Flying', score: 10 });
    });

    it('should return an error if the hero already exists', async () => {
        const resp = await request(app)
            .post('/superheroes')
            .send({ name: 'Superman', superpower: 'Flying', score: 10 });

        expect(resp.status).toBe(400);
        expect(resp.body.err).toBe('Sorry, the hero (Superman) already exists in the database!');
    });
});