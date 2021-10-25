import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "./authActionTypes";

const initialState = {
  loading: false,
  user: "",
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.user,
        error: "",
      };
    case LOGIN_ERROR:
      return {
        loading: false,
        user: "",
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
