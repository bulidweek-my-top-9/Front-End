// Dependencies
import axios from "axios";

// Objects
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_ERROR,
  ADD_TOP_NINE_START,
  ADD_TOP_NINE_SUCCESS,
  ADD_TOP_NINE_ERROR,
  DELETE_TOP_NINE_START,
  DELETE_TOP_NINE_SUCCESS,
  DELETE_TOP_NINE_ERROR,
  UPDATE_TOP_NINE_START,
  UPDATE_TOP_NINE_SUCCESS,
  UPDATE_TOP_NINE_ERROR,
  SET_UPDATE_FORM
} from "./types";

export const createAccount = creds => dispatch => {
  console.log("createAccount creds", creds);
  dispatch({ type: CREATE_START });
  return axios
    .post("https://top-9-backend.herokuapp.com/api/users/register", creds)
    .then(response => {
      console.log("createAccount response", response);
      // localStorage.setItem("token", response.data.payload);
      // dispatch({ type: CREATE_SUCCESS, payload: response.data.payload });
    })
    .catch(error => {
      console.log("createAccount error.response", error.response);
      // dispatch({ type: CREATE_ERROR, payload: error.response.data.error });
    });
};
export const fetchApi = () => dispatch => {
  dispatch({ type: FETCH_START });
  console.log("fetchAPI start");
  axios
    .get(`https://api-here.com/`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      console.log("GET response", response);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("GET error", error);
      dispatch({ type: FETCH_ERROR });
    });
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://top-9-backend.herokuapp.com/api/users/login", creds)
    .then(response => {
      console.log("login response", response);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(error => {
      console.log("login error.response", error.response);
      // dispatch({ type: LOGIN_ERROR, payload: error.response });
    });
};

export const addTopNine = newTopNine => dispatch => {
  dispatch({ type: ADD_TOP_NINE_START });
  axios
    .post("https://api-here.com/", newTopNine, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log("addTopNine response.data", response.data);
      dispatch({ type: ADD_TOP_NINE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("addTopNine error", error);
      dispatch({
        type: ADD_TOP_NINE_ERROR,
        payload: error.response
      });
    });
};

export const deleteTopNine = id => dispatch => {
  dispatch({ type: DELETE_TOP_NINE_START });
  axios
    .delete(`"https://api-here.com/"${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log("deleteTopNine response.data", response.data);
      dispatch({ type: DELETE_TOP_NINE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("deleteTopNine error", error);
      dispatch({
        type: DELETE_TOP_NINE_ERROR,
        payload: error
      });
    });
};

export const updateTopNine = topNine => dispatch => {
  dispatch({ type: UPDATE_TOP_NINE_START });
  axios
    .put(`"https://api-here.com/"${topNine.id}`, topNine, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log("updateTopNine response.data", response.data);
      dispatch({ type: UPDATE_TOP_NINE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("updateTopNine error", error);
      dispatch({
        type: UPDATE_TOP_NINE_ERROR,
        payload: error
      });
    });
};

export const setUpdateForm = topNine => {
  return {
    type: SET_UPDATE_FORM,
    payload: topNine
  };
};
