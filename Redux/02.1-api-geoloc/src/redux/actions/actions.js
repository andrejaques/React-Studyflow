import * as actionTypes from './actionTypes';

const { REQUEST_ISS_LOCATION, 
    REQUEST_ISS_LOCATION_SUCCESS,
    REQUEST_ISS_LOCATION_ERROR
} = actionTypes;

export const requestISSLocation = (payload) => ({
  type: REQUEST_ISS_LOCATION,
  payload
});

export const getISSLocation = (payload) => ({
  type: REQUEST_ISS_LOCATION_SUCCESS,
  payload
});

export const ISSLocationError = (payload) => ({
  type: REQUEST_ISS_LOCATION_ERROR,
  payload
});
