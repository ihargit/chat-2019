import { ADD_MESSAGES } from '../actionTypes';

const initialState = {
  messages: [
    {
      flexEnd: 'flex-end',
      id: '12',
      message: "123123123123123",
      time: "1565778966404",
    },
    {
      id: '123',
      from: "Ihar",
      message: "12312312312333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
      time: "1565778966404",
    },
    {
      id: '125',
      from: "Ihar",
      message: "12333333333333333333333333333333",
      time: "1565778966404",
    }
  ],
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