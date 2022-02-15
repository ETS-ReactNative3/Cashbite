import { connect } from "react-redux";
import ContactPage from "../components/contactpage";
import Router, { withRouter } from "next/router";
import { contactUs } from "../actions/asyncActions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    contactUs: (data,cbFunc) => dispatch(contactUs(data,cbFunc))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactPage));
