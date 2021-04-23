import { books } from '../actions/index';
import { categories } from '../category';

export const INITIAL_STATE = [
  { id: 1, title: 'Book 1', category: categories[0] },
  { id: 2, title: 'Book 2', category: categories[2] },
  { id: 3, title: 'Book 3', category: categories[1] },
  { id: 4, title: 'Book 4', category: categories[3] },
];

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case books.CREATE_BOOK:
      return [...state, action.payload];
    case books.REMOVE_BOOK:
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
