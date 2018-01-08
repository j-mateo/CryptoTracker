import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DATA_SUCCESS
} from '../utils/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return {
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      };
    case FETCHING_COIN_DATA_SUCCESS:
      return {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      };
    case FETCHING_COIN_DATA_FAIL:
      return {
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.err
      };
    default:
      return state;
  }
}
