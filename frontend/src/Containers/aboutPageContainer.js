import { connect } from "react-redux";
import AboutPage from "../components/aboutpage";
import Router, { withRouter } from "next/router";
import {} from "../actions/asyncActions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AboutPage));