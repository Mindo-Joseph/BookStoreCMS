export const TYPES = {
  CREATE_BOOK: 'CREATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
};

export function createBook(book) {
  return ({
    type: TYPES.CREATE_BOOK,
    payload: {
      ...book,
      id: Math.ceil(Math.random() * 100),
    },
  });
}
export function removeBook(book) {
  return ({
    type: TYPES.REMOVE_BOOK,
    payload: { id: book.id },
  });
}
