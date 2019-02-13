import { combineReducers } from 'redux';
import imagesCollection from './imagesCollection';
import loading from './loading';
import currentPage from './setCurrentPage';
import sortingOrder from './SortingOrder';

export default combineReducers({
  imagesCollection,
  loading,
  currentPage,
  sortingOrder
});
