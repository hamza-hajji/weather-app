const initialState = {
  data: [],
  isLoading: false,
  success: false,
  failure: false
}

export const LOADING_DATA = 'LOADING_DATA';
export const LOADING_DATA_SUCCESS = 'LOADING_DATA_SUCCESS';
export const LOADING_DATA_FAILURE = 'LOADING_DATA_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        data: [],
        isLoading: true
      }
    case LOADING_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    case LOADING_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state
  }
}
