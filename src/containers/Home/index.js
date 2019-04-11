import React, { Component } from "react";
import Navbar from "./Navbar";
import AlbumList from "../AlbumList";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default class Home extends Component {
  render() {
    console.log("props=", this.props);
    const { match } = this.props;
    return (
      <div style={{ marginLeft: "12px", padding: "40px 30px" }}>
        <Navbar isActive={match.url} />

        <AlbumList path={match.url} />
      </div>
    );
  }
}
