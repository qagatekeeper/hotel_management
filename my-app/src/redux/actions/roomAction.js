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
import axios from "axios";

export const createRoom = (data) => async (dispatch, getState) => {
  const { addRoomType, bedType } = data;
  try {
    dispatch({ type: ROOM_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5500/api/rooms/addroom",
      { addRoomType, bedType },
      config
    );

    dispatch({ type: ROOM_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ROOM_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getRoomList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ROOM_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5500/api/rooms/`,
      config
    );
    dispatch({
      type: ROOM_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ROOM_LIST_FAIL,
      payload: message,
    });
  }
};

export const deleteRoom = (data) => async (dispatch, getState) => {
  const { deleteRoomId } = data;
  console.log(deleteRoomId);
  try {
    dispatch({
      type: ROOM_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `http://localhost:5500/api/rooms/${deleteRoomId}`,
      config
    );

    dispatch({
      type: ROOM_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ROOM_DELETE_FAIL,
      payload: message,
    });
  }
};
