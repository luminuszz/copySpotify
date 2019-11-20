import React, { Fragment } from "react";
import Globalstyle from "./styles/global";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import { Wrapper, Content } from "./styles/components";
const App = () => (
  <Wrapper>
    <Globalstyle />
    <Content>
      <Sidebar />
    </Content>
    <Player />
  </Wrapper>
);

export default App;
