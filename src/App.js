import React, { Component } from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "assets/css/style.css";
import Navbar from "component/layout/Navbar";
import Footer from "component/layout/Footer";
import LandingPage from "component/home/landingPage";
import store from "store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <LandingPage />
        <Footer />
      </Provider>
    );
  }
}
