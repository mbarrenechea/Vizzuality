export default (state = [], action) => {
  switch (action.type) {
    case 'SET_IMAGES_COLLECTION':
      return action.payload.results;
    default:
      return state;
  }
};
