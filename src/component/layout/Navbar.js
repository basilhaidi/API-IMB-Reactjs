import React from "react";
import logoMovie from "assets/img/logo-movie.png";
import logoImdb from "assets/img/logo-imdb.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary shadow">
        <div className="container">
          <a className="navbar-brand fs-2" href="#">
            <img src={logoMovie}></img> <span>Basilicious Movie</span>
          </a>
          <ul className="navbar-nav ml-auto ">
            <li className="navbar-item d-inline-block">
              <i className="logo-kanan">
                <img src={logoImdb}></img>
              </i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
