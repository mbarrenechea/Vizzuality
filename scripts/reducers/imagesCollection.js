export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_IMAGES_COLLECTION':
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
