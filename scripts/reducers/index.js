import { combineReducers } from 'redux';
import imagesCollection from './imagesCollection';
import loading from './loading';

export default combineReducers({
  imagesCollection,
  loading
});
