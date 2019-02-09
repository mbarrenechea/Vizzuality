import React from 'react';
import GalleryContainer from '../containers/GalleryContainer';
import LoadingSpinnerContainer from '../containers/LoadingSpinnerContainer';

const App = () => (
  <main className="content">
    <div className="wrapper">
      <div className="logo" />
      <GalleryContainer />
      <LoadingSpinnerContainer />
    </div>
  </main>
);

export default App;
