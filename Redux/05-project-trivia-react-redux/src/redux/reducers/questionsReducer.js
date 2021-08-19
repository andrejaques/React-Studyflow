import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  questions: [],
};

const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case types.QUESTIONS_REQUEST:
    return { ...state };
  case types.QUESTIONS_REQUEST_SUCCESS:
    return { ...state, questions: action.payload };
  case types.QUESTIONS_REQUEST_ERROR:
    return { ...state, error: action.error };
  default:
    return { ...state };
  }
};

export default questionsReducer;
