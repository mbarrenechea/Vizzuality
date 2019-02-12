import React from 'react';
import GalleryContainer from '../containers/GalleryContainer';
import LoadingSpinnerContainer from '../containers/LoadingSpinnerContainer';
import Header from './Header/Header';

const App = () => (
  <main className="content">
    <div className="wrapper">
      <Header />
      <LoadingSpinnerContainer />
      <GalleryContainer />
    </div>
  </main>
);

export default App;
