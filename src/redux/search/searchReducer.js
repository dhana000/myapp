import {
  ADD_FILTERS,
  SEARCH_REQUEST_FAILED,
  SEARCH_REQUEST_STARTED,
  SEARCH_REQUEST_SUCCESS,
} from "./searchTypes";

const initialState = {
  query: "",
  filter: {
    price: 100,
    date: null,
  },
  loading: false,
  results: [],
  error: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTERS:
      return {
        ...state,
        filter: {
          price: action.price,
          date: action.date,
        },
      };
    case SEARCH_REQUEST_STARTED:
      return {
        ...state,
        query: action.query,
        loading: true,
        error: "",
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: "",
        fiter: {
          price: "",
          date: "",
        },
      };
    case SEARCH_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
        fiter: {
          price: "",
          date: "",
        },
      };
    default:
      return state;
  }
};

export default searchReducer;
