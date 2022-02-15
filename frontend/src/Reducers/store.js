import _ from 'lodash';
import ActionTypes from '../constants/constant/ActionTypes';
import initialState from '../store/initialState';

export default (state = initialState.store, action) => {
  switch (action.type) {
    case ActionTypes.GOT_STORE_DESC:
      return {
        ...state,
        storeData: action.payload.data[0],
        storeName: action.query,
      };
    case ActionTypes.GOT_STORE_URL:
      return {
        ...state,
        storeName: action.payload.store_name,
        storeUrl: action.payload.aff_url,
        storeImage: action.payload.img_url,
      };
    case ActionTypes.GOT_TASK_URL:
      return {
        ...state,
        storeName: action.payload.store_name,
        storeUrl: action.payload.aff_url,
        storeImage: action.payload.img_url,
      };
    case ActionTypes.GOT_SIMILAR:
      return {
        ...state,
        popularStores: action.payload.popular,
        similarStores: action.payload.similar,
      };
    case ActionTypes.GOT_CB_RATES:
      return {
        ...state,
        cbRates: action.payload,
      };
    case ActionTypes.GOT_CATEGORY_NAME:
      return {
        ...state,
        categoryName: action.payload,
      };

    default:
      return state;
  }
};
