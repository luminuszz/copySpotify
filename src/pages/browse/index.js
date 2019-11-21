import React from "react";
import { Container, Title, ListPlaylist, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <ListPlaylist>
      <Playlist href="">
        <img
          src="https://i3.ytimg.com/vi/VBoxSQeFpJ8/mqdefault.jpg"
          alt="playlist"
        />
        <strong>Fui na boca</strong>
        <p>Venha comprar pó com a boca de carrilho</p>
      </Playlist>
    </ListPlaylist>
  </Container>
);

export default Browse;
