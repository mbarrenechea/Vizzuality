const imagesCollection = payload => ({ type: 'SET_IMAGES_COLLECTION', payload });

// export default imagesCollection;
const fetchImages = () => dispatch => {
  const unsplashAPIKey = '17de354439973eb34b4aae66cb3c27ceea000efc05a8c6c94da17edac9cd3a7b';
  fetch(
    `https://api.unsplash.com/search/photos?page=1&query=nature&orientation=landscape&client_id=${unsplashAPIKey}`
  )
    .then(imagesResponse => imagesResponse.json())
    .then(imagesData => {
      dispatch(imagesCollection(imagesData));
    })
    .catch(error => console.log('error fetching images', error));
};

export default fetchImages;
