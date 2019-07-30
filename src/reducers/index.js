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
            { name: "one", id: 1 },
            { name: "two", id: 2 },
            { name: "three", id: 3 },
            { name: "four", id: 4 },
            { name: "five", id: 5 },
            { name: "six", id: 6 },
            { name: "seven", id: 7 },
            { name: "eight", id: 8 },
            { name: "nine", id: 9 }
          ]
        },
        {
          id: 2,
          categoryTitle: "Music",
          userId: 1,
          topNine: [
            { name: "one", id: 1 },
            { name: "two", id: 2 },
            { name: "three", id: 3 },
            { name: "four", id: 4 },
            { name: "five", id: 5 },
            { name: "six", id: 6 },
            { name: "seven", id: 7 },
            { name: "eight", id: 8 },
            { name: "nine", id: 9 }
          ]
        },
        {
          id: 3,
          categoryTitle: "Movies",
          userId: 1,
          topNine: [
            { name: "one", id: 1 },
            { name: "two", id: 2 },
            { name: "three", id: 3 },
            { name: "four", id: 4 },
            { name: "five", id: 5 },
            { name: "six", id: 6 },
            { name: "seven", id: 7 },
            { name: "eight", id: 8 },
            { name: "nine", id: 9 }
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
