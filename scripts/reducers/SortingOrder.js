export default (state = null, action) => {
  switch (action.type) {
    case 'SET_SORTING_ORDER':
      return action.payload;
    default:
      return state;
  }
};
