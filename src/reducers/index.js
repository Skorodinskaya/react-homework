import {mainReducer} from "./mainReducer";
import {secondaryReducer} from "./secondaryReducer";
import {combineReducers} from 'redux'

const reducer = combineReducers({mainReducer, secondaryReducer})

export {reducer}