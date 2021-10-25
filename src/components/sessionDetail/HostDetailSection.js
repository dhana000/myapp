import React from "react";
import styled from "styled-components";
import {
  AiOutlineSmile,
  AiOutlineVideoCamera,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import SubTitle from "../SubTitle";
import { sessionDetail } from "../../data/data";

function HostDetailSection() {
  return (
    <Container>
      <SubTitle>Hosted By {sessionDetail.hostBy}</SubTitle>

      <ItemContainer>
        <AiOutlineSmile className="icon" />
        {renderInfo("Good At", sessionDetail.goodAt)}
      </ItemContainer>

      <ItemContainer>
        <AiOutlineVideoCamera className="icon" />
        {renderInfo("No Of Sessions", sessionDetail.noOfSessions)}
      </ItemContainer>

      <ItemContainer>
        <AiOutlineThunderbolt className="icon" />
        {renderInfo("Level", sessionDetail.level)}
      </ItemContainer>
    </Container>
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

const Container = styled.div`
  margin-bottom: 1.6em;
  padding-bottom: 2em;
  border-bottom: 1px solid ${(props) => props.theme.border};
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

export default HostDetailSection;
