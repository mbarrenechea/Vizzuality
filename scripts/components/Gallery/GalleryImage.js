import React from 'react';
import PropTypes from 'prop-types';

class GalleryImage extends React.Component {
  handleClick = event => {
    const { setLightboxImage } = this.props;
    setLightboxImage(event.target.dataset.img);
  };

  render() {
    const { img } = this.props;
    return (
      <div className="card">
        <button
          type="button"
          className="card__button"
          data-img={img.id}
          onClick={event => this.handleClick(event)}
        >
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
        </button>
      </div>
    );
  }
}

GalleryImage.propTypes = {
  img: PropTypes.shape({}).isRequired,
  setLightboxImage: PropTypes.func.isRequired
};

export default GalleryImage;
