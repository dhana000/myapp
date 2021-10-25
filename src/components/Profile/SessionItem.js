import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import { sessions } from "../../data/data";
import { device } from "../../styles/devices";

function SessionItem() {
  return (
    <Container>
      <p>
        Best django discuss on admin panel with access root with online root
      </p>
      <p>14th may 2020</p>
      <div>
        <div className="box">
          <ImageAndName />
          <AiOutlineRight className="icon" />
          <ImageAndName />
        </div>
      </div>
    </Container>
  );
}

function ImageAndName() {
  return (
    <Block>
      <img src={sessions[0].image} />
      <p>santhosh</p>
    </Block>
  );
}

const Container = styled.div`
  margin-right: 1em;
  padding: 1em;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.border};
  background: ${(props) => props.theme.background};
  width: 17rem;
  height: 10rem;
  font-size: 1rem;
  scroll-snap-align: center;

  p:nth-of-type(2) {
    font-size: 0.875rem;
    padding-top: 0.4em;
    padding-bottom: 1rem;
    color: ${(props) => props.theme.onSecondary};
  }

  .box {
    display: flex;
    justify-content: space-around;
    aling-items: center;

    .icon {
      margin: 0.2em;
      margin-right: 0.4em;
    }
  }
`;

const Block = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  p {
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0em 0.4em;
  }
`;
export default SessionItem;
