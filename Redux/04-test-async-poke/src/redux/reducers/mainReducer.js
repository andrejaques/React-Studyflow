import { combineReducers } from "redux";
import pokemonCardReducer from './pokemonCardReducer'

const rootReducer = combineReducers({ pokemonCardReducer })

export default rootReducer