import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" type="text" />
    </Search>
    <User>
      <img
        src="https://avatars0.githubusercontent.com/u/48535259?v=4"
        alt="Avatar"
      />
      Davi Ribeiro
    </User>
  </Container>
);

export default Header;
