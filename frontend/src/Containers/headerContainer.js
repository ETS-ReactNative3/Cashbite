// import { connect } from "react-redux";
// import _ from "lodash";
// // import queryString from "query-string";
// import Router, { withRouter } from "next/router";
// // import { toastActionCreator } from "react-toastify-redux/lib/actions";
// import Header from "../components/header";
// // import {
// //   logout,
// //   filterResults,
// //   searchSuggestion
// // } from "../actions/asyncActions";
// // import {
// //   modalSideNav,
// //   modalAuth,
// //   modalDownloadApp,
// //   modalSuggestUs
// // } from "../actions/syncActions";
// import { getStoresAndTasks } from "../actions/asyncActions"

// class HeaderContainer extends React.Component {

//   render() {

//     return <Header {...this.props} />;
//   }
// }

// const mapStateToProps = state => {
//   return {
//     stores: state.homepage.stores,
//     tasks: state.homepage.tasks,
//     // auth: state.auth, search: state.search
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getStoresAndTasks: () => dispatch(getStoresAndTasks()),
//     // modalDownloadApp: () => dispatch(modalDownloadApp()),
//     // modalSuggestUs: () => dispatch(modalSuggestUs()),
//     // modalAuth: () => dispatch(modalAuth()),
//     // sideNav: () => dispatch(modalSideNav()),
//     // onLogout: () => dispatch(logout()),
//     // onSearch: term => {
//     //   const newQuery = { term, page: 1 };
//     //   const query = queryString.stringify(newQuery);
//     //   Router.push(`/search?${query}`);
//     //   return dispatch(filterResults(query));
//     // },
//     // searchSuggestion: term => dispatch(searchSuggestion(term)),

//     // showToast: data =>
//     //   dispatch(
//     //     toastActionCreator(data.type)(
//     //       data.message,
//     //       _.assign(
//     //         {
//     //           position: "bottom-center",
//     //           autoClose: 3000,
//     //           hideProgressBar: true,
//     //           closeOnClick: true,
//     //           pauseOnHover: true,
//     //           draggable: false
//     //         },
//     //         data.options || {}
//     //       )
//     //     )
//     //   )
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(HeaderContainer));


import Router, { withRouter } from "next/router";
import { connect } from "react-redux";
import Header from "../components/header";
import _, { startCase } from "lodash";
import {
  getStoresAndTasks
} from "../actions/asyncActions";

const mapStateToProps = state => {
  return {
    storeAndTask: state.homepage.storeAndTask,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStoresAndTasks: (data) => dispatch(getStoresAndTasks(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
