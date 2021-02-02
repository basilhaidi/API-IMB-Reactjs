import React from "react";
import { connect } from "react-redux";

export default function detailMovie(props) {
  const { detail } = props;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={detail.poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{detail.title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {detail.year}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {detail.length}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {detail.rating}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {detail.rating_votes}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {detail.plot}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
