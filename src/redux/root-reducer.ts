import { combineReducers } from 'redux';
import userReducer from './shipping-data/reducer';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
