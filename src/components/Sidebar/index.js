import React from "react";
import { Container, NewPlaylist, Nav } from "./styles";
import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Sua blibioteca</span>
        </li>
        <br />
        <li>
          <a href="">Seu daily Mix</a>
        </li>
        <li>
          <a href="">Tocados recentimente </a>
        </li>
        <li>
          <a href="">Musicas </a>
        </li>
        <li>
          <a href="">Albuns </a>
        </li>
        <li>
          <a href="">Artistas </a>
        </li>
        <li>
          <a href="">Podcasts </a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Melhores DLÇ</a>
        </li>
        <li>
          <a href="">Cabeçudo</a>
        </li>
        <li>
          <a href="">Melhores do ano</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adcionar playlist" />
      <p>nova Playlist</p>
    </NewPlaylist>
  </Container>
);

export default Sidebar;
