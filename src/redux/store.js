import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./auth/authReducer";
import { localReducer } from "./Local/LocalReducers";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  local: localReducer,
  search: searchReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
