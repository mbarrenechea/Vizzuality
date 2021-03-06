import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchImages from '../actions/imagesCollection';
import Gallery from '../components/Gallery/Gallery';
import setLightboxImage from '../actions/LightBox';

const mapStateToProps = ({ imagesCollection, lightboxImage }) => ({
  imagesCollection,
  lightboxImage
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchImages,
      setLightboxImage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
