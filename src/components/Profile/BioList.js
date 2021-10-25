import React from "react";
import styled from "styled-components";
import {
  AiOutlineSmile,
  AiOutlineHeart,
  AiOutlineAudio,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import SubTitle from "../SubTitle";

//data
import { sessionDetail } from "../../data/data";

function BioList() {
  return (
    <MainContainer>
      <div className="box">
        <SubTitle>About</SubTitle>

        <ItemContainer>
          <AiOutlineSmile className="icon" />
          {renderInfo("Santhosh Good At", sessionDetail.startsAt)}
        </ItemContainer>

        <ItemContainer>
          <AiOutlineHeart className="icon" />
          {renderInfo("Interested Topics", sessionDetail.duration)}
        </ItemContainer>

        <ItemContainer>
          <AiOutlineAudio className="icon" />
          {renderInfo("Santhosh Speaks", sessionDetail.category)}
        </ItemContainer>

        <ItemContainer>
          <AiOutlineVideoCamera className="icon" />
          {renderInfo("No Of Sessions", sessionDetail.topic)}
        </ItemContainer>
      </div>
    </MainContainer>
  );
}

function renderInfo(heading, subheading) {
  return (
    <div>
      <p className="heading">{heading}</p>
      <p className="subHeading">{subheading}</p>
    </div>
  );
}

const MainContainer = styled.div`
  padding: 1.5em;

  .box {
    padding-bottom: 2em;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: start;
  padding: 0.7em 0em;
  width: 100%;

  & .icon {
    display: block;
    width: 30px;
    height: 30px;
  }

  & div {
    width: 85%;
    min-height: 3.55rem;
    padding-left: 1em;
  }

  & div .heading {
    font-weight: 600;
    margin-bottom: 0.3em;
  }

  & div .subHeading {
    font-size: 0.875rem;
    color: ${(props) => props.theme.onSecondary};
  }
`;

export default BioList;
