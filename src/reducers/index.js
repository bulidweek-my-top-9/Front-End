// Action types
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions/types";

// Initial state

export const initialState = {
  data: [
    {
      id: 1,
      username: "zach",
      password: "1234",
      email: "zchristy44@gmail.com",
      categories: [
        {
          id: 1,
          categoryTitle: "Sports",
          userId: 1,
          topNine: [
            { 1: "one" },
            { 2: "two" },
            { 3: "three" },
            { 4: "four" },
            { 5: "five" },
            { 6: "six" },
            { 7: "seven" },
            { 8: "eight" },
            { 9: "nine" }
          ]
        },
        {
          id: 2,
          categoryTitle: "Music",
          userId: 1,
          topNine: [
            { 1: "one" },
            { 2: "two" },
            { 3: "three" },
            { 4: "four" },
            { 5: "five" },
            { 6: "six" },
            { 7: "seven" },
            { 8: "eight" },
            { 9: "nine" }
          ]
        },
        {
          id: 3,
          categoryTitle: "Movies",
          userId: 1,
          topNine: [
            { 1: "one" },
            { 2: "two" },
            { 3: "three" },
            { 4: "four" },
            { 5: "five" },
            { 6: "six" },
            { 7: "seven" },
            { 8: "eight" },
            { 9: "nine" }
          ]
        }
      ]
    }
  ]
};

// Reducer

export const rooterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_SUCCESS:
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
