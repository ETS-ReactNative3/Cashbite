import Router, { withRouter } from "next/router";
import { connect } from "react-redux";
import StorePage from "../components/storepage";
import _ from "lodash";
import { openAuthModal } from "../actions/syncActions";

const mapStateToProps = state => {
  return {
    storeData: state.store.storeData,
    storeCategoryData: state.store.storeCategoryData,
    storeName: state.store.storeName,
    userData: state.auth.userData,
    isAuthenticated: state.auth.isAuthenticated,
    storeUrl: state.store.storeUrl,
    popularStores: state.store.popularStores,
    similarStores: state.store.similarStores,
    cbRates: state.store.cbRates,
    offersData: state.homepage.offersData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openAuthModal: (mode) => dispatch(openAuthModal(mode)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StorePage));
