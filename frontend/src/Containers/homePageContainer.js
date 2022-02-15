import Router, { withRouter } from "next/router";
import { connect } from "react-redux";
import {
  signUp,
  verifyEmail,
  logIn,
  sendMobileOtp,
  sendLoginOtp,
  verifyMobile,
  googleLogin,
  getProfile,
  loginWithOtp,
  verifySocialMobile, getTestimonials,
  getStoresByCat,
  getStoresByCatFilter, getNews,
  getBannerAndOffer
} from "../actions/asyncActions";
import { closeMobModal, openAuthModal, closeAuthModal } from "../actions/syncActions";
import Homepage from "../components/homepage";
import _ from "lodash";

const mapStateToProps = state => {
  return {
    storesData: state.homepage.storesData,
    userData: state.auth.userData,
    isAuthenticated: state.auth.isAuthenticated,
    isMobVisible: state.auth.isMobVisible,
    isAuthVisible: state.auth.isAuthVisible,
    allTasks: state.task.allTasks,
    bannersData: state.homepage.bannersData,
    offersData: state.homepage.offersData,
    newsData: state.homepage.newsData,
    testimonialsData: state.homepage.testimonialsData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(getProfile()),
    closeMobModal: () => dispatch(closeMobModal()),
    openAuthModal: (mode) => dispatch(openAuthModal(mode)),
    closeAuthModal: () => dispatch(closeAuthModal()),
    getStoresByCat: (cat) => dispatch(getStoresByCat(cat)),
    getBannerAndOffer: (type) => dispatch(getBannerAndOffer(type)),
    getNews: (data) => dispatch(getNews(data)),
    getTestimonials: (data) => dispatch(getTestimonials(data)),
    // getStoresByCatFilter: (cat) => dispatch(getStoresByCatFilter(cat)),
    // getStoresByCatFilter: () => dispatch(getStoresByCatFilter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Homepage));
