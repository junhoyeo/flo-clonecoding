import React, { Fragment } from "react";
import styled from "styled-components";

export default function Navbar() {
  const Bar = styled.div`
    background-color: #ffffff;
    height: 95px;
    border: 1px;
    text-align: center;
  `;

  const Logo = styled.img.attrs({
    src: require("../assets/logo.png")
  })`
    width: 54.5px;
    height: auto;
    margin-right: 25px;
    vertical-align: -40%;
  `;

  const LeftElement = styled.a`
    color: #000000;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    margin: 14px;
  `;

  const Leftcontents = styled.span`
    float: left;
    margin-top: 43px;
    margin-left: 12.2%;
  `;

  const Searchbox = styled.span`
    margin-left: 22px;
    border: 1px solid #cccccc;
    padding: 7px;
    border-radius: 100px;
  `;

  const Searchicon = styled.img.attrs({
    src: require("../assets/searchicon.png")
  })`
    vertical-align: middle;
    margin: 0 7px 0 5px;
  `;

  const Searchinput = styled.input.attrs({
    placeholder: "검색어를 입력하세요."
  })`
    vertical-align: middle;
    border: none;
    font-size: 13px;
    font-weight: 400;
    width: 280px;
    margin-right: 25px;
    font-family: "NBG", sans-serif;
  `;

  return (
    <Fragment>
      <Bar>
        <Leftcontents>
          <a href=".">
            <Logo />
          </a>
          <LeftElement href=".">둘러보기</LeftElement>
          <LeftElement href=".">보관함</LeftElement>
          <LeftElement href=".">이용권</LeftElement>
          <Searchbox>
            <Searchicon />
            <Searchinput />
          </Searchbox>
        </Leftcontents>
      </Bar>
    </Fragment>
  );
}
