import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SearchForm from "./searchForm";
import MoviesContainer from "./MoviesContainer";
import Spinner from "component/layout/Spinner";

class landingPage extends Component {
  render() {
    const { loading } = this.props;
    const { movies } = this.props;
    console.log(this.props.loading.movies);
    return (
      <div className="container fitur-search">
        <SearchForm />
        {this.props.loading.movies.length > 0 && (
          <MoviesContainer movies={loading} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies,
});
export default connect(mapStateToProps)(landingPage);
