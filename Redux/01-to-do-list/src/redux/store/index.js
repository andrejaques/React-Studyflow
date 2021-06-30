import { createStore } from 'redux';
import combineReducer from '../reducers';

const store = createStore(combineReducer)

export default store