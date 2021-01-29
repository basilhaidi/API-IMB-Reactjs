import { SEARCH_MOVIE } from "./types";
import axios from "axios";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  const options = {
    method: "GET",
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${text}`,
    headers: {
      "x-rapidapi-key": "420475526dmsh58e2402dd2404a5p1532b6jsn76a3ce10d672",
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
