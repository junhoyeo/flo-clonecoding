import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

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

const Wrap = styled.div`
  width: 100%;
  min-width: 600px;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  background-color: none;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Navbar />
      <Wrap>
        <Test />
        <Slider />
      </Wrap>
    </div>
  );
}

export default App;
