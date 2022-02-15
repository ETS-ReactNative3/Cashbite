import { connect } from "react-redux";
import PrivacyPolicy from "../components/privacy_policy";
import Router, { withRouter } from "next/router";
import { } from "../actions/asyncActions";

const mapStateToProps = state => {
    return {
        // storeData: state.store.storeData,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(PrivacyPolicy));
