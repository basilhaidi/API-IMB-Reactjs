import React, { Component } from "react";
import searchIcon from "assets/img/search-icon.png";
import { connect } from "react-redux";

import { searchMovie } from "actions/searchActions";

export class searchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  render() {
    return (
      <div>
        <div class="card mt-5">
          <div className="jumbotron jumbotron-fluid bg-transparent p-3 search">
            <div className="container mt-2 pt-3">
              <form id="searchForm" className="row">
                <div className="col-2 pl-4 pr-4 mt-2 ">
                  <label for="disabledTextInput" className="form-label">
                    Search Movie
                  </label>
                </div>
                <div className="col-9 pr-4">
                  <input
                    type="text"
                    className="form-control"
                    name="searchText"
                    placeholder="Search"
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-1 p-0">
                  <button type="submit" className="btn">
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

export default connect(mapStatesToProps, { searchMovie })(searchForm);
