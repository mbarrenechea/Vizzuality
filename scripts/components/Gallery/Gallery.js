import React from 'react';
import PropTypes from 'prop-types';
import './galery.scss';

class Gallery extends React.Component {
  componentDidMount() {
    const { fetchImages } = this.props;
    fetchImages();
  }

  render() {
    const { imagesCollection } = this.props;
    return (
      <div className="gallery">
        {imagesCollection.length > 0 &&
          imagesCollection.map(img => (
            <div className="card" key={img.id}>
              <div className="card__image">
                <img className="card__image--img" src={img.urls.small} alt={img.description} />
              </div>
              <div className="card__body">
                <div className="card__body--title">{img.description}</div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

Gallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  imagesCollection: PropTypes.arrayOf(PropTypes.shape([])).isRequired
};

export default Gallery;
