import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { imagesCollection as setSortedImages } from '../actions/imagesCollection';
import SortBy from '../components/SortBy/SortBy';

const mapStateToProps = ({ imagesCollection }) => ({
  imagesCollection
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSortedImages
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortBy);
