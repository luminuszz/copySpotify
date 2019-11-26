import React from "react";
import {
  Container,
  Current,
  Volume,
  Progress,
  Control,
  Time,
  ProgressSlider
} from "./styles";
import Slider from "rc-slider";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuflleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7b/Einaudi_UnaMattina.jpg"
        alt="album"
      />
      <div>
        <strong>lUDOVIC</strong>
        <small>Elments</small>
      </div>
    </Current>
    <Progress>
      <Control>
        <button>
          <img src={ShuflleIcon} alt="ShuflleIcon" />
        </button>
        <button>
          <img src={BackwardIcon} alt="ShuflleIcon" />
        </button>
        <button>
          <img src={PlayIcon} alt="ShuflleIcon" />
        </button>

        <button>
          <img src={ForwardIcon} alt="ShuflleIcon" />
        </button>

        <button>
          <img src={RepeatIcon} alt="ShuflleIcon" />
        </button>
      </Control>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", boderraius: 10 }}
            trackStyle={{ background: "#1Ed760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>3:20</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
