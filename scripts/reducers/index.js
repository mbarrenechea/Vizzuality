import { combineReducers } from 'redux';
import imagesCollection from './imagesCollection';
import loading from './loading';
import currentPage from './setCurrentPage';
import sortingOrder from './SortingOrder';
import lightboxImage from './lightBox';

export default combineReducers({
  imagesCollection,
  loading,
  currentPage,
  sortingOrder,
  lightboxImage
});
