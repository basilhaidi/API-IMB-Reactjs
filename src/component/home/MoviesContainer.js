import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard.js";

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = "";
    content =
      movies.length > 0
        ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
        : null;
    return (
      <div className="card mt-4 p-4 shadow">
        <div className="row">{content}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
