const fetch = require('node-fetch');

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const TIMEOUT = 10000;

describe('Smoke Tests - Health Check', () => {
  test('should return 200 status code', async () => {
    const response = await fetch(BASE_URL, { timeout: TIMEOUT });
    expect(response.status).toBe(200);
  }, TIMEOUT);

  test('should return HTML content', async () => {
    const response = await fetch(BASE_URL, { timeout: TIMEOUT });
    const contentType = response.headers.get('content-type');
    expect(contentType).toMatch(/text\/html/);
  }, TIMEOUT);

  test('should contain root div', async () => {
    const response = await fetch(BASE_URL, { timeout: TIMEOUT });
    const html = await response.text();
    expect(html).toMatch(/<div id="root">/);
  }, TIMEOUT);
});
