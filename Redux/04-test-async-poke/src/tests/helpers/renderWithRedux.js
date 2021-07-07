import React from 'react';
import { render } from '@testing-library/react';
import rootReducers from '../../redux/reducers/mainReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const renderWithRedux = (component, {
  initialState = {},
  store = createStore(rootReducers, initialState)
} = {}) => {
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>,
    ),
    store,
  };
};

export default renderWithRedux;