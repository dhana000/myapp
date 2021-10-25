import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import Session from "../Session";
import { sessions } from "../../data/data";
import useCoursel from "../../hooks/useCoursel";
import Title from "../Title";

import { device } from "../../styles/devices";
import PrevNextBtns from "../PrevNextBtns";

function HostedSessions() {
  const { ref, ...buttonProps } = useCoursel();
  return (
    <MainContainer>
      <div className="header">
        <Title size={"1.5rem"} heading={`Santhosh's pics`} />
        <PrevNextBtns {...{ ...buttonProps }} />
      </div>
      <div className="box" ref={ref}>
        <img src={sessions[0].image} />
        <img src={sessions[0].image} />
        <img src={sessions[0].image} />
        <img src={sessions[0].image} />
        <img src={sessions[0].image} />
        <img src={sessions[0].image} />
        <Last />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0.7em 0em;
  padding-bottom: 1em;
  margin-bottom: 1em;

  img {
    width: 14rem;
    height: 14rem;
    object-fit: cover;
    object-position: center;
    border-radius: 0.8rem;
    scroll-snap-align: center;

    @media ${device.tablet} {
      scroll-snap-align: start;
      width: 13.5rem;
    }
    @media ${device.desktop} {
      scroll-snap-align: start;
      width: 15.2rem;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.7em;
  }

  .box {
    padding-left: 1.2em;
    margin-bottom: 1em;
    width: 100%;
    padding-top: 0.25;
    padding-bottom: 0.5;
    scroll-snap-type: x mandatory;
    display: flex;
    gap: 1em;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Last = styled.div`
  min-width: 0.5rem;

  @media ${device.tablet} {
    display: none;
  }
`;

export default HostedSessions;
