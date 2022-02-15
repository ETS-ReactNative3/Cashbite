import Router, { withRouter } from "next/router";
import { connect } from "react-redux";
import AccountPage from "../components/accountpage";
import _, { startCase } from "lodash";
import {
  getProfile,
  logout,
  insertUserExtra,
  addUserPaymentInfo, removeUserPaymentInfo, updateUserName, getRedemptionHistory,getClicksByDate,getRedemptionBalance,redeemRequest,
  claimCashback, getAffClicksData, getUserPaymentInfo, getCashbackClaims, updateUserExtra
} from "../actions/asyncActions";
import { openAuthModal } from "../actions/syncActions";

const mapStateToProps = state => {
  return {
    userData: state.auth.userData,
    isAuthenticated: state.auth.isAuthenticated,
    walletData: state.account.walletData,
    activityData: state.account.activityData,
    clicksData: state.account.clicksData,
    paymentMethods: state.account.paymentMethods,
    userPayData: state.account.userPayData,
    redeemWallet: state.account.redeemWallet,
    affClicksData: state.account.affClicksData,
    affClicksAsStores: state.account.affClicksAsStores,
    cashbackClaimsData: state.account.cashbackClaimsData,
    redeemHistory: state.account.redeemHistory,
    

    redeemBalance:state.account.redeemBalance
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(getProfile()),
    openAuthModal: (mode) => dispatch(openAuthModal(mode)),
    insertUserExtra: (data, cbFunc) => dispatch(insertUserExtra(data, cbFunc)),
    updateUserExtra: (data, cbFunc) => dispatch(updateUserExtra(data, cbFunc)),
    updateUserName: (data) => dispatch(updateUserName(data)),
    logout: () => dispatch(logout()),
    addUserPaymentInfo: (data, cbFunc) => dispatch(addUserPaymentInfo(data, cbFunc)),
    removeUserPaymentInfo: (data) => dispatch(removeUserPaymentInfo(data)),
    claimCashback: (data, cbFunc) => dispatch(claimCashback(data, cbFunc)),
    getAffClicksData: (data) => dispatch(getAffClicksData(data)),
    getUserPaymentInfo: (data) => dispatch(getUserPaymentInfo(data)),
    getCashbackClaims: (data) => dispatch(getCashbackClaims(data)),
    getRedemptionHistory: (data) => dispatch(getRedemptionHistory(data)),
    getClicksByDate:(data)=>dispatch(getClicksByDate(data)),

    getRedemptionBalance:(data) => dispatch(getRedemptionBalance(data)),
    redeemRequest:(data)=>dispatch(redeemRequest(data))
  };
}; 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AccountPage));
