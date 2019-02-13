export default (state = '', action) => {
  switch (action.type) {
    case 'SET_LIGHTBOX_IMAGE':
      return action.payload;
    default:
      return state;
  }
};
