import React, { Fragment } from "react";
import styled from "styled-components";

import RAngle from "../assets/angle-right.png";
import RAngleActive from "../assets/angle-right-active.png";

import Play from "../assets/play.png";
import PlayH from "../assets/play-hover.png";


import Cover0 from "../assets/album/최선.png";
import Cover1 from "../assets/album/fromh.jpg";
import Cover2 from "../assets/album/dearqueen.jpg";
import Cover3 from "../assets/album/artistsim2.jpg";
import Cover4 from "../assets/album/아무노래.jpg";

import Cover5 from "../assets/album/icy.jpg";
import Cover6 from "../assets/album/netflixnchill.jpg";
import Cover7 from "../assets/album/unknownartpop21.jpg";
import Cover8 from "../assets/album/아픈편지.jpg";
import Cover9 from "../assets/album/ceo.jpg";



export default function LatestMusic() {

  const Wrapper = styled.div`
    padding-top: 80px;
    display:flex;
    width:100%;
  `;



  const Anglebtn = styled.img`
    width:15px;
    display: inline;
  `;

  const AnglebtnHover = styled.img`
    width:15px;
    display: none;
  `;

  const Angle = styled.div`
    &:hover {
      cursor: pointer;
    }
    &:hover ${AnglebtnHover} {
      display: inline;
    }

    &:hover ${Anglebtn} {
      display: none;
    }

    &:hover{
        color:#3f3fff;
    }
    
    font-size:22px;
    font-weight: 600;
    margin-bottom:25px;
  `;



  const Domestic = styled.button`
    font-size:13px;
    background:none;
    border: 0 solid;
    cursor: pointer;
       &:focus{
        outline:none;
    }
        color:#3f3fff;
    `

  const Overseas = styled.button`
    font-size:13px;
    background:none;
    border: 0 solid;
    cursor: pointer;
       &:focus{
        outline:none;
    }

    &:hover{ 
        color:#3f3fff;
    }
    `


  const SelectRange = styled.div`
      margin-left:81%;
 
    `







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
  width:190px;
  height:210px;
  margin-right:10px;
  `

  const AlbumCover = styled.img`
  width:175px;
  height:175px;
  border-radius:7px;
  margin-left:6px;
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
  margin-left:6px;
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

  const Name = styled.a`
  font-size:15px;
  font-weight:400;
  margin-left:10px;
  position:relative;
  bottom:20px;

  &:hover{
    color:#3f3fff;
    cursor:pointer;
  }
  `

  const Author = styled.a`
  font-size:13px;
  font-weight:400;
  margin-left:10px;
  position:relative;
  color:#969696;
  bottom:20px;
  margin-top:8px;
  cursor:pointer;
  `


  const MusicPlay = () => {
    return (
      <MPlayParent>
        <MPlay src={Play} />
        <MPlayHover src={PlayH} />
      </MPlayParent>
    )
  }


  const AlbumWrapper = styled.div`
  margin-bottom:20px;
  `

  const Album = () => {
    return (
      <AlbumWrapper>

        <Albumline>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Cover0} />
            <MusicPlay />
            <Name>최선</Name><br />
            <Author>단칸방 로맨스</Author>
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Cover1} />
            <MusicPlay />
            <Name>from h</Name><br />
            <Author>이해리</Author>
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Cover2} />
            <MusicPlay />
            <Name>Dear. Queen</Name><br />
            <Author>서문탁</Author>
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Cover3} />
            <MusicPlay />
            <Name>artist.sim2</Name><br />
            <Author>Anonymous Artists</Author>
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Cover4} />
            <MusicPlay />
            <Name>아무노래</Name><br />
            <Author>지코 (ZICO)</Author>
          </AlbumLayout>


        </Albumline>


        <Albumline>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Cover5} />
            <MusicPlay />
            <Name>ICY</Name><br />
            <Author>ITZY (있지)</Author>
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Cover6} />
            <MusicPlay />
            <Name>NETFLIX & CHILL</Name><br />
            <Author>한국사람</Author>
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Cover7} />
            <MusicPlay />
            <Name>unknown art pop 2.1</Name><br />
            <Author>OnlyOneOf (온리원오브)</Author>
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Cover8} />
            <MusicPlay />
            <Name>아픈편지</Name><br />
            <Author>Ways (웨이즈)</Author>
          </AlbumLayout>

          <AlbumLayout>
            <CoverBack />
            <AlbumCover src={Cover9} />
            <MusicPlay />
            <Name>CEO</Name><br />
            <Author>슬리피</Author>
          </AlbumLayout>


        </Albumline >


      </AlbumWrapper>
    )
  }






  return (
    <Fragment>
      <Wrapper>
        <Angle>
          최신 음악
                <Anglebtn src={RAngle} />
          <AnglebtnHover src={RAngleActive} />
        </Angle>
        <SelectRange>
          <Domestic>국내</Domestic>
          <Overseas>해외</Overseas>
        </SelectRange>



      </Wrapper>

      <Album />
    </Fragment>
  );
}
