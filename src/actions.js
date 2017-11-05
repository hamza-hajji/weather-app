export function getData() {
  return {
    type: LOADING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: LOADING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: LOADING_DATA_FAILURE
  }
}

export function loadData() {
  return (dispatch) => {
    
  };
}
