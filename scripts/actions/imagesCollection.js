const imagesCollection = payload => dispatch => {
  dispatch({
    type: 'SET_IMAGES_COLLECTION',
    payload
  });
};

export default imagesCollection;
