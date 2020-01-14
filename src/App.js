import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider/Slider";

import Test from "./components/NavbarScrolltest";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family:'NBG' ;
  src: url(${require("./assets/fonts/NanumBarunGothic.ttf")});
}
body{
  font-family:'NBG', sans-serif;
  background-color:#a3a3a3;
}
`;

const Wrap = styled.div`
  width: 100%;
  min-width: 600px;
  max-width: 955px;
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
        <Slider />
        <Test />
      </Wrap>
    </div>
  );
}

export default App;
