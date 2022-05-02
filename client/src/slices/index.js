import { combineReducers } from "redux";

import authReducer from "slices/auth";
import messageReducer from "slices/message";

const rootReducer = combineReducers({
  authState: authReducer,
  messageState: messageReducer,
});

export default rootReducer;
