import {
  ADD_FILTERS,
  SEARCH_REQUEST_FAILED,
  SEARCH_REQUEST_STARTED,
  SEARCH_REQUEST_SUCCESS,
} from "./searchTypes";

export const addFilters = (price, date) => {
  return {
    type: ADD_FILTERS,
    price,
    date,
  };
};

const searchRequestStarted = (query) => {
  return {
    type: SEARCH_REQUEST_STARTED,
    query,
  };
};

const searchRequestSuccess = (result) => {
  return {
    type: SEARCH_REQUEST_SUCCESS,
    result,
  };
};

const searchRequestFailed = (error) => {
  return {
    type: SEARCH_REQUEST_FAILED,
    error,
  };
};

export const search = () => {};
