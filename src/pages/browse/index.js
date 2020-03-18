import React from "react";
import { Container, Title, ListPlaylist, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <ListPlaylist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/b/b6/Back_in_Black.jpg"
          alt="playlist"
        />
        <strong>Music</strong>
        <p>music</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/b/b6/Back_in_Black.jpg"
          alt="playlist"
        />
        <strong>Music</strong>
        <p>music</p>
      </Playlist>
      <Playlist to="/playlists/1">

        <img
          src="https://upload.wikimedia.org/wikipedia/pt/b/b6/Back_in_Black.jpg"
          alt="playlist"
        />
        <strong>Music</strong>
        <p>music</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/b/b6/Back_in_Black.jpg"
          alt="playlist"
        />
        <strong>Music</strong>
        <p></p>
      </Playlist>
    </ListPlaylist>
  </Container>
);

export default Browse;
