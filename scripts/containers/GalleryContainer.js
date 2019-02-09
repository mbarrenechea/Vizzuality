import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import imageCollection from '../actions/imagesCollection';
import Gallery from '../components/Gallery/Gallery';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      imageCollection
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Gallery);
