import { combineReducers } from 'redux';
import {
  ADD_MESSAGE,
} from './actions';

function addMessages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state]
    default:
      return state;
  }
}

const chatApp = combineReducers({
  addMessages,
});

export default chatApp;