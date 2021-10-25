import React from "react";
import styled from "styled-components";
import {
  AiOutlineCalendar,
  AiOutlineHistory,
  AiOutlineTag,
  AiOutlinePieChart,
} from "react-icons/ai";
import SubTitle from "../SubTitle";

//data
import { sessionDetail } from "../../data/data";

function DetailSection() {
  return (
    <Container>
      <SubTitle>Session Details</SubTitle>

      <ItemContainer>
        <AiOutlineCalendar className="icon" />
        {renderInfo("Starts At", sessionDetail.startsAt)}
      </ItemContainer>

      <ItemContainer>
        <AiOutlineHistory className="icon" />
        {renderInfo("Session Duration", sessionDetail.duration)}
      </ItemContainer>

      <ItemContainer>
        <AiOutlineTag className="icon" />
        {renderInfo("Category", sessionDetail.category)}
      </ItemContainer>

      <ItemContainer>
        <AiOutlinePieChart className="icon" />
        {renderInfo("Topic", sessionDetail.topic)}
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

export default DetailSection;
