import React from "react";
import { Container, Title, ListPlaylist, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <ListPlaylist>
      <Playlist to="/playlists/1">
        <img
          src="https://riffseconversas.files.wordpress.com/2015/12/ghost.jpg"
          alt="playlist"
        />
        <strong>Music</strong>
        <p>Musicas para se curtir</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/b/b1/Tim_Maia_1971.jpeg"
          alt="playlist"
        />
        <strong>Music</strong>
        <p>Musicas para se curtir</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7b/Einaudi_UnaMattina.jpg"
          alt="playlist"
        />
        <strong>Music</strong>
        <p>Musicas para se curtir</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://static.fnac-static.com/multimedia/Images/PT/NR/12/ed/0d/912658/1540-1/tsp20160815171817/Einaudi-Elements.jpg"
          alt="playlist"
        />
        <strong>Music</strong>
        <p>Musicas para se curtir</p>
      </Playlist>
    </ListPlaylist>
  </Container>
);

export default Browse;
