import {applyMiddleware, createStore, compose} from 'redux';
import reducers from './reducers';
export const store = createStore(reducers);
