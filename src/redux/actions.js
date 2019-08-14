import { ADD_MESSAGES } from "./actionTypes";

export const addMessages = (content) => ({
  type: ADD_MESSAGES,
  payload: {
    content
  }
});