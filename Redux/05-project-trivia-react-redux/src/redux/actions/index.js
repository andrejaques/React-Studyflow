import * as types from './actionTypes';
import fetchToken from '../../APIs/fetchToken';
import fetchQuestions from '../../APIs/fetchQuestions';

// Action creators - login actions

export const tokenRequest = () => ({
  type: types.TOKEN_REQUEST,
});

export const tokenRequestSuccess = (payload) => ({
  type: types.TOKEN_REQUEST_SUCCESS,
  payload,
});

export const tokenRequestError = (payload) => ({
  type: types.TOKEN_REQUEST_ERROR,
  payload,
});

export const questionRequest = () => ({
  type: types.QUESTIONS_REQUEST,
});

export const questionRequestSuccess = (payload) => ({
  type: types.QUESTIONS_REQUEST_SUCCESS,
  payload,
});

export const questionRequestError = (payload) => ({
  type: types.QUESTIONS_REQUEST_ERROR,
  payload,
});

// Fetch API

export const fetchAPIToken = async (dispatch) => {
  dispatch(tokenRequest());
  try {
    const data = await fetchToken();
    return dispatch(tokenRequestSuccess(data));
  } catch (error) {
    return dispatch(tokenRequestError(error));
  }
};

export const fetchAPIQuestion = (token) => async (dispatch) => {
  dispatch(questionRequest());
  try {
    const data = await fetchQuestions(token);
    return dispatch(questionRequestSuccess(data));
  } catch (error) {
    return dispatch(questionRequestError(error));
  }
};
