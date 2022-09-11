import {
  RESERVATION_CREATE_REQUEST,
  RESERVATION_CREATE_SUCCESS,
  RESERVATION_CREATE_FAIL,
  RESERVATION_LIST_REQUEST,
  RESERVATION_LIST_SUCCESS,
  RESERVATION_LIST_FAIL,
  RESERVATION_SINGLE_DETAILS_REQUEST,
  RESERVATION_SINGLE_DETAILS_SUCCESS,
  RESERVATION_SINGLE_DETAILS_FAIL,
} from "../constants/reservationConstants.js";
import axios from "axios";

export const getReservationsList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5500/api/reservation`,
      config
    );

    dispatch({
      type: RESERVATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: RESERVATION_LIST_FAIL,
      payload: message,
    });
  }
};

export const getReservationDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_SINGLE_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5500/api/reservation/${id}`,
      config
    );

    dispatch({
      type: RESERVATION_SINGLE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: RESERVATION_SINGLE_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const createReservationAction = (data) => async (dispatch) => {
  const {
    title,
    firstName,
    lastName,
    email,
    nationality,
    country,
    phoneNumber,
    room,
    bed,
    roomNumber,
    meal,
    checkInDate,
    checkOutDate,
  } = data;

  try {
    dispatch({
      type: RESERVATION_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:5500/api/reservation/create`,
      {
        title,
        firstName,
        lastName,
        email,
        nationality,
        country,
        phoneNumber,
        room,
        bed,
        roomNumber,
        meal,
        checkInDate,
        checkOutDate,
      },
      config
    );

    dispatch({
      type: RESERVATION_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: RESERVATION_CREATE_FAIL,
      payload: message,
    });
  }
};
