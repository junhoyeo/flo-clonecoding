import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider/Slider";
import Player from "./components/Player/Player";
import LatestMusic from "./components/LatestMusic";
import Collection from "./components/Collection";
import EditorsPick from "./components/Editorspick";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family:'NBG' ;
  src: url(${require("./assets/fonts/NanumBarunGothic.ttf")});
}
body{
  font-family:'NBG', sans-serif;
  min-width:1300px;
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
        <LatestMusic />
        <Collection />
        <EditorsPick />
      </Wrap>
      <Player />
    </div>
  );
}

export default App;
