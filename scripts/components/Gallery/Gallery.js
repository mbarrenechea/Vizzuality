import React from 'react';
import PropTypes from 'prop-types';
import './galery.scss';
import GalleryImage from './GalleryImage';

class Gallery extends React.Component {
  componentDidMount() {
    const { fetchImages } = this.props;
    fetchImages();
  }

  render() {
    const { imagesCollection } = this.props;
    return (
      <div className="gallery">
        {imagesCollection.length > 0 && imagesCollection.map(img => <GalleryImage img={img} />)}
      </div>
    );
  }
}

Gallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  imagesCollection: PropTypes.arrayOf(PropTypes.shape([])).isRequired
};

export default Gallery;
