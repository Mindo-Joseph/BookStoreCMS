import { filter } from '../actions';

export const INITIAL_STATE = 'All';

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case filter.TYPES.CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
