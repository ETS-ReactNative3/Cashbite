import ActionTypes from '../constants/constant/ActionTypes';

export const gotStoreDescription = (data, query) => ({
  type: ActionTypes.GOT_STORE_DESC,
  payload: data,
  query,
});

export const gotStoreName = data => ({
  type: ActionTypes.GOT_STORE_NAME,
  payload: data,
});

export const gotAuthUser = data => ({
  type: ActionTypes.GOT_AUTH_USER,
  payload: data,
});

export const gotHeader = data => ({
  type: ActionTypes.GOT_HEADER,
  payload: data,
});
export const gotFooter = data => ({
  type: ActionTypes.GOT_FOOTER,
  payload: data,
});
export const gotProfile = data => ({
  type: ActionTypes.GOT_PROFILE,
  payload: data,
});

export const openMobModal = () => ({
  type: ActionTypes.OPEN_MOB_MODAL,
});

export const closeMobModal = () => ({
  type: ActionTypes.CLOSE_MOB_MODAL,
});

export const openAuthModal = mode => ({
  type: ActionTypes.OPEN_AUTH_MODAL,
  payload: mode,
});

export const closeAuthModal = () => ({
  type: ActionTypes.CLOSE_AUTH_MODAL,
});

export const loggedOut = () => ({
  type: ActionTypes.LOGOUT,
});

export const gotStoreUrl = data => ({
  type: ActionTypes.GOT_STORE_URL,
  payload: data,
});

export const gotTaskUrl = data => ({
  type: ActionTypes.GOT_STORE_URL,
  payload: data,
});

export const gotAllTask = data => ({
  type: ActionTypes.GOT_ALL_TASK,
  payload: data,
});

export const gotTaskDetails = data => ({
  type: ActionTypes.GOT_TASK_DETAILS,
  payload: data,
});

export const gotHeaderFooter = data => ({
  type: ActionTypes.GOT_HEAD_FOOT,
  payload: data,
});
export const gotBannerOffer = data => ({
  type: ActionTypes.GOT_BANNER_OFFER,
  payload: data,
});
// export const gotStoreByCategory = (data) => ({
//   type: ActionTypes.GOT_STORE_BY_CATEGORY,
//   payload: data
// })

export const gotWalletData = data => ({
  type: ActionTypes.GOT_WALLET,
  payload: data,
});

export const gotSimilarStores = data => ({
  type: ActionTypes.GOT_SIMILAR,
  payload: data,
});

export const gotUserActivity = data => ({
  type: ActionTypes.GOT_USER_ACTIVITY,
  payload: data,
});

export const gotPaymentMethods = data => ({
  type: ActionTypes.GOT_PAYMENT_METHODS,
  payload: data,
});

export const gotUserPayInfo = data => ({
  type: ActionTypes.GOT_USER_PAY_INFO,
  payload: data,
});

export const gotRedemptionBalance = data => ({
  type: ActionTypes.GOT_REDEMPTION_BALANCE,
  payload: data,
});

export const gotRedemptionHistory = data => ({
  type: ActionTypes.GOT_REDEMPTION_HISTORY,
  payload: data,
});

export const gotCbRates = data => ({
  type: ActionTypes.GOT_CB_RATES,
  payload: data,
});

export const gotCategoryName = data => ({
  type: ActionTypes.GOT_CATEGORY_NAME,
  payload: data,
});

export const gotAffClicksData = data => ({
  type: ActionTypes.GOT_AFF_CLICKS_DATA,
  payload: data,
});
export const gotCashbackClaims = data => ({
  type: ActionTypes.GOT_CASHBACK_CLAIMS_DATA,
  payload: data,
});

export const gotNewsData = data => ({
  type: ActionTypes.GOT_NEWS_DATA,
  payload: data,
});

export const gotTestimonialsData = data => ({
  type: ActionTypes.GOT_TESTIMONIALS_DATA,
  payload: data,
});

export const gotStoreAndTaskData = data => ({
  type: ActionTypes.GOT_STORE_TASK_DATA,
  payload: data,
});

// export const authLoginRefresh = () => {
//   return dispatch => {
//     const token = localStorage.getItem("token");
//     if (!token) dispatch(logoutUser());
//     else {
//       // const decode = jwt_decode(token);
//       // const time = decode.exp - new Date().getTime() / 1000;
//       // dispatch(checkAuthTimeout(time));
//       dispatch(gotUserDetails(token));
//     }
//   };
// };
