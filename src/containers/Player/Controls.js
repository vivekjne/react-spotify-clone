import React from "react";
import styled from "styled-components";
import shuffleActive from "../../assets/images/shuffle_active.png";
import shuffleInactive from "../../assets/images/shuffle_inactive.png";
import previousInactive from "../../assets/images/previous_inactive.png";
import previousActive from "../../assets/images/previous_active.png";
import playInactive from "../../assets/images/play_inactive.png";
import playActive from "../../assets/images/play_active.png";
import nextActive from "../../assets/images/next_active.png";
import nextInactive from "../../assets/images/next_inactive.png";
import repeatInactive from "../../assets/images/repeat_inactive.png";
import repeatActive from "../../assets/images/repeat_active.png";
import Sound from "react-sound";
import testSound from "../../assets/sounds/test.mp3";
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

  height: 2px;
  background: #777;
  margin: 10px 8px;
`;

const ProgressBar = styled.div`
  position: absolute;
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
    position: 0
  };
  render() {
    const {
      isShuffleActive,
      isPrevActive,
      isPlayActive,
      isNextActive,
      isRepeatActive,
      position
    } = this.state;
    let duration = this.sound && this.sound.sound.duration;
    console.log("position=", this.sound && this.sound.sound.duration);
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
          <ControlImage
            onMouseEnter={() => this.setState({ isPlayActive: true })}
            onMouseLeave={() => this.setState({ isPlayActive: false })}
            src={isPlayActive ? playActive : playInactive}
          />

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
          <ProgressText>0:00</ProgressText>
          <Progress>
            <ProgressBar position={position / duration} />
            <Sound
              ref={ref => (this.sound = ref)}
              url={testSound}
              playStatus={Sound.status.PLAYING}
              onPlaying={({ position }) => this.setState({ position })}
            />
          </Progress>
          <ProgressText>4:30</ProgressText>
        </ProgressContainer>
      </div>
    );
  }
}
