// Action types
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_ERROR
} from "../actions/types";

// Initial state

const initialState = {
  data: {}
};

// Reducer

export const rooterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: null
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        error: payload
      };
    case CREATE_START:
      return {
        ...state,
        creating: true,
        error: null
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        creating: false,
        error: null,
        token: localStorage.getItem("token")
      };
    case CREATE_ERROR:
      return {
        ...state,
        creating: false,
        error: payload
      };
    case FETCH_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_SUCCESS:
      console.log("FETCH_SUCCESS payload", payload);
      return {
        ...state,
        error: "",
        isFetching: false,
        data: payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: payload,
        isFetching: false
      };
    default:
      return state;
  }
};
