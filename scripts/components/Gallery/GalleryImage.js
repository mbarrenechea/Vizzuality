import React from 'react';
import PropTypes from 'prop-types';

const GalleryImage = ({ img }) => (
  <div className="card">
    <a rel="noopener noreferrer" target="_blank" href={img.urls.full}>
      <div className="card__image">
        <picture>
          <source media="(min-width: 830px)" srcSet={img.urls.regular} />
          <source media="(min-width: 640px)" srcSet={img.urls.small} />
          <source media="(min-width: 400px)" srcSet={img.urls.regular} />
          <img className="card__image--img" src={img.urls.small} alt={img.description} />
        </picture>
      </div>
      <div className="card__body">
        <div className="card__body--title">
          {img.description ? img.description : 'No description.'}
        </div>
      </div>
    </a>
  </div>
);

GalleryImage.propTypes = {
  img: PropTypes.shape({}).isRequired
};

export default GalleryImage;
