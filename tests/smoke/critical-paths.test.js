const fetch = require('node-fetch');

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const TIMEOUT = 15000;

describe('Smoke Tests - Critical Paths', () => {
  test('should load static assets', async () => {
    const response = await fetch(BASE_URL, { timeout: TIMEOUT });
    const html = await response.text();
    
    const hasJS = html.includes('.js');
    const hasCSS = html.includes('.css');
    
    expect(hasJS || hasCSS).toBe(true);
  }, TIMEOUT);

  test('should have valid env-config.js', async () => {
    const response = await fetch(`${BASE_URL}/env-config.js`, { timeout: TIMEOUT });
    expect(response.status).toBe(200);
    
    const content = await response.text();
    expect(content).toContain('window._env_');
  }, TIMEOUT);

  test('should respond within acceptable time', async () => {
    const start = Date.now();
    const response = await fetch(BASE_URL, { timeout: TIMEOUT });
    const duration = Date.now() - start;
    
    expect(response.status).toBe(200);
    expect(duration).toBeLessThan(5000);
  }, TIMEOUT);
});
