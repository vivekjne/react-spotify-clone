import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./containers/Sidebar";
import Player from "./containers/Player";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./containers/Home";
import Test from "./containers/Test";
const Main = styled.div`
  margin-left: 240px;
  padding: 30px 10px;
  min-height: 90vh;

  background: #41295a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2f0743,
    #41295a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2f0743,
    #41295a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
class RouterComponent extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Sidebar />
        <Player />
        <Main>
          <Route path="/" component={Home} />

          {/* <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} /> */}
        </Main>
      </div>
    );
  }
}

export default RouterComponent;
