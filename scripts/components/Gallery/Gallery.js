import React from 'react';
import PropTypes from 'prop-types';
import './galery.scss';
import GalleryImage from './GalleryImage';
import PaginationContainer from '../../containers/PaginationContainer';

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
      <>
        <div className="gallery">
          {results && results.map(img => <GalleryImage key={img.id} img={img} />)}
        </div>
        {results && <PaginationContainer />}
      </>
    );
  }
}

Gallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  imagesCollection: PropTypes.shape({
    total: PropTypes.number.isRequired,
    total_pages: PropTypes.number.isRequired,
    results: PropTypes.shape([]).isRequired
  }).isRequired
};

export default Gallery;
