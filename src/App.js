import React from "react";
import Navbar from "./components/Navbar";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family:'NBG' ;
  src: url(${require("./assets/fonts/NanumBarunGothic.ttf")});
}
body{
  font-family:'NBG', sans-serif;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
    </div>
  );
}

export default App;
