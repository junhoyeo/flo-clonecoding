import React from "react";
import styled from "styled-components";

import Leftmenu from "./Leftmenu";
import Controlarea from "./Controlarea"

export default function Player() {
  const Player = styled.div`
    background-color: #000000;
    height: 110px;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: #ffffff;
    font-family: "NBG", sans-serif;
    -ms-user-select: none; 
    -moz-user-select: -moz-none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    user-select:none;
    z-index:1;
  `;

  const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    margin-left: 197px;
    margin-right: 197px;
    display: flex;

    @media screen and (max-width: 1600px) {
      margin-left:26px;
      margin-right:26px;
      width:100%;
      min-width:1300px;
    }
  `;

  const Albumcover = styled.img.attrs({
    src: require("../../assets/album/parisintherain.jpg")
  })`
    width: 63px;
    height: 63px;
    border-radius: 5px;
    margin-top: 24px;
  `;

  const Name = styled.p`
    font-size: 18px;
    margin-left: 83px;
    margin-top: 35px;
    position: absolute;
  `;

  const Author = styled.p`
    font-size: 14px;
    color: #989898;
    margin-left: 83px;
    margin-top: 63px;
    position: absolute;
  `;

  const MenuAlign = styled.div`
  margin-right:px;
  width:100%;
  `

  return (
    <Player>
      <Wrapper>
        <Albumcover />
        <Name>Paris In The Rain</Name>
        <Author>Lauv</Author>
        <Controlarea />
        <MenuAlign><Leftmenu /></MenuAlign>
      </Wrapper>
    </Player>
  );
}
