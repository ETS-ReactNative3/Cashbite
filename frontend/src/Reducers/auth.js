import JwtDecode from 'jwt-decode';
import ActionTypes from '../constants/constant/ActionTypes';
import initialState from '../store/initialState';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    // case ActionTypes.LOGGED_IN:
    //   if (action.payload) {
    //     const data = JwtDecode(action.payload);
    //     return data;
    //   } else return {};

    // case ActionTypes.LOGGED_OUT:
    //   return {};
    // case ActionTypes.ERROR:
    //   return { ...state, error: action.payload };
    case ActionTypes.GOT_AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    case ActionTypes.GOT_PROFILE:
      return {
        ...state,
        userData: action.payload,
        isAuthenticated: true,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        userData: null,
        isAuthenticated: false,
      };
    case ActionTypes.OPEN_MOB_MODAL:
      return {
        isMobVisible: true,
      };
    case ActionTypes.CLOSE_MOB_MODAL:
      return {
        isMobVisible: false,
      };
    case ActionTypes.OPEN_AUTH_MODAL:
      return {
        isAuthVisible: true,
        authMode: action.payload,
      };
    case ActionTypes.CLOSE_AUTH_MODAL:
      return {
        isAuthVisible: false,
      };
    default:
      return state;
  }
};
