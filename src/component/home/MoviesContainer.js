import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard.js";
import { detailMovie } from "actions/searchActions";
import DetailMovie from "./detailMovie";

export class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: "",
      },
    };
  }

  onClick = (id) => {
    this.setState(
      {
        ...this.state,
        data: {
          ...this.state.data,
          id: id,
        },
      },
      () => this.props.detailMovie(this.state.data.id)
    );
  };

  render() {
    const { movies, movie } = this.props;
    console.log(this.props);
    let content = "";
    content =
      movies.length > 0
        ? movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} onClick={this.onClick} />
          ))
        : null;
    return (
      <>
        <div className="card mt-4 p-4 shadow">
          <div className="row">{content}</div>
        </div>
        {Object.keys(this.props.movie).length > 0 && (
          <div className="card movie-detail">
            <div className="row">
              <DetailMovie data={movie} />
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { detailMovie })(MoviesContainer);
