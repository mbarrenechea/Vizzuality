import loading from './loading';

export const imagesCollection = payload => ({
  type: 'SET_IMAGES_COLLECTION',
  payload
});

// export default imagesCollection;
const fetchImages = (page = 1) => dispatch => {
  const unsplashAPIKey = '17de354439973eb34b4aae66cb3c27ceea000efc05a8c6c94da17edac9cd3a7b';
  fetch(
    `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=nature&orientation=landscape&client_id=${unsplashAPIKey}`
  )
    .then(imagesResponse => {
      dispatch(loading(true));
      return imagesResponse.json();
    })
    .then(imagesData => {
      dispatch(imagesCollection(imagesData));
      dispatch(loading(false));
    })
    .catch(error => console.log('error fetching images', error)); //eslint-disable-line
};

export default fetchImages;
