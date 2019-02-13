import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { imagesCollection as setSortedImages } from '../actions/imagesCollection';
import setSortingOrder from '../actions/sortingOrder';
import SortingOrder from '../components/SortingOrder/SortingOrder';

const mapStateToProps = ({ imagesCollection, sortingOrder }) => ({
  imagesCollection,
  sortingOrder
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSortedImages,
      setSortingOrder
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingOrder);
