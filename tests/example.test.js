const request = require('supertest')
const app = require('../main');

describe('API /students', () => {
    test('Should get all students', async (done) => {
        request(app).get('/v1/students/').then(response => {
            expect(response.statusCode).toBe(200)
            done()
        })
    })
    test('Should create a student', async (done) => {
        request(app).post('/v1/students').send({
            "id":123,
            "name":"Jaz",
            "lastname":"Villa"
        }).then(response => {
            expect(response.statusCode).toBe(201)
            done()
        })
    })
});
