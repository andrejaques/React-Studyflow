import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk' ;
import { composeWithDevTools } from 'redux-devtools-extension';

// Action Types

const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

// Actions

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

function requestDog() {
  return { type: REQUEST_IMAGE };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

// Thunk function of index action.

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getImage(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

// Reducer

const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

// Reducer - Action Creator

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

// Store

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk))
);

export default store;
