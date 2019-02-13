import React from 'react';
import PropTypes from 'prop-types';
import './lightbox.scss';

class LightBox extends React.Component {
  state = {
    image: {}
  };

  handleCLick = () => {
    const { setLightboxImage } = this.props;
    setLightboxImage('');
  };

  componentDidMount = () => {
    const { imagesCollection, lightboxImage } = this.props;
    const image = imagesCollection.results
      ? imagesCollection.results.find(img => img.id === lightboxImage)
      : null;
    this.setState({
      image
    });
  };

  render() {
    const { image } = this.state;
    return (
      <>
        {image.urls && (
          <div className="lightbox">
            <div className="lightbox__image">
              <button type="button" className="lightbox__button" onClick={this.handleCLick}>
                X
              </button>
              <img src={image.urls.regular} alt={image.urls.regular} />
              <div className="lightbox__image--body">
                <ul className="lightbox__download-list">
                  <li className="lightbox__download-list--item">Download sizes: </li>
                  <li className="lightbox__download-list--item">
                    <a rel="noopener noreferrer" target="_blank" href={image.urls.raw}>
                      Raw
                    </a>
                  </li>
                  <li className="lightbox__download-list--item">
                    <a rel="noopener noreferrer" target="_blank" href={image.urls.full}>
                      Full
                    </a>
                  </li>
                  <li className="lightbox__download-list--item">
                    <a rel="noopener noreferrer" target="_blank" href={image.urls.regular}>
                      Regular
                    </a>
                  </li>
                  <li className="lightbox__download-list--item">
                    <a rel="noopener noreferrer" target="_blank" href={image.urls.small}>
                      Small
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

LightBox.propTypes = {
  lightboxImage: PropTypes.string.isRequired,
  setLightboxImage: PropTypes.func.isRequired,
  imagesCollection: PropTypes.shape({
    total: PropTypes.number.isRequired,
    total_pages: PropTypes.number.isRequired,
    results: PropTypes.shape([]).isRequired
  }).isRequired
};

export default LightBox;
