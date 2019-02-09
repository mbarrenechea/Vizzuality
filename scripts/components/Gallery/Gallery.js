import React from 'react';
import PropTypes from 'prop-types';
// import fetchImages from '../../services/imagesService';

class Gallery extends React.Component {
  componentDidMount() {
    const { fetchImages } = this.props;
    fetchImages();
  }

  render() {
    const { imagesCollection } = this.props;
    return (
      <div>
        <div>
          {imagesCollection.length > 0 &&
            imagesCollection.map(img => (
              <img key={img.id} alt={img.description} src={img.urls.small} />
            ))}
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  imagesCollection: PropTypes.arrayOf(PropTypes.shape([])).isRequired
};

export default Gallery;
