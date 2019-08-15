import { ADD_MESSAGES } from '../actionTypes';

const initialState = {
  messages: [],
  allIds: []
};

export default function addMessages(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGES:
      const { content } = action.payload;
      const messages = content.filter(m => !state.allIds.includes(m.id));
      if (state.messages.length === -1) {
        messages.sort((a, b) => a.time - b.time);
      }
      const ids = [];
      messages.forEach(m => {
        ids.push(m.id);
        if (m.from === 'ihargit') { m.flexEnd = 'flex-end' };
      });
      return {
        messages: [...state.messages,
        ...messages],
        allIds: [...state.allIds, ...ids]
      }
    default:
      return state;
  }
}