import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const forbiddenWords = ["fuck", "drug", "asshole"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );
        if (found.length) {
          return dispatch(showAlert(`You're using forbidden words: ${found}`));
        }
      }
      return next(action);
    };
  };
}
