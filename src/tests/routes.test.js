const request = require('supertest')
const app = require('../server')

describe('Test Endpoints', () => {
    it('should show homepage', async () => {
        const response = await request(app).get(`/`)
        expect(response.statusCode).toEqual(200)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty(
            'message',
            'Welcome warriors to Golden Owl!. My name is Dung!. I am a DevOps Intern at Golden Owl. I am excited to be part of this amazing team and looking forward to learning and growing with them. Thank you for the opportunity!'
        )
        expect(response.header['content-type']).toMatch(/json/)
    })
})
