import {
  LOADING_DATA,
  LOADING_DATA_SUCCESS,
  LOADING_DATA_FAILURE
} from '../constants';

const initialState = {
  data: [],
  isLoading: false,
  success: false,
  failure: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        data: [],
        isLoading: true
      };
    case LOADING_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        data: action.data
      };
    case LOADING_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: true
      };
    default:
      return state;
  }
};
