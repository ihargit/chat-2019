import { createStore, applyMiddleware } from 'redux';
import chatApp from './reducers/index';
import thunk from 'redux-thunk';

export default createStore(chatApp, applyMiddleware(thunk));