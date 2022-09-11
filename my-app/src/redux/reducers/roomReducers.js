import {
  ROOM_CREATE_REQUEST,
  ROOM_CREATE_SUCCESS,
  ROOM_CREATE_FAIL,
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_DELETE_REQUEST,
  ROOM_DELETE_SUCCESS,
  ROOM_DELETE_FAIL,
} from "../constants/roomConstants.js";

export const roomCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOM_CREATE_REQUEST:
      return { loading: true };
    case ROOM_CREATE_SUCCESS:
      return { loading: false, roomCreate: action.payload, success: true };
    case ROOM_CREATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const roomListReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOM_LIST_REQUEST:
      return { loading: true };
    case ROOM_LIST_SUCCESS:
      return { loading: false, rooms: action.payload };
    case ROOM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const deleteRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOM_DELETE_REQUEST:
      return { loading: true };
    case ROOM_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ROOM_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
