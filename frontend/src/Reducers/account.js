import _ from 'lodash';
import ActionTypes from '../constants/constant/ActionTypes';
import initialState from '../Store/initialState';

export default (state = initialState.homepage, action) => {
  switch (action.type) {
    case ActionTypes.GOT_WALLET:
      return {
        ...state,
        walletData: action.payload.wallet,
        redeemWallet: action.payload.redeemWallet,
      };
    case ActionTypes.GOT_USER_ACTIVITY:
      return {
        ...state,
        clicksData: action.payload.clickHistory,
        activityData: action.payload.cashbacks,
      };
    case ActionTypes.GOT_PAYMENT_METHODS:
      return {
        ...state,
        paymentMethods: action.payload,
      };
    case ActionTypes.GOT_USER_PAY_INFO:
      return {
        ...state,
        userPayData: action.payload,
      };
    case ActionTypes.GOT_REDEMPTION_BALANCE:
      return {
        ...state,
        redeemBalance: action.payload[0],
      };
    case ActionTypes.GOT_REDEMPTION_HISTORY:
      return {
        ...state,
        redeemHistory: action.payload,
      };
    case ActionTypes.GOT_AFF_CLICKS_DATA:
      return {
        ...state,
        affClicksData: action.payload.aff_clicksData,
        affClicksAsStores: action.payload.store_nameData,
      };
    case ActionTypes.GOT_CASHBACK_CLAIMS_DATA:
      return {
        ...state,
        cashbackClaimsData: action.payload,
      };

    default:
      return state;
  }
};
