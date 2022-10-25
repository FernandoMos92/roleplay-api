import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('User', () => {
  test('it should create an user', async () => {
    const userPayload = { email: 'teste@teste.com', username: 'test', password: 'test' }
    await supertest(BASE_URL).post('/users').send(userPayload).expect(201)
  })
})
