import React from "react";
import styled from "styled-components";
import shuffleActive from "../../assets/images/shuffle_active.png";
import shuffleInactive from "../../assets/images/shuffle_inactive.png";
import previousInactive from "../../assets/images/previous_inactive.png";
import previousActive from "../../assets/images/previous_active.png";
import playInactive from "../../assets/images/play_inactive.png";
import pauseActive from "../../assets/images/pause_inactive.png";
import pauseInactive from "../../assets/images/pause_active.png";

import playActive from "../../assets/images/play_active.png";
import nextActive from "../../assets/images/next_active.png";
import nextInactive from "../../assets/images/next_inactive.png";
import repeatInactive from "../../assets/images/repeat_inactive.png";
import repeatActive from "../../assets/images/repeat_active.png";
import Sound from "react-sound";
import testSound from "../../assets/sounds/test2.mp3";
import moment from "moment";

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ControlImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 15px;
  cursor: pointer;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 10px;
`;

const Progress = styled.div`
  position: relative;
  overflow: hidden;
  width: 400px;
  cursor: pointer;
  height: 2px;
  background: #777;
  margin: 10px 8px;
`;

const ProgressBar = styled.div`
  position: absolute;
  cursor: pointer;
  width: ${props => props.position * 400}px;
  height: 2px;
  background: #fff;
`;

const ProgressText = styled.p`
  color: #777;
  font-size: 12px;
`;
export default class Controls extends React.Component {
  state = {
    isShuffleActive: false,
    isPrevActive: false,
    isPlayActive: false,
    isNextActive: false,
    isRepeatActive: false,
    isPauseActive: false,
    position: 0,
    playStatus: Sound.status.PLAYING
  };

  render() {
    const {
      isShuffleActive,
      isPrevActive,
      isPlayActive,
      isNextActive,
      isRepeatActive,
      position,
      playStatus,
      isPauseActive
    } = this.state;

    let duration = 0;
    if (this.sound && this.sound.sound && this.sound.sound.duration) {
      duration = this.sound.sound.duration;
    }

    const durationInMinutes = moment.utc(duration).format("mm:ss");

    const positionInMinutes = moment.utc(position).format("mm:ss");

    // console.log("position=", this.sound && this.sound.sound.duration);
    return (
      <div>
        <ControlsContainer>
          <ControlImage
            onMouseEnter={() => this.setState({ isShuffleActive: true })}
            onMouseLeave={() => this.setState({ isShuffleActive: false })}
            src={isShuffleActive ? shuffleActive : shuffleInactive}
          />
          <ControlImage
            onMouseEnter={() => this.setState({ isPrevActive: true })}
            onMouseLeave={() => this.setState({ isPrevActive: false })}
            src={isPrevActive ? previousActive : previousInactive}
          />
          {playStatus !== "PLAYING" ? (
            <ControlImage
              onClick={() =>
                this.setState({ playStatus: Sound.status.PLAYING })
              }
              onMouseEnter={() => this.setState({ isPlayActive: true })}
              onMouseLeave={() => this.setState({ isPlayActive: false })}
              src={isPlayActive ? playActive : playInactive}
            />
          ) : (
            <ControlImage
              onClick={() => this.setState({ playStatus: Sound.status.PAUSED })}
              onMouseEnter={() => this.setState({ isPauseActive: true })}
              onMouseLeave={() => this.setState({ isPauseActive: false })}
              src={isPauseActive ? pauseActive : pauseInactive}
            />
          )}

          <ControlImage
            onMouseEnter={() => this.setState({ isNextActive: true })}
            onMouseLeave={() => this.setState({ isNextActive: false })}
            src={isNextActive ? nextActive : nextInactive}
          />
          <ControlImage
            onMouseEnter={() => this.setState({ isRepeatActive: true })}
            onMouseLeave={() => this.setState({ isRepeatActive: false })}
            src={isRepeatActive ? repeatActive : repeatInactive}
          />
        </ControlsContainer>
        <ProgressContainer>
          <ProgressText>{positionInMinutes}</ProgressText>
          <Progress>
            <ProgressBar position={position / duration} />
            <Sound
              ref={ref => (this.sound = ref)}
              url={testSound}
              playStatus={playStatus}
              onPlaying={({ position }) => this.setState({ position })}
            />
          </Progress>
          <ProgressText>{durationInMinutes}</ProgressText>
        </ProgressContainer>
      </div>
    );
  }
}
