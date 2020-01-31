import React, { Fragment } from "react";
import styled from "styled-components";


import Play from "../assets/play.png";
import PlayH from "../assets/play-hover.png";


import Collection0 from "../assets/album/collection/Domestic-Ballads-Popularity.jpg";
import Collection1 from "../assets/album/collection/Domestic-Ballads-Latest.jpg";
import Collection2 from "../assets/album/collection/Pop-Popularity.jpg";
import Collection3 from "../assets/album/collection/Pop-Latest.jpg";
import Collection4 from "../assets/album/collection/Domestic-Dance-Electronic-Popularity.jpg";


export default function Collection() {

  const Wrapper = styled.div`
    display:flex;
    width:100%;
  `;

  const MPlay = styled.img`
    display: inline;
    position:relative;
  `;

  const MPlayHover = styled.img`
    display: none;
    position:relative;
  `;

  const MPlayParent = styled.div`
    &:hover {
      cursor: pointer;
    }
    &:hover ${MPlayHover} {
      display: inline;
    }

    &:hover ${MPlay} {
      display: none;
    }
    position:relative;
    bottom:55px;
    left:140px;
    width:20px;
    height:20px;
  `;








  const AlbumLayout = styled.div`
  width:175px;
  height:200px;
  margin-right:20px;
  `

  const AlbumCover = styled.img`
  width:175px;
  height:175px;
  border-radius:7px;
  margin-bottom:6px;
  position:relative;
  opacity:1;
  background-color:black;
  &:hover{
    opacity:0.7;
    cursor:pointer;
  }
  `

  const CoverBack = styled.div`
  width:175px;
  height:175px;
  background-color:Black;
  border-radius:7px;
  margin-bottom:6px;
  position:absolute;
  opacity:1;

  &:hover{
    opacity:0.7;
    cursor:pointer;
  }
  `

  const Albumline = styled.div`
  display:flex;
  `



  const MusicPlay = () => {
    return (
      <MPlayParent>
        <MPlay src={Play} />
        <MPlayHover src={PlayH} />
      </MPlayParent>
    )
  }


  const Topic = styled.p`
  font-size:22px;
    font-weight: 600;
    margin-bottom:25px;
    `

  const AlbumWrapper = styled.div`
  margin-bottom:10px;
  `

  const Album = () => {
    return (
      <AlbumWrapper>

        <Albumline>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Collection0} />
            <MusicPlay />
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Collection1} />
            <MusicPlay />
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Collection2} />
            <MusicPlay />
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Collection3} />
            <MusicPlay />
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Collection4} />
            <MusicPlay />
          </AlbumLayout>

        </Albumline>

      </AlbumWrapper>
    )
  }






  return (
    <Fragment>
      <Wrapper>
        <Topic>
          장르 콜렉션
        </Topic>
      </Wrapper>
      <Album />
    </Fragment>
  );
}
