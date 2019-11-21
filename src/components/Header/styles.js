import styled from "styled-components";
import searchIcon from "../../assets/images/search.svg";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px, 0, 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  margin-top: 5px;
  height: 24px;
  width: 180px;
  padding: 6px 5px 5px 10px;
  background: #fff url(${searchIcon}) no-repeat 10px center;

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
    
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-right: 5px;
  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
