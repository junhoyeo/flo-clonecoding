import React, { Fragment } from "react";
import styled from "styled-components";

export default function Navbar() {
  const Bar = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 95px;
    margin: 0 auto;
    position: fixed;
    z-index: 100;
    top:0;
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

  const LeftContents = styled.span`
    float: left;
    margin-top: 43px;
    /* margin-left: 12.3%; */
  `;

  const RightContents = styled.span`
    float: right;
    margin-top: 43px;
    margin-right: 15px;
  `;

  const RightElement = styled.a`
    color: #8c8c8c;
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    margin: 12.5px;
  `;

  const Searchbox = styled.span`
    margin-left: 22px;
    border: 1px solid #dddddd;
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

    @media screen and (max-width: 1190px) {
      width: 135px;
    }
  `;

  const Contents = styled.div`
    text-align: center;
    width: 76.2%;
    height: 95px;

    margin-left: 12.3%;
    margin-right: 11.5%;

    @media screen and (max-width: 1190px) {
      width: 94%;
      min-width: 910px;
      margin-left: 3%;
      margin-right: 3%;
      position: fixed;
    }
  `;

  return (
    <Fragment>
      <Bar>
        <Contents>
          <LeftContents>
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
          </LeftContents>
          <RightContents>
            <RightElement href=".">FLO 소개</RightElement>
            <RightElement href=".">로그인</RightElement>
            <RightElement href=".">회원가입</RightElement>
          </RightContents>
        </Contents>
      </Bar>
    </Fragment>
  );
}
