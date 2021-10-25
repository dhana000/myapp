import React from "react";
import styled from "styled-components";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import { device } from "../../styles/devices";

function SessionTab({ src, title, host, time }) {
  return (
    <Container>
      <img src={src} />
      <div className="box">
        <p className="title">{title}</p>
        <Block>
          <span className="icon">
            <AiOutlineUser />
          </span>
          <p>By {host}</p>
        </Block>
        <Block>
          <span className="icon">
            <AiOutlineClockCircle />
          </span>
          <p>Starts In {time}</p>
        </Block>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 1.5rem 0rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.border};

  @media ${device.tablet} {
    display: block;
    border-bottom: none;
    width: 20rem;
    padding: 0.9rem;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.05);
    margin: 1rem;
    border-radius: 1rem;
  }

  .title {
    margin-bottom: 0.5em;
    @media ${device.tablet} {
      width: 100%;
    }
  }
  img {
    width: 45%;
    height: 8rem;
    border-radius: 0.7rem;
    object-fit: cover;
    object-position: center;
    margin-right: 0.7em;
    @media ${device.tablet} {
      height: 11rem;
      width: 100%;
      margin-bottom: 1em;
    }
  }
  .box {
    width: 55%;
    @media ${device.tablet} {
      width: 100%;
    }
  }
  &:last-child {
    border: none;
  }
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
  color: ${(props) => props.theme.onSecondary};

  .icon {
    font-size: 1rem;
    margin-right: 0.4rem;
    margin-bottom: -0.4rem;
  }
  p {
    font-size: 0.875rem;
  }
`;
export default SessionTab;
