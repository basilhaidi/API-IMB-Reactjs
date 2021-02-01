import { SEARCH_MOVIE, FETCH_MOVIES, DETAIL_MOVIE } from "actions/types";

const initialState = {
  text: "",
  movies: [],
  movie: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case DETAIL_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
}
