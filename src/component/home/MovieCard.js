import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { detailMovie } from "actions/searchActions";

export class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.image} alt="Movie Cover" />
          <h5 className="text-light card-title">{movie.title}</h5>
          <button
            onClick={() => this.props.onClick(movie.id)}
            className="btn btn-primary"
          >
            Movie Details
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = (state) => ({
  text: state.movies,
});

export default connect(null, { detailMovie })(MovieCard);
