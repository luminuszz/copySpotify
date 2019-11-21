import React from "react";

import { Container, Header, SongList } from "./styles";
import CloockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://i3.ytimg.com/vi/VBoxSQeFpJ8/mqdefault.jpg"
        alt="playlist"
      />
      <div className="teste">
        <span>Playlist</span>
        <h1>O Pó</h1>
        <p>13 musics</p>
        <button>Play</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Titulo</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={CloockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicinar" />
          </td>
          <td>Fui no pó</td>
          <td>Carrilo Main</td>
          <td>Do pò ao po</td>
          <td>4:15</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicinar" />
          </td>
          <td>Fui no pó</td>
          <td>Carrilo Main</td>
          <td>Do pò ao po</td>
          <td>4:15</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicinar" />
          </td>
          <td>Fui no pó</td>
          <td>Carrilo Main</td>
          <td>Do pò ao po</td>
          <td>4:15</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicinar" />
          </td>
          <td>Fui no pó</td>
          <td>Carrilo Main</td>
          <td>Do pò ao po</td>
          <td>4:15</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
