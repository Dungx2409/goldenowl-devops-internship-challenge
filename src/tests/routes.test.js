const request = require('supertest')
const app = require('../server')

describe('Test Endpoints', () => {
    it('should show homepage', async () => {
        const response = await request(app).get(`/`)
        expect(response.statusCode).toEqual(200)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty(
            'message',
            'Welcome warriors to Golden Owl!. My name is Dung Luong and I am a DevOps Intern here. I am excited to be part of this amazing team and looking forward to contributing to the success of the company. Thank you for having me on board!'
        )
        expect(response.header['content-type']).toMatch(/json/)
    })
})
