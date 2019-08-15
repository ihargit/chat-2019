import { ADD_MESSAGES } from '../actionTypes';

const initialState = [
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
];

export default function addMessages(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGES:
      const { content } = action.payload;
      return [...state,
      ...content]
    default:
      return state;
  }
}