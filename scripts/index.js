import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import configureStore from './store';
import App from './components/app';
import './styles/index.scss';

const HotRootComponent = hot(module)(App);

ReactDOM.render(
  <Provider store={configureStore()}>
    <HotRootComponent />
  </Provider>,
  document.getElementById('root')
);
