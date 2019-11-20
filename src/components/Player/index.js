import React from "react";

import { Container, Current, Volume } from "./styles";
import VolumeIcon from "../../assets/images/volume.svg";
const Player = () => (
  <Container>
    <Current>
      <img
        src="https://i3.ytimg.com/vi/VBoxSQeFpJ8/mqdefault.jpg"
        alt="album"
      />
      <div>
        <strong>Fui na boca comprar pó</strong>
        <small>Menino do bem</small>
      </div>
    </Current>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
    </Volume>
  </Container>
);

export default Player;
