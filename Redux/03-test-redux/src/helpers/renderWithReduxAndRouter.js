import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const renderWithReduxAndRouter = (
    routes,
    {
      initialState = {},
      store = createStore(reducer, initialState, applyMiddleware(thunk))
    } = {},
    {
      route = '/',
      history = createMemoryHistory({ initialEntries: [route] })
    } = {}
) => ({
    ...render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>{routes}</Switch>
        </Router>
      </Provider>
    ),
    store,
    history
})