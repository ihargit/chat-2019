import { ADD_MESSAGES } from '../actionTypes';

const initialState = [
  {
    "from": "Ihar",
    "message": "123123123123123",
    "time": 1565778966404,
  }
];

export default function addMessages(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGES:
      const { messages } = action.payload;
      return [...state,
      ...messages]
    default:
      return state;
  }
}