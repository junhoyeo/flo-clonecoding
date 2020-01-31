import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./Slider1.css";
import "./Slider2.css";


import Play from "../../assets/sliderplay.png";
import PlayH from "../../assets/sliderplay-hover.png";

import Banner1 from "../../assets/banner/banner-1.png";
import Banner2 from "../../assets/banner/banner-2.png";
import Banner3 from "../../assets/banner/banner-3.png";
import Banner4 from "../../assets/banner/banner-4.png";
import Banner5 from "../../assets/banner/banner-5.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
    };

    const Group = styled.div`
      position:relative;
      width: auto;
      height:320px;
      background-color:black;
      border-radius:10px;
    `;

    const ContainerEl = styled.span`
      border-radius:10px;
      background-color: #4c4863;
      color: #ffffff;
      height: 320px;
      text-align: center;
      cursor:pointer;
    `;



    const Banner = styled.img`
    z-index:-1;
    `

    const Playbtn = styled.img`
    display: inline;
    position:absolute;
    `;

    const PlaybtnHover = styled.img`
    display: none;
    `;

    const Playbutton = styled.span`
      width:48px;
      height:48px;
      z-index:2;
      position: absolute;
      margin-top:230px;
      margin-left: 43px;
      &:hover {
        cursor: pointer;
      }
      &:hover ${PlaybtnHover} {
        display: inline;
      }
      &:hover ${Playbtn} {
        display: none;
      }
    `


    const SPB = () => {
      return (
        <Playbutton>
          <Playbtn src={Play} />
          <PlaybtnHover src={PlayH} />
        </Playbutton>
      )
    }


    const Margintop = styled.div`
      width:auto;
      margin-top:130px;
    `


    const BannerWrapper = styled.div`
      position:absolute;
      top:127px;
      width:953px;
      height:314px;
      margin-left:-5px;
      border-radius:12px;
      border:6px solid white;
      background:none;
      z-index:1;
      pointer-events:none;
    `

    return (
      <Fragment>
        <Margintop />
        <BannerWrapper />
        <Group>
          <Slider {...settings}>
            <div>
              <ContainerEl title="클래식의 성지,&#10;아름다운 &#10;비엔나의 밤 상세보기">
                <SPB />
                <Banner src={Banner1} />
              </ContainerEl>
            </div>

            <div>
              <ContainerEl title="펑펑&#10;울고 싶은 날&#10;이별 발라드 상세보기">
                <SPB />
                <Banner src={Banner2} />
              </ContainerEl>
            </div>
            <div>
              <ContainerEl title="끝내주는&#10;노래모음집!&#10;신나는 이밤! 상세보기">
                <SPB />
                <Banner src={Banner3} />
              </ContainerEl>
            </div>
            <div>
              <ContainerEl title="잔잔한 밤을&#10;채우는&#10;감성 인디 상세보기">
                <SPB />
                <Banner src={Banner4} />
              </ContainerEl>
            </div>
            <div>
              <ContainerEl title="밤 하늘과&#10;센티한&#10;알앤비 음악 상세보기">
                <SPB />
                <Banner src={Banner5} />
              </ContainerEl>
            </div>
          </Slider>
        </Group >
      </Fragment>
    );
  }
}
