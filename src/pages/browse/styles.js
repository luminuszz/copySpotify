import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin-top: 105px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 46px;
`;

export const ListPlaylist = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-decoration: none;

  &:first-child {
    margin: 0;
  }

  img {
    height: 250px;
    width: 100%;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;

    color: #fff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
`;
