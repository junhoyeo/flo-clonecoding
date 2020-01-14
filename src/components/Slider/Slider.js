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
      padding-top: 135px;
    `;

    const ContainerEl = styled.div`
      background-color: #444444;
      color: #ffffff;
      height: 315px;
      text-align: center;
      border-radius: 6px;
    `;

    return (
      <Group>
        <Slider {...settings}>
          <div>
            <ContainerEl>1</ContainerEl>
          </div>
          <div>
            <ContainerEl>2</ContainerEl>
          </div>
          <div>
            <ContainerEl>3</ContainerEl>
          </div>
          <div>
            <ContainerEl>4</ContainerEl>
          </div>
          <div>
            <ContainerEl>5</ContainerEl>
          </div>
        </Slider>
      </Group>
    );
  }
}
