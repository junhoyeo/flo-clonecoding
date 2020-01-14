import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

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
      width: 500px;
      text-align: center;
    `;

    const ContainerEl = styled.div`
      background-color: #444444;
      color: #ffffff;
      height: 200px;
      text-align: center;
    `;

    return (
      <Group>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <h2> Single Item</h2>
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
        </Slider>
      </Group>
    );
  }
}
