import Router, { withRouter } from "next/router";
import { connect } from "react-redux";
import AllStorePage from "../components/allStorePage";
import _ from "lodash";
import { getStoresByCat, getStoresByCatFilter, getCategoryName } from "../actions/asyncActions";

const mapStateToProps = state => {
  return {
    storesData: state.homepage.storesData,
    categoryName: state.store.categoryName,
    // storeByCategory: state.store.storeByCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoryName: () => dispatch(getCategoryName()),
    getStoresByCat: (cat) => dispatch(getStoresByCat(cat)),
    getStoresByCatFilter: (cat) => dispatch(getStoresByCatFilter(cat)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AllStorePage));
