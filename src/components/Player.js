import React from "react";
import styled from "styled-components";

export default function Player() {
  const Player = styled.div`
    background-color: #000000;
    height: 110px;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: #ffffff;
    font-family: "NBG", sans-serif;
  `;

  const Wrapper = styled.div`
    width: 80%;
    margin-top: 23px;
    margin-left: 197px;
    display: flex;
  `;

  const Albumcover = styled.img.attrs({
    src: require("../assets/album/parisintherain.jpg")
  })`
    width: 63px;
    height: auto;
    border-radius: 5px;
  `;

  //   const Name = styled.p`
  //     font-size: 18px;
  //     margin-left: 20px;
  //   `;

  return (
    <Player>
      <Wrapper>
        <Albumcover />
        {/* <Name>Paris In The Rain</Name> */}
      </Wrapper>
    </Player>
  );
}
