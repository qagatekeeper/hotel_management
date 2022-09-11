import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  reservationCreatReducer,
  reservationsListReducer,
  reservationDetailsReducer,
} from "./reducers/reservationReducers.js";
import {
  userLoginReducer,
  userCreateReducer,
  userListReducer,
  deleteUserReducer,
  updateUserReducer,
} from "./reducers/userReducers.js";
import {
  roomCreateReducer,
  roomListReducer,
  deleteRoomReducer,
} from "./reducers/roomReducers.js";

const reducer = combineReducers({
  reservationCreate: reservationCreatReducer,
  reservationsList: reservationsListReducer,
  reservationDetails: reservationDetailsReducer,
  userLogin: userLoginReducer,
  userCreate: userCreateReducer,
  usersList: userListReducer,
  userDelete: deleteUserReducer,
  userUpdate: updateUserReducer,
  roomCreate: roomCreateReducer,
  roomsList: roomListReducer,
  roomDelete: deleteRoomReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
