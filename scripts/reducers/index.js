import { combineReducers } from 'redux';
import imagesCollection from './imagesCollection';
import loading from './loading';
import currentPage from './setCurrentPage';

export default combineReducers({
  imagesCollection,
  loading,
  currentPage
});
