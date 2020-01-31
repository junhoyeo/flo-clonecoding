import React from "react";
import styled from "styled-components";

import Range from "./Range";

import Play from "../../assets/controlarea/play.png";
import PlayH from "../../assets/controlarea/playhover.png";
import Next from "../../assets/controlarea/next.png";
import NextH from "../../assets/controlarea/nexthover.png";
import Prev from "../../assets/controlarea/prev.png";
import PrevH from "../../assets/controlarea/prevhover.png";
import Repeat from "../../assets/controlarea/repeat.png";
import RepeatH from "../../assets/controlarea/repeathover.png";
import Shuffle from "../../assets/controlarea/shuffle.png";
import ShuffleH from "../../assets/controlarea/shufflehover.png";

export default function Controlarea() {

    const Playbtn = styled.img`
    display: inline;
    `;
    const PlaybtnHover = styled.img`
    display: none;
    `;
    const Playbutton = styled.div`
    &:hover {cursor: pointer;}
    &:hover ${PlaybtnHover} {display: inline;}
    &:hover ${Playbtn} {display: none;}
    `


    const Nextbtn = styled.img`
    display: inline;
    `;
    const NextbtnHover = styled.img`
    display: none;
    `;
    const Nextbutton = styled.div`
    &:hover {cursor: pointer;}
    &:hover ${NextbtnHover} {display: inline;}
    &:hover ${Nextbtn} {display: none;}
    margin: 6px 0 0 50px;
    `


    const Prevbtn = styled.img`
    display: inline;
    `;
    const PrevbtnHover = styled.img`
    display: none;
    `;
    const Prevbutton = styled.div`
    &:hover {cursor: pointer;}
    &:hover ${PrevbtnHover} {display: inline;}
    &:hover ${Prevbtn} {display: none;}
    margin: 6px 50px 0 0;
    `


    const Repeatbtn = styled.img`
    display: inline;
    `;
    const RepeatbtnHover = styled.img`
    display: none;
    `;
    const Repeatbutton = styled.div`
    &:hover {cursor: pointer;}
    &:hover ${RepeatbtnHover} {display: inline;}
    &:hover ${Repeatbtn} {display: none;}
    margin: 7px 50px 0 0;
    `


    const Shufflebtn = styled.img`
    display: inline;
    `;
    const ShufflebtnHover = styled.img`
    display: none;
    `;
    const Shufflebutton = styled.div`
    &:hover {cursor: pointer;}
    &:hover ${ShufflebtnHover} {display: inline;}
    &:hover ${Shufflebtn} {display: none;}
    margin: 7px 0 0 50px;
    `

    const Wrapper = styled.div`
    display:flex;
    position:absolute;
    top:25px;
    left:41.5%;
    @media screen and (max-width: 1600px) {
      left:40%;
    }
    `

    const RWrapper = styled.div`
    height:12px;
    position:relative;
    top:55px;
    right:50%;
    
    @media screen and (max-width: 1600px) {
      width:300px;}
    `


    return (
        <div>
            <Wrapper>


                <Repeatbutton>
                    <Repeatbtn src={Repeat} title="Enable repeat" />
                    <RepeatbtnHover src={RepeatH} title="Enable repeat" />
                </Repeatbutton>


                <Prevbutton>
                    <Prevbtn src={Prev} title="Previous" />
                    <PrevbtnHover src={PrevH} title="Previous" />
                </Prevbutton>


                <Playbutton>
                    <Playbtn src={Play} title="Play" />
                    <PlaybtnHover src={PlayH} title="Play" />
                </Playbutton>


                <Nextbutton>
                    <Nextbtn src={Next} title="Next" />
                    <NextbtnHover src={NextH} title="Next" />
                </Nextbutton>

                <Shufflebutton>
                    <Shufflebtn src={Shuffle} title="Enable shuffle" />
                    <ShufflebtnHover src={ShuffleH} title="Enable shuffle" />
                </Shufflebutton>

                <RWrapper>
                    <Range />
                </RWrapper>


            </Wrapper>




        </div>
    );
}
