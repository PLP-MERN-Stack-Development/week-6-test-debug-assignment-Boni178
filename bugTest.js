import request from 'supertest';
import app from '../server.js';

test('POST /bugs creates a new bug', async () => {
  const res = await request(app)
    .post('/api/bugs')
    .send({ title: 'Crash on load', description: 'App crashes on load' });

  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe('Crash on load');
});
