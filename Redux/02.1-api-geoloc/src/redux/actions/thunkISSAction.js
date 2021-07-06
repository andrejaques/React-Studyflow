import { getCurrentISSLocation } from '../../services/issAPI.js'
import * as actions from './actions';

const { requestISSLocation,
        getISSLocation,
        ISSLocationError
} = actions;

export function fetchISSLocation() {
    return (dispatch) => {
      dispatch(requestISSLocation());
  
      return getCurrentISSLocation()
        .then(
          (location) => dispatch(getISSLocation(location)),
          (error) => dispatch(ISSLocationError(error.message)),
        );
    };
}
