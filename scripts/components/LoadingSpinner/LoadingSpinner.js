import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ loading }) => (loading ? <div className="loading" /> : null);

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default LoadingSpinner;
