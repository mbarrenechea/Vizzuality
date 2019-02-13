import React from 'react';
import PropTypes from 'prop-types';
import './galery.scss';
import GalleryImage from './GalleryImage';
import PaginationContainer from '../../containers/PaginationContainer';
import LightBoxContainer from '../../containers/LightBoxContainer';

class Gallery extends React.Component {
  componentDidMount() {
    const { fetchImages } = this.props;
    fetchImages();
  }

  render() {
    const {
      imagesCollection: { results },
      setLightboxImage,
      lightboxImage
    } = this.props;
    return (
      <>
        <div className="gallery">
          {results &&
            results.map(img => (
              <GalleryImage setLightboxImage={setLightboxImage} key={img.id} img={img} />
            ))}
        </div>
        {results && <PaginationContainer />}
        {lightboxImage && <LightBoxContainer />}
      </>
    );
  }
}

Gallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  setLightboxImage: PropTypes.func.isRequired,
  lightboxImage: PropTypes.string.isRequired,
  imagesCollection: PropTypes.shape({
    total: PropTypes.number.isRequired,
    total_pages: PropTypes.number.isRequired,
    results: PropTypes.shape([]).isRequired
  }).isRequired
};

export default Gallery;
