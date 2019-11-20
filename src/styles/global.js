import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
}

html,body #root{
  height: 100%;
  display:flex;

  
}

body{
 
  text-rendering: optimizeLegibility !important;
  -webkit-font-smothing: antialiased !important;
  background: #181818;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
}
`;

export default Globalstyle;
