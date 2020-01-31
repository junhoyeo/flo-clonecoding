import React from "react";
import styled from "styled-components";

import volume from "../../assets/volume.png";
import volumehover from "../../assets/volume-hover.png";
import favorite from "../../assets/favorite.png";
import favoritehover from "../../assets/favorite-hover.png";
import musiclist from "../../assets/musiclist.png";
import musiclisthover from "../../assets/musiclist-hover.png";

export default function Leftmenu() {


  const FavoriteButton = styled.img`
    display: inline;
  `;

  const FavoriteButtonHover = styled.img`
    display: none;
  `;

  const FavoriteButtonParent = styled.span`
    &:hover {
      cursor: pointer;
    }
    &:hover ${FavoriteButtonHover} {
      display: inline;
    }

    &:hover ${FavoriteButton} {
      display: none;
    }
    margin:17px 13px 10px 20px;
  `;



  const VolumeButton = styled.img`
    display: inline;
  `;

  const VolumeButtonHover = styled.img`
    display: none;
  `;

  const VolumeButtonParent = styled.span`
    &:hover {
      cursor: pointer;
    }
    &:hover ${VolumeButtonHover} {
      display: inline;
    }

    &:hover ${VolumeButton} {
      display: none;
    }
    margin:23px 10px 20px 13px;
  `;



  const ListButton = styled.img`
    display: inline;
  `;

  const ListButtonHover = styled.img`
    display: none;
  `;

  const ListButtonParent = styled.span`
    &:hover {
      cursor: pointer;
    }
    &:hover ${ListButtonHover} {
      display: inline;
    }

    &:hover ${ListButton} {
      display: none;
    }
    margin:21px 0px 0px 23px;
  `;


  const Wrapper = styled.div`
    margin-top:42px;
    float:right;
     @media screen and (max-width: 1600px) {
      margin-right:55px;
    }

  `;


  return (
    <Wrapper>
      <FavoriteButtonParent>
        <FavoriteButton src={favorite} />
        <FavoriteButtonHover src={favoritehover} />
      </FavoriteButtonParent>

      <VolumeButtonParent>
        <VolumeButton src={volume} />
        <VolumeButtonHover src={volumehover} />
      </VolumeButtonParent>

      <ListButtonParent>
        <ListButton src={musiclist} />
        <ListButtonHover src={musiclisthover} />
      </ListButtonParent>
    </Wrapper>
  );
}
