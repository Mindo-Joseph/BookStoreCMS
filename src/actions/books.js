import * as types from './actionTypes';

let counter = 1;
export default function createBook(book) {
  counter += 1;

  return ({
    type: types.CREATE_BOOK,
    payload: {
      ...book,
      id: counter,
    },
  });
}
export function removeBook(book) {
  return ({
    type: types.REMOVE_BOOK,
    payload: { id: book.id },
  });
}
