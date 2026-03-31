import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockStore = createStore(() => ({}));

test('renders without crashing', () => {
  render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
});
