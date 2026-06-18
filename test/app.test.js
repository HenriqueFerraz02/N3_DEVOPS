const request = require('supertest');
const app = require('../src/app');

describe('Testes da aplicacao', () => {
  test('GET / deve retornar status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('GET /health deve retornar status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /soma deve somar dois numeros', async () => {
    const res = await request(app).get('/soma?a=5&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(8);
  });
});
