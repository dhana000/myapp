import React from "react";
import styled from "styled-components";
import { device } from "../../styles/devices";

function HeaderNav({ left, middle, right }) {
  return (
    <Container>
      <div className="left">{left && left()}</div>
      <div className="middle">{middle && middle()}</div>
      <div className="right">{right && right()}</div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 3.8rem;
  padding: 0em 1.5em;
  background: ${(props) => props.theme.background};
  border-bottom: 1px solid ${(props) => props.theme.border};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: inline-block;
    min-width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .middle {
    margin: auto;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export default HeaderNav;
