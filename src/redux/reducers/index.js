import {firstReducer} from "./firstReducer";
import {secondReducer} from "./secondReducer";
import {combineReducers} from 'redux'

const reducer = combineReducers ({firstReducer, secondReducer})

export {reducer}
