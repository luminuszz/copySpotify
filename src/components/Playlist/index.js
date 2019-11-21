import React from "react";

import { Container, Header } from "./styles";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://i3.ytimg.com/vi/VBoxSQeFpJ8/mqdefault.jpg"
        alt="playlist"
      />
      <div>
        <span>Playlist</span>
        <h1>O Pó</h1>
        <p>13 musics</p>
        <button>Play</button>
      </div>
    </Header>
  </Container>
);

export default Playlist;
