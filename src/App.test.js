import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createMultilanguageReducer } from 'redux-multilanguage';
import App from './App';

const mockReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: 'en' }),
  productData: () => ({ products: [] }),
  merchantData: () => ({}),
  cartData: () => ({ cartItems: [] }),
  loading: () => ({ isLoading: false }),
  userData: () => ({}),
  content: () => ({})
});

const mockStore = createStore(mockReducer);

test('renders without crashing', () => {
  render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
});
