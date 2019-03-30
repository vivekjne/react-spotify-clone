import React, { Component } from "react";
import PlayerContainer from "./PlayerContainer";
import Controls from "./Controls";
export default class Player extends Component {
  render() {
    return (
      <PlayerContainer>
        <div />
        <Controls />
        <div />
      </PlayerContainer>
    );
  }
}
