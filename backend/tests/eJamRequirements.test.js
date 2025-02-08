const request = require('supertest');
const express = require('express');
const postSuperHeroes = require('../routes/postSuperHeroes');
const getSuperHeroes = require('../routes/getSuperHeroes');

const app = express();
app.use(express.json());
app.use('/', postSuperHeroes);
app.use('/', getSuperHeroes);

describe('Superheroes API', () => {
    describe('POST /superheroes', () => {
        // testing if the POST /superheroes route adds a new superhero to the database.
        it('should add a new superhero', async () => {
            const resp = await request(app)
                .post('/superheroes')
                .send({ name: 'Superman', superpower: 'Flying', score: 10 });

            expect(resp.status).toBe(201);
            expect(resp.body.status).toBe('Congrats, your hero (Superman) has been added!');
            expect(resp.body.herodata).toEqual({ name: 'Superman', superpower: 'Flying', score: 10 });
        });

        // testing if the hero already exists in the database.
        it('should return an error if the hero already exists', async () => {
            await request(app)
                .post('/superheroes')
                .send({ name: 'Superman', superpower: 'Flying', score: 10 });

            const resp = await request(app)
                .post('/superheroes')
                .send({ name: 'Superman', superpower: 'Flying', score: 10 });

            expect(resp.status).toBe(400);
            expect(resp.body.err).toBe('Sorry, the hero (Superman) already exists in the database!');
        });

        // if one of the inputs is empty, it should return an error.
        it('should return an error if the input is invalid', async () => {
            const resp = await request(app)
                .post('/superheroes')
                .send({ name: '', superpower: 'Flying', score: 10 });

            expect(resp.status).toBe(400);
            expect(resp.body.err).toBe('Sorry, you have to provide a name!');
        });

        // basically, if the score isnt between 1 and 10, it should return an error.
        it('should return an error if the score is out of range', async () => {
            const resp = await request(app)
                .post('/superheroes')
                .send({ name: 'Superman', superpower: 'Flying', score: 11 });

            expect(resp.status).toBe(400);
            expect(resp.body.err).toBe('Sorry, the score must be between 1 and 10!');
        });
    });

    // testing if the GET /superheroes route returns the list of superheroes descendingly sorted by score.
    describe('GET /superheroes', () => {
        it('should fetch the list of superheroes sorted by humility score', async () => {
            await request(app)
                .post('/superheroes')
                .send({ name: 'Superman', superpower: 'Flying', score: 10 });
            await request(app)
                .post('/superheroes')
                .send({ name: 'Batman', superpower: 'Intelligence', score: 8 });
            await request(app)
                .post('/superheroes')
                .send({ name: 'Hulk', superpower: 'Strength', score: 9 });

            const resp = await request(app).get('/superheroes');

            expect(resp.status).toBe(200);
            expect(resp.body).toEqual([
                { name: 'Superman', superpower: 'Flying', score: 10 },
                { name: 'Hulk', superpower: 'Strength', score: 9 },
                { name: 'Batman', superpower: 'Intelligence', score: 8 }
            ]);
        });
    });
});