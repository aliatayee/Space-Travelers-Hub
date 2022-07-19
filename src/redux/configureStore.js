import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({ missionsReducer });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
