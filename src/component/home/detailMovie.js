import React from "react";

export default function detailMovie(props) {
  const { data } = props;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={data.poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{data.title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {data.year}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {data.length}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {data.rating}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {data.rating_votes}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {data.plot}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
