import React, { Fragment } from "react";
import styled from "styled-components";

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
  &:active {
    color: #000000;
  }
`;

const Leftcontents = styled.span`
  float: left;
  margin-top: 43px;
  margin-left: 12.2%;
`;

const Navbar = () => {
  return (
    <Fragment>
      <Bar>
        <Leftcontents>
          <Logo />
          <LeftElement href=".">둘러보기</LeftElement>
          <LeftElement href=".">보관함</LeftElement>
          <LeftElement href=".">이용권</LeftElement>
        </Leftcontents>
      </Bar>
    </Fragment>
  );
};
export default Navbar;
