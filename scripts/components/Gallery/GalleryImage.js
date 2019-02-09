import React from 'react';
import PropTypes from 'prop-types';

const GalleryImage = ({ img }) => (
  <div className="card" key={img.id}>
    <div className="card__image">
      <img className="card__image--img" src={img.urls.small} alt={img.description} />
    </div>
    <div className="card__body">
      <div className="card__body--title">{img.description}</div>
    </div>
  </div>
);

GalleryImage.propTypes = {
  img: PropTypes.shape({}).isRequired
};

export default GalleryImage;
