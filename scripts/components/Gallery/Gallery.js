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
    const {
      imagesCollection: { results }
    } = this.props;
    return (
      <div className="gallery">
        {results && results.map(img => <GalleryImage key={img.id} img={img} />)}
      </div>
    );
  }
}

Gallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  imagesCollection: PropTypes.shape({}).isRequired
};

export default Gallery;
