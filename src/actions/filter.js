export const TYPES = {
  CHANGE_FILTER: 'CHANGE_FILTER',
};

export const changeFilter = (newFilter) => ({
  type: TYPES.CHANGE_FILTER,
  payload: newFilter,
});
