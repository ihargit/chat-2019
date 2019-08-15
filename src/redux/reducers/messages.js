import { ADD_MESSAGES } from '../actionTypes';

const initialState = {
  messages: [],
  allIds: []
};

export default function addMessages(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGES:
      const { content } = action.payload;
      const ids = [...state.allIds];
      const messages = content.filter(m => !ids.includes(m.id));
      messages.sort((a, b) => a.time - b.time);
      messages.forEach(m => ids.push(m.id));
      return {
        messages: [...state.messages,
        ...messages],
        allIds: [ids]
      }
    default:
      return state;
  }
}