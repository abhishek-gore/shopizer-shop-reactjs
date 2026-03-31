import '@testing-library/jest-dom';

window._env_ = {
  APP_BASE_URL: 'http://localhost:8080',
  APP_API_VERSION: '/api/v1',
  APP_MERCHANT: 'DEFAULT',
  APP_THEME_COLOR: '#D1D1D1'
};

window.scrollTo = jest.fn();
