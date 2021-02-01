import React, { Component } from "react";
import searchIcon from "assets/img/search-icon.png";

import { connect } from "react-redux";

import { searchMovie, fetchMovies } from "actions/searchActions";

export class searchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
  };

  render() {
    return (
      <div>
        <div class="card shadow mt-5">
          <div className="jumbotron jumbotron-fluid bg-transparent p-3 search">
            <div className="container mt-2 pt-3">
              <form id="searchForm" className="row" onSubmit={this.onSubmit}>
                <div className="col-2 pl-5 mt-2 ">
                  <label for="disabledTextInput" className="form-label">
                    Search Movie
                  </label>
                </div>
                <div className="col-10 input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="searchText"
                    placeholder="Title Movie"
                    onChange={this.onChange}
                  />
                  <button type="submit" className="btn btn-light btn-sm ">
                    <img
                      src={searchIcon}
                      className="img-fluid icon-search"
                    ></img>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStatesToProps, { searchMovie, fetchMovies })(
  searchForm
);
