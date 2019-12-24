const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
  });
});

describe('Test the awe path', () => {
  test('It should response the GET method from look-of-awe-and-joy', async () => {
    const response = await request(app).get('/awe/look-of-awe-and-joy');

    expect(response.statusCode).toBe(200);
  });
  
  test('It should response the GET method from derp-look', async () => {
    const response = await request(app).get('/awe/derp-look');

    expect(response.statusCode).toBe(200);
  });
  
  test('It should response the GET method from look-of-i-am-happy-with-it', async () => {
    const response = await request(app).get('/awe/look-of-i-am-happy-with-it');

    expect(response.statusCode).toBe(200);
  });
  
  test('It should response the GET method from cute-look', async () => {
    const response = await request(app).get('/awe/cute-look');

    expect(response.statusCode).toBe(200);
  });
});
