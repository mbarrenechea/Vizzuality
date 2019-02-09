import { connect } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const mapStateToProps = ({ loading }) => ({
  loading
});

export default connect(
  mapStateToProps,
  null
)(LoadingSpinner);
