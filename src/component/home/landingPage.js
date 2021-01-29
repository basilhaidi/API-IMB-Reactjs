import React, { Component } from "react";
import SearchForm from "./searchForm";
import { fetchMovies } from "actions/searchActions";
import { connect } from "react-redux";

class landingPage extends Component {
  constructor(props) {
    super(props);
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="container fitur-search">
        <SearchForm />
      </div>
    );
  }
}

export default connect(null, { fetchMovies })(landingPage);
