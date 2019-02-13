import React from 'react';
import './header.scss';
import SortingOrderContainer from '../../containers/SortingOrderContainer';

const Header = () => (
  <div className="header">
    <div className="logo" />
    <SortingOrderContainer />
  </div>
);

export default Header;
