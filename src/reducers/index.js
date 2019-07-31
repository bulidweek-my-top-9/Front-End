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
  data: {
    user: {
      username: "user1",
      id: 1
    },
    top_music: [
      {
        artist_name: "AC/DC",
        user_id: 1
      },
      {
        artist_name: "Daft Punk",
        user_id: 1
      },
      {
        artist_name: "Clarence Clarity",
        user_id: 1
      },
      {
        artist_name: "Iceage",
        user_id: 1
      },
      {
        artist_name: "Aerosmith",
        user_id: 1
      },
      {
        artist_name: "Aesop Rock",
        user_id: 1
      },
      {
        artist_name: "America",
        user_id: 1
      },
      {
        artist_name: "Animal Collective",
        user_id: 1
      },
      {
        artist_name: "The Beatles",
        user_id: 1
      }
    ]
  }
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
