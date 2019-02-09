import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchImages from '../actions/imagesCollection';
import Gallery from '../components/Gallery/Gallery';

const mapStateToProps = ({ imagesCollection }) => ({
  imagesCollection
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchImages
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
