import React from 'react';
import './sorting-order.scss';
import PropTypes from 'prop-types';

class SortingOrder extends React.Component {
  sortImages = (order, images) =>
    images.sort((a, b) => {
      let c = a.description;
      let d = b.description;
      let result;
      if (c === null) c = 'zzz';
      if (d === null) d = 'zzz';
      if (order === 'asc') {
        result = c.localeCompare(d);
      } else {
        result = d.localeCompare(c);
      }
      return result;
    });

  handleSort = order => {
    const { imagesCollection, setSortedImages, setSortingOrder } = this.props;
    const images = { ...imagesCollection };
    if (order === 'desc') {
      this.sortImages('desc', images.results);
      setSortingOrder('asc');
    }
    if (order === 'asc' || order === null) {
      this.sortImages('asc', images.results);
      setSortingOrder('desc');
    }
    setSortedImages(images);
  };

  render() {
    const { sortingOrder } = this.props;
    return (
      <button type="button" className="sorting" onClick={() => this.handleSort(sortingOrder)}>
        Sort by Title
        <span className={`sorting__icon sorting__icon--${sortingOrder} `}>&#8595;</span>
      </button>
    );
  }
}

SortingOrder.propTypes = {
  setSortedImages: PropTypes.func.isRequired,
  setSortingOrder: PropTypes.func.isRequired,
  imagesCollection: PropTypes.shape({}).isRequired,
  sortingOrder: PropTypes.string.isRequired
};

export default SortingOrder;
