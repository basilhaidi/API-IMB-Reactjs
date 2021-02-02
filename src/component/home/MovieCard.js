import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { detailMovie } from "actions/searchActions";
import DetailMovie from "./detailMovie";

class MovieCard extends Component {
  getData = (id) => {
    this.props.detailMovie(id);
    this.props.data = this.props.detail.movie;
  };

  render() {
    const { movie } = this.props;
    return (
      <>
        <div className="col-md-3 mb-5">
          <div className="card card-body bg-dark text-center h-100">
            <img className="w-100 mb-2" src={movie.image} alt="Movie Cover" />
            <h5 className="text-light card-title">{movie.title}</h5>
            <button
              onClick={() => this.getData(movie.id)}
              className="btn btn-primary"
            >
              Movie Details
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
        {/* <DetailMovie detail={this.props.detail.movie} /> */}
      </>
    );
  }
}

const mapStatesToProps = (state) => ({
  detail: state.movies,
});

export default connect(mapStatesToProps, { detailMovie })(MovieCard);
