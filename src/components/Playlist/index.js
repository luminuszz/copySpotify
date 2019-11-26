import React from "react";

import { Container, Header, SongList } from "./styles";
import CloockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7b/Einaudi_UnaMattina.jpg"
        alt="playlist"
      />
      <div className="teste">
        <span>Playlist</span>
        <h1>A musica</h1>
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
          <td>2:13</td>
          <td>Tim</td>
          <td>Vida</td>
          <td>2:13</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicinar" />
          </td>
          <td>2:13</td>
          <td>Tim</td>
          <td>Vida</td>
          <td>2:13</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicinar" />
          </td>
          <td>2:13</td>
          <td>Tim</td>
          <td>Vida</td>
          <td>2:13</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicinar" />
          </td>
          <td>2:13</td>
          <td>Tim</td>
          <td>Vida</td>
          <td>2:13</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
