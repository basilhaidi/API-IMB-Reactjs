import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard.js";

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  getData = (id) => {
    this.props.detailMovie(id);
    this.props.data = this.props.detail.movie;
    this.setState({});
  };

  render() {
    console.log(this.props.data);
    const { movies } = this.props;
    let content = "";
    content =
      movies.length > 0
        ? movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} data={this.state.data} />
          ))
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
