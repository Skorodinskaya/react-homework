import {rootReducer} from './rootReducer';
import {secondaryReducer} from './secondaryReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({rootReducer, secondaryReducer})

export {reducer}