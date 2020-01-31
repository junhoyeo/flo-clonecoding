import React, { Fragment } from "react";
import styled from "styled-components";


import Play from "../assets/play.png";
import PlayH from "../assets/play-hover.png";


import Pick0 from "../assets/album/아무노래.jpg";
import Pick1 from "../assets/album/malamente.jpg";
import Pick2 from "../assets/album/iwontgiveup.jpg";
import Pick3 from "../assets/album/첫눈.jpg";
import Pick4 from "../assets/album/over.jpg";


export default function Editorspick() {

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
  height:230px;
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
  margin-bottom:45px;
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
    margin-bottom:35px;
    `

  const AlbumWrapper = styled.div`
  margin-bottom:150px;
  `




  const Name = styled.p`
  font-size:15px;
  font-weight:400;
  margin-left:10px;
  line-height:21px;
  position:relative;
  width:160px;
  bottom:32px;
  height:42px;

  &:hover{
    color:#3f3fff;
    cursor:pointer;
  }
  `

  const Decoration1 = styled.div`
  position:relative;
  left:6px;
  bottom:284px;
  width:162px;
  height:162px;
  border-radius:5px;
  border: 1px solid #e4e4e4;
  background-color:#f5f5f6; 
  z-index:-1;
  `

  const Decoration2 = styled.div`
  position:relative;
  left:14px;
  bottom:453px;
  width:146px;
  height:146px;
  border-radius:5px;
  border: 1px solid #e4e4e4;
  background-color:#f5f5f6; 
  z-index:-2;
  `


  const Album = () => {
    return (
      <AlbumWrapper>

        <Albumline>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Pick0} />
            <MusicPlay />
            <Name>[DJ플로] 연휴 끝 기분 업! 시켜줄 노래</Name>
            <Decoration1 />
            <Decoration2 />
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Pick1} />
            <MusicPlay />
            <Name>제 62회 그래미 어워드 수상곡 특집</Name>
            <Decoration1 />
            <Decoration2 />
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Pick2} />
            <MusicPlay />
            <Name>따뜻한 해외 어쿠스틱 팝</Name>
            <Decoration1 />
            <Decoration2 />
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Pick3} />
            <MusicPlay />
            <Name>[음악당] 독보적인 음색 박봄의 '다시, 봄'</Name>
            <Decoration1 />
            <Decoration2 />
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Pick4} />
            <MusicPlay />
            <Name>DJ 박원의 키스 더 라디오 취향저격 선곡표</Name>
            <Decoration1 />
            <Decoration2 />
          </AlbumLayout>

        </Albumline>

      </AlbumWrapper>
    )
  }






  return (
    <Fragment>
      <Wrapper>
        <Topic>
          Editor's Pick
        </Topic>
      </Wrapper>
      <Album />
    </Fragment>
  );
}
