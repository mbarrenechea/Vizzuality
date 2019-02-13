import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LightBox from '../components/LightBox/LightBox';
import setLightboxImage from '../actions/LightBox';

const mapStateToProps = ({ imagesCollection, lightboxImage }) => ({
  imagesCollection,
  lightboxImage
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLightboxImage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LightBox);
