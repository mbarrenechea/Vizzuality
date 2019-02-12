import React from 'react';
import './sort-by.scss';
import PropTypes from 'prop-types';

class SortBy extends React.Component {
  //eslint-disable-line
  state = {
    sortOrder: 'desc'
  };

  handleSort = order => {
    const { imagesCollection, setSortedImages } = this.props;
    const images = { ...imagesCollection };
    let sorted = null;
    if (order === 'desc') {
      sorted =
        images.results && images.results.sort((a, b) => a.description.localeCompare(b.description));
      this.setState({
        sortOrder: 'asc'
      });
    }
    if (order === 'asc') {
      sorted =
        images.results && images.results.sort((a, b) => b.description.localeCompare(a.description));
      this.setState({
        sortOrder: 'desc'
      });
    }
    console.log(sorted);
    setSortedImages(images);
  };

  render() {
    const { sortOrder } = this.state;
    console.log('sortOrder', sortOrder);
    return (
      <button type="button" className="sortby" onClick={() => this.handleSort(sortOrder)}>
        Sort by Title
        <span className={`sortby__icon sortby__icon--${sortOrder} `}>&#8595;</span>
      </button>
    );
  }
}

SortBy.propTypes = {
  setSortedImages: PropTypes.func.isRequired,
  imagesCollection: PropTypes.shape({}).isRequired
};

export default SortBy;
