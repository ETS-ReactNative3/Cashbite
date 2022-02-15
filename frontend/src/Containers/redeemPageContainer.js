import { connect } from "react-redux";
import RedeemPage from "../components/redeem";
import Router, { withRouter } from "next/router";
import {getRedemptionBalance,redeemRequest,logout} from "../actions/asyncActions";
import {openAuthModal} from "../actions/syncActions";

const mapStateToProps = state => {
  return {
    userPayData:state.account.userPayData,
    userData: state.auth.userData,
    isAuthenticated: state.auth.isAuthenticated,
    walletData: state.account.walletData,
    redeemWallet: state.account.redeemWallet,
    redeemBalance:state.account.redeemBalance
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openAuthModal:(mode) => dispatch(openAuthModal(mode)),
    getRedemptionBalance:(data) => dispatch(getRedemptionBalance(data)),
    redeemRequest:(data)=>dispatch(redeemRequest(data)),
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RedeemPage));
