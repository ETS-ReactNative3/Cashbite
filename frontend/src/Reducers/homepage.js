import _ from 'lodash';
import queryString from 'query-string';
import ActionTypes from '../constants/constant/ActionTypes';
import initialState from '../store/initialState';

export default (state = initialState.homepage, action) => {
  switch (action.type) {
    case ActionTypes.GOT_HOMEPAGE:
      return {
        ...state,
        ...action.payload.Data,
      };

    case ActionTypes.GOT_STORE_NAME:
      return {
        ...state,
        storesData: action.payload.data,
        // taskdata: action.payload.data,
      };
    case ActionTypes.GOT_STORE_TASK_DATA:
      return {
        ...state,
        storeAndTask: action.payload,
      };

    case ActionTypes.GOT_HEAD_FOOT:
      return {
        ...state,
        headFootData: action.payload,
      };
    case ActionTypes.GOT_BANNER_OFFER:
      return {
        ...state,
        bannersData: action.payload.banners,
        offersData: action.payload.offers,
      };
    case ActionTypes.GOT_NEWS_DATA:
      return {
        ...state,
        newsData: action.payload,
      };
    case ActionTypes.GOT_TESTIMONIALS_DATA:
      return {
        ...state,
        testimonialsData: action.payload,
      };
    default:
      return state;
  }
};
