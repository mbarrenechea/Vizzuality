import React from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

class Pagination extends React.Component {
  state = {
    currentPagesRange: [1, 2, 3, 4, 5]
  };

  setPaginationRange = (from, to) => {
    let i = from;
    const range = [];
    while (i <= to) {
      range.push(i);
      i += 1;
    }
    return range;
  };

  handlePagination = page => () => {
    const { setCurrentPage, currentPage, total_pages, fetchImages, setSortingOrder } = this.props; //eslint-disable-line
    const { currentPagesRange } = this.state;
    let nextPage = page;

    if (nextPage === 'prevPage') {
      nextPage = currentPage - 1;
      if (nextPage === currentPagesRange[0] - 1 && nextPage > 1) {
        this.setState(prevState => ({
          currentPagesRange: this.setPaginationRange(
            prevState.currentPagesRange[0] - 5,
            prevState.currentPagesRange[0] - 1
          )
        }));
      }
    } else if (nextPage === 'nextPage') {
      nextPage = currentPage + 1;
      if (nextPage === currentPagesRange[4] + 1) {
        this.setState(prevState => ({
          currentPagesRange: this.setPaginationRange(nextPage, prevState.currentPagesRange[4] + 5)
        }));
      }
    }
    // eslint-disable-next-line
    if (nextPage >= 1 && nextPage < total_pages) {
      setCurrentPage(nextPage);
      fetchImages(nextPage);
      setSortingOrder(null);
    }
  };

  render() {
    const { currentPagesRange } = this.state;
    const { currentPage } = this.props;
    return (
      <div className="pagination">
        <button
          type="button"
          className="pagination__prev-page"
          onClick={this.handlePagination('prevPage')}
        />
        <ul className="pagination__list">
          {currentPagesRange.map(page => (
            <li className="pagination__list--item" key={page}>
              <button
                type="button"
                onClick={this.handlePagination(page)}
                className={
                  currentPage === page
                    ? 'active pagination__list--item-button'
                    : 'pagination__list--item-button'
                }
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="pagination__next-page"
          onClick={this.handlePagination('nextPage')}
        />
      </div>
    );
  }
}

Pagination.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired
};

export default Pagination;
