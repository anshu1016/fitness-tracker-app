import { applyMiddleware, createStore } from 'redux';
import {fitnessReducer} from '../reducers/fitenessReducer'
import {thunk} from 'redux-thunk';
const store = createStore(fitnessReducer, applyMiddleware(thunk))

export {store}