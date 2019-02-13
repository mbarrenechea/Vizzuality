import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from '../components/Pagination/Pagination';
import setCurrentPage from '../actions/setCurrentPage';
import fetchImages from '../actions/imagesCollection';
// eslint-disable-next-line
const mapStateToProps = ({ currentPage, imagesCollection: { total_pages } }) => ({
  currentPage,
  total_pages
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrentPage,
      fetchImages
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
