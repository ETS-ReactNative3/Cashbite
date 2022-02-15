import { connect } from "react-redux";
import FooterPage from "../components/footer";
// import {
//   getBrands,
//   getPopularBrands,
//   filterResults,
//   subscription
// } from "../actions/asyncActions";
// import queryString from "query-string";
// import Router, { withRouter } from "next/router";

const mapStateToProps = state => {
  return {
    // brands: state.brands,
    // popular: state.popular
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onSearch: term => {
    //   const newQuery = { term, page: 1 };
    //   const query = queryString.stringify(newQuery);
    //   Router.push(`/search?${query}`);
    //   return dispatch(filterResults(query));
    // },
    // getBrands: () => dispatch(getBrands()),
    // getPopularBrands: () => dispatch(getPopularBrands()),
    // subscription: email => dispatch(subscription(email))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterPage);
