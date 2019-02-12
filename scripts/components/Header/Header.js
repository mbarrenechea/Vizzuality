import React from 'react';
import './header.scss';
import SortByContainer from '../../containers/SortByContainer';
// import PropTypes from 'prop-types';

const Header = () => (
  <div className="header">
    <div className="logo" />
    <SortByContainer />
  </div>
);

// Pagination.propTypes = {
//   setCurrentPage: PropTypes.func.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   total_pages: PropTypes.number.isRequired
// };

export default Header;
