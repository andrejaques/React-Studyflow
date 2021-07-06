import * as actionTypes from '../actions/actionTypes';

const { REQUEST_ISS_LOCATION, 
    REQUEST_ISS_LOCATION_SUCCESS,
    REQUEST_ISS_LOCATION_ERROR
} = actionTypes;
  
  const INITIAL_STATE = {
    latitude: -20.267,
    longitude: -42.0366,
    error: null,
    isLoading: false
  }
  
  const issLocation = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
      case REQUEST_ISS_LOCATION:
        return {
          ...state,
          isLoading: true,
        }
      case REQUEST_ISS_LOCATION_SUCCESS:
        return {
          ...state,
          latitude: payload.iss_position.latitude,
          longitude: payload.iss_position.longitude,
          isLoading: false,
        }
      case REQUEST_ISS_LOCATION_ERROR:
        return {
          ...state,
          error: payload.error,
          isLoading: false,
        }
      default:
        return state;
    }
  }
  
  export default issLocation;