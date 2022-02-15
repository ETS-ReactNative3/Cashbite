import * as syncActions from './syncActions';
import {makeRequest, makeAsyncRequest} from '../constants/constant/Request';
import AppConstants from '../constants/constant/AppConstants';
import {Alert} from 'react-native';

// import { useAuth } from "../providers/Auth";
// import dynamic from 'next/dynamic'

export const sendMobileOtp = (data, cbFunc) => dispatch => {
  makeAsyncRequest(
    'post',
    `${AppConstants.baseURL}/user/auth/sendmobotp`,
    data,
  ).then(resp => {
    if (resp.data.code == 200) {
      Alert.alert(resp.data.msg, 5);
      cbFunc('mobotp');
    } else if (resp.data.code == 402) {
      Alert.alert(resp.data.msg, 5);
      cbFunc('exist');
    } else {
      // console.log(resp.data, "response")
      Alert.alert(resp.data.msg, 5);
      cbFunc('exist');
    }
    // document.cookie = "authtoken=" + resp.data.token;
  });
};

export const sendLoginOtp = (data, cbFunc) => dispatch => {
  makeAsyncRequest(
    'post',
    `${AppConstants.baseURL}/user/auth/sendloginotp`,
    data,
  ).then(resp => {
    if (resp.data.code == 200) {
      Alert.alert(resp.data.msg, 5);
      cbFunc('mobotp');
    } else if (resp.data.code == 402) {
      Alert.alert(resp.data.msg ? resp.data.msg : resp.data.failed, 5);
      cbFunc('newuser');
    } else {
      // console.log(resp.data, "response")
      Alert.alert(resp.data.msg ? resp.data.msg : resp.data.failed, 5);
      cbFunc('newuser');
    }
    // document.cookie = "authtoken=" + resp.data.token;
  });
};

export const verifyMobile = (data, cbFunc) => dispatch => {
  makeAsyncRequest(
    'post',
    `${AppConstants.baseURL}/user/auth/verifymobile`,
    data,
  ).then(resp => {
    if (resp.data.code == 200) {
      Alert.alert('Mobile Number Verified Successfully', 5);
      dispatch(syncActions.gotAuthUser(resp.data));
      cbFunc('success');
    } else if (resp.data.code == 402) {
      // console.log(resp.data, "response attempts")
      cbFunc(resp.data.attempts);
    } else {
      // console.log(resp.data, "response")
      Alert.alert(resp.data.msg, 5);
    }
    // document.cookie = "authtoken=" + resp.data.token;
  });
};

export const signUp = (data, cbFunc) => dispatch => {
  makeAsyncRequest(
    'post',
    `${AppConstants.baseURL}/user/auth/signup`,
    data,
  ).then(resp => {
    if (resp.data.code == 200) {
      Alert.alert(resp.data.msg, 5);
      cbFunc('signup');
    } else {
      console.log(resp.data, 'response');
      if (resp.data.msg) Alert.alert(resp.data.msg, 5);
      else Alert.alert('Email Already Exist! please Login to Continue', 5);
    }
    // document.cookie = "authtoken=" + resp.data.token;
  });
};
export const verifyEmail = (data, cbFunc) => dispatch => {
  makeAsyncRequest(
    'post',
    `${AppConstants.baseURL}/user/auth/verifyemail`,
    data,
  ).then(resp => {
    if (resp.data.code == 200) {
      Alert.alert('Email Verified Successfully', 5);
      cbFunc('success');
    } else if (resp.data.code == 402) {
      // console.log(resp.data, "response attempts")
      cbFunc(resp.data.attempts);
    } else {
      // console.log(resp.data, "response")
      Alert.alert(resp.data.msg, 5);
    }
    // document.cookie = "authtoken=" + resp.data.token;
  });
};

export const resendOtp = data => {
  makeAsyncRequest('post', `${AppConstants.baseURL}/user/auth/resendotp`, data)
    .then(resp => {
      Alert.alert('Otp Sent Successfully!', 5);
      // document.cookie = "authtoken=" + resp.data.token;
    })
    .catch(err => {
      // console.log(err)
    });
};

export const logIn = (data, cbFunc) => dispatch => {
  // const {setAuthenticated} = useAuth();
  makeAsyncRequest(
    'post',
    `${AppConstants.baseURL}/user/auth/login`,
    data,
  ).then(resp => {
    // console.log(resp.data)
    if (resp.data.code == 200) {
      // setAuthenticated(true)
      Alert.alert('Logged In Successfully', 5);
      dispatch(getProfile());
      cbFunc('login');
    } else {
      // console.log(resp.data, "response")
      Alert.alert('Email/Password MisMatch', 5);
    }
    // document.cookie = "authtoken=" + resp.data.token;
  });
};

export const googleLogin = () => dispatch => {
  makeRequest(
    'get',
    `${AppConstants.baseURL}/user/auth/google`,
    {},
    {'Access-Control-Allow-Origin': '*'},
  )
    .then(resp => {
      Alert.alert('Logging in...', 5);
      // document.cookie = "authtoken=" + resp.data.token;
    })
    .catch(err => {
      // console.log(err)
    });
};

export const getProfile = () => dispatch => {
  makeRequest('get', `${AppConstants.baseURL}/user/auth/profile`)
    .then(resp => {
      if (resp.data.code == 200) {
        // console.log(resp, 'profile response');
        dispatch(syncActions.gotProfile(resp.data.data));
        // Alert.alert("got user data")
      } else {
        Alert.alert('not get the user data');
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};

export const loginWithOtp = (data, cbFunc) => {
  makeAsyncRequest(
    'post',
    `${AppConstants.baseURL}/user/auth/otplogin`,
    data,
  ).then(resp => {
    // console.log(resp.data)
    if (resp.data.code == 200) {
      Alert.alert(resp.data.msg, 5);
      cbFunc('login');
    } else {
      // console.log(resp.data, "response")
      Alert.alert(resp.data.msg, 5);
    }
  });
};

export const verifySocialMobile = (data, cbFunc) => dispatch => {
  makeAsyncRequest(
    'post',
    `${AppConstants.baseURL}/user/auth/verifysocialmob`,
    data,
  ).then(resp => {
    if (resp.data.code == 200) {
      Alert.alert('Logged In Successfully', 5);
      cbFunc('success');
      dispatch(getProfile());
    } else if (resp.data.code == 402) {
      // console.log(resp.data, "response attempts")
      cbFunc(resp.data.attempts);
    } else {
      // console.log(resp.data, "response")
      Alert.alert(resp.data.msg, 5);
    }
    // document.cookie = "authtoken=" + resp.data.token;
  });
};

export const logout = () => dispatch =>
  makeAsyncRequest('post', `${AppConstants.baseURL}/user/auth/logout`).then(
    resp => {
      if (resp.data.code == 200) {
        Alert.alert('Logged out Successfully', 5);
        dispatch(syncActions.loggedOut());
      } else {
        // console.log(resp.data, "response")
        Alert.alert(resp.data.msg, 5);
      }
      // document.cookie = "authtoken=" + resp.data.token;
    },
  );

export const getAffUrl = data => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/new/aff/storeurl`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        // console.log(resp.data, "response")
        dispatch(syncActions.gotStoreUrl(resp.data.data));
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};

export const getTaskAffUrl = data => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/new/aff/taskurl`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        // console.log(resp.data, "response")
        dispatch(syncActions.gotTaskUrl(resp.data.data));
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};

export const getStoresByCat = cat => dispatch => {
  makeRequest('get', `${AppConstants.baseURL}/site/storename?cat=${cat}`)
    .then(resp => {
      if (resp.data.code == 200) {
        // console.log(resp.data, "response")
        dispatch(syncActions.gotStoreName(resp.data));
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};

export const getBannerAndOffer = type => dispatch => {
  makeRequest('get', `${AppConstants.baseURL}/site/getbanneroffer?type=${type}`)
    .then(resp => {
      if (resp.data.code == 200) {
        // console.log(resp.data, "response")
        dispatch(syncActions.gotBannerOffer(resp.data.data));
      } else {
        Alert.alert(resp.data.error);
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};

export const getStoresByCatFilter = data => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/site/getstoresbycat`, data)
    .then(resp => {
      // if (resp.data.code == 200) {
      console.log(resp.data.data, 'response cat hdskjhgjkldsh');
      dispatch(syncActions.gotStoreName(resp.data));
      // }
    })
    .catch(err => {
      console.log('request error', err);
    });
};

export const insertUserExtra = (data, cbFunc) => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/user/auth/insertuserextra`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        Alert.alert(resp.data.msg, 5);
        cbFunc();
      } else {
        Alert.alert(resp.data.msg, 5);
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};
export const updateUserExtra = (data, cbFunc) => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/user/auth/updateuserextra`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        Alert.alert(resp.data.msg, 5);
        cbFunc();
      } else {
        Alert.alert(resp.data.msg, 5);
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};
export const updateUserName = (data, cbFunc) => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/user/auth/updateusername`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        Alert.alert(resp.data.msg, 5);
      } else {
        Alert.alert(resp.data.msg, 5);
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};

export const contactUs = (data, cbFunc) => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/site/contactus`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        cbFunc();
        Alert.alert(
          'Thankyou For Your Response. We will look Forward into this.',
        );
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};

export const addUserPaymentInfo = (data, cbFunc) => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/user/auth/addpaydetails`, data)
    .then(resp => {
      // console.log("ghfHKGUYKFSJGFEWKGFJSAGJHGJHGSAJHGFJHFJ",resp.data.code == 200)
      if (resp.data.code == 200) {
        cbFunc();
        Alert.alert('Your Payment Info Added Successfully');
      } else {
        Alert.alert('Your payment details not added');
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};

export const removeUserPaymentInfo = (data, cbFunc) => dispatch => {
  makeRequest(
    'post',
    `${AppConstants.baseURL}/user/auth/removepaydetails`,
    data,
  )
    .then(resp => {
      // console.log("ghfHKGUYKFSJGFEWKGFJSAGJHGJHGSAJHGFJHFJ",resp.data.code == 200)
      if (resp.data.code == 200) {
        Alert.alert('Your Payment Info Removed Successfully');
      } else {
        Alert.alert('Your payment details not Removed');
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};

export const getUserPaymentInfo = data => dispatch => {
  makeRequest('get', `${AppConstants.baseURL}/user/auth/userpayinfo`, data)
    .then(resp => {
      // console.log("ghfHKGUYKFSJGFEWKGFJSAGJHGJHGSAJHGFJHFJ",resp.data.code == 200)
      if (resp.data.code == 200) {
        dispatch(syncActions.gotUserPayInfo(resp.data.data));
      } else {
        Alert.alert(resp.data.msg);
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};

export const getRedemptionBalance = data => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/user/auth/redeembalance`, data)
    .then(resp => {
      // console.log("ghfHKGUYKFSJGFEWKGFJSAGJHGJHGSAJHGFJHFJ",resp.data.code == 200)
      console.log(resp.data.data, 'redemption bal');
      if (resp.data.code == 200) {
        dispatch(syncActions.gotRedemptionBalance(resp.data.data));
      } else {
        Alert.alert(resp.data.msg);
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};
export const getRedemptionHistory = data => dispatch => {
  makeRequest('get', `${AppConstants.baseURL}/auth/getredemptionhistory`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        console.log(resp.data.data, 'redemption history');
        dispatch(syncActions.gotRedemptionHistory(resp.data.data));
      } else {
        Alert.alert(resp.data.msg);
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};
export const redeemRequest = (data, cbFunc) => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/user/auth/redeemrequest`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        cbFunc();
        Alert.alert(resp.data.msg);
      } else {
        Alert.alert(resp.data.msg);
      }
    })
    .catch(err => {
      // console.log("request error", err);
    });
};

export const claimCashback = (data, cbFunc) => dispatch => {
  makeRequest('post', `${AppConstants.baseURL}/user/auth/claimcashback`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        cbFunc();
        Alert.alert(resp.data.msg);
      } else {
        Alert.alert(resp.data.msg);
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};
export const getCategoryName = data => dispatch => {
  makeRequest('get', `${AppConstants.baseURL}/site/getcategory`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        // console.log(resp.data, "responseof category")
        dispatch(syncActions.gotCategoryName(resp.data.data));
      } else {
        Alert.alert(resp.data.error);
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};

export const getAffClicksData = data => dispatch => {
  // console.log(data)
  makeRequest('post', `${AppConstants.baseURL}/new/aff/getaffclicksdata`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        // console.log(resp.data, "response of affclciks")
        dispatch(syncActions.gotAffClicksData(resp.data.data));
        Alert.alert('get the data from aff clicks');
      } else {
        Alert.alert('You Have not visited on this date');
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};

//news data

export const getNews = data => dispatch => {
  makeRequest('get', `${AppConstants.baseURL}/site/getnews`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        console.log(resp.data.data, 'news data');
        dispatch(syncActions.gotNewsData(resp.data.data));
      } else {
        Alert.alert(resp.data.msg);
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};

//end of news dat

//start of testimonials data

export const getTestimonials = data => dispatch => {
  makeRequest('get', `${AppConstants.baseURL}/site/gettestimonials`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        console.log(resp.data.data, 'testimonials data');
        dispatch(syncActions.gotTestimonialsData(resp.data.data));
      } else {
        Alert.alert(resp.data.msg);
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};

export const getStoresAndTasks = data => dispatch => {
  makeRequest('get', `${AppConstants.baseURL}/site/storeandtask`, data)
    .then(resp => {
      if (resp.data.code == 200) {
        console.log(resp.data.data, 'store and task data...');
        dispatch(syncActions.gotStoreAndTaskData(resp.data.data));
      } else {
        Alert.alert(resp.data.msg);
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};

export const getCashbackClaims = data => dispatch => {
  console.log(data);
  makeRequest(
    'get',
    `${AppConstants.baseURL}/user/auth/getcashbackclaims`,
    data,
  )
    .then(resp => {
      if (resp.data.code == 200) {
        console.log(resp.data, 'response of getCashbackClaims');
        dispatch(syncActions.gotCashbackClaims(resp.data.data));
        Alert.alert('get the data from aff clicks');
      } else {
        Alert.alert('You Have not visited on this date');
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};

export const getClicksByDate = query => dispatch => {
  makeRequest('get', `${AppConstants.baseURL}/user/auth/useractivity?${query}`)
    .then(resp => {
      if (resp.data.code == 200) {
        console.log(resp.data, 'response of getCashbackClaims');
        dispatch(syncActions.gotUserActivity(resp.data));
        Alert.alert('get the data from aff clicks');
      } else {
        Alert.alert('You Have not visited on this date');
      }
    })
    .catch(err => {
      console.log('request error', err);
    });
};
