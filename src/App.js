import React from "react";
import { createGlobalStyle } from "styled-components";

import Navbar from "./components/Navbar";

import Test from "./components/NavbarScrolltest";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family:'NBG' ;
  src: url(${require("./assets/fonts/NanumBarunGothic.ttf")});
}
body{
  font-family:'NBG', sans-serif;
  background-color:#dddddd;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Test />
    </div>
  );
}

export default App;
