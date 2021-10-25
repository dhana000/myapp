import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "./authActionTypes";

const requestLogin = () => {
  return {
    type: REQUEST_LOGIN,
  };
};

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error,
  };
};

export default function login(email, password) {
  return (dispatch) => {
    dispatch(requestLogin());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        let error = error.message;
        dispatch(loginError(error));
      });
  };
}
