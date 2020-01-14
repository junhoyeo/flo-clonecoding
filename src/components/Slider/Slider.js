import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./Slider1.css";
import "./Slider2.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const Group = styled.div`
      width: auto;
      padding-top: 130px;
    `;

    const ContainerEl = styled.div`
      background-color: #4c4863;
      color: #ffffff;
      height: 320px;
      text-align: center;
      border-radius: 6px;
    `;

    return (
      <Group>
        <Slider {...settings}>
          <div>
            <ContainerEl> </ContainerEl>
          </div>
          <div>
            <ContainerEl></ContainerEl>
          </div>
          <div>
            <ContainerEl></ContainerEl>
          </div>
          <div>
            <ContainerEl></ContainerEl>
          </div>
          <div>
            <ContainerEl></ContainerEl>
          </div>
        </Slider>
      </Group>
    );
  }
}
