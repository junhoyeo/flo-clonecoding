import React from "react";
import styled from "styled-components";
import "./Range.css";



export default function Range() {

    const Stime = styled.span`
    color:#a0a0a0;
    font-size:12px;
    margin-right:10px;
    `

    const Etime = styled.span`
    color:#646464;
    font-size:12px;
    margin-left:10px;
    `

    const Wrapper = styled.div`
    display:flex;
    `


    var RangeValue = 0;

    return (
        <Wrapper>
            <Stime>00:00</Stime>
            <input defaultValue={RangeValue} type="range" id="range" title="재생 시간 조절 바" />
            <Etime>00:00</Etime>
        </Wrapper >
    );
}




