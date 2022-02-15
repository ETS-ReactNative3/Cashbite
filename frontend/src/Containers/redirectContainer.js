import { withRouter } from "next/router";
import { connect } from "react-redux";
import Redirect from "../components/redirect";
import {} from "../actions/asyncActions";
import _ from "lodash";

const mapStateToProps = state => {
  return {
    storeUrl: state.store.storeUrl,
    storeName: state.store.storeName,
    storeImage:state.store.storeImage
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Redirect))