import _ from 'lodash';
import queryString from 'query-string';
import ActionTypes from '../constants/constant/ActionTypes';
import initialState from '../store/initialState';

export default (state = initialState.task, action) => {
  switch (action.type) {
    case ActionTypes.GOT_ALL_TASK:
      return {
        ...state,
        allTasks: action.payload.data,
      };
    case ActionTypes.GOT_TASK_DETAILS:
      return {
        ...state,
        taskData: action.payload.data[0],
      };
    default:
      return state;
  }
};
