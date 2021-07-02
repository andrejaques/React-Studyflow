import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import App from "./App";
import reducer from "./redux/reducer";

const composeEnhancers = composeWithDevTools;

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk))
);

const rootElement = document.getElementById("root")
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  rootElement
)
