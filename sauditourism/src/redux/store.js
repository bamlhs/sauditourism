import { createStore, applyMiddleware, compose  } from 'redux';
import {combineReducers} from 'redux';
import placeReducers from './reducers/placeReducers';

const enhancers = [];
const middlewares = [];
enhancers.push(applyMiddleware(...middlewares));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    places: placeReducers
});

const store = createStore(reducers, {}, composeEnhancers(...enhancers));


export default store;
