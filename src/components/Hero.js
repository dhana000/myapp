import React from "react";
import styled from "styled-components";
import { device } from "../styles/devices";

function Hero({ src, title, ...restProps }) {
  return (
    <Container {...restProps}>
      <img {...{ src }} className="img" />
      <h1>{title}</h1>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .img {
    width: 100%;
    height: 28rem;
    object-fit: cover;
    object-position: center;
    background: ${(props) => props.theme.border};
    @media ${device.tablet} {
      border-radius: 1rem;
      height: 20rem;
    }
  }
  h1 {
    font-size: 2.5rem;
    line-height: 2.4rem;
    position: absolute;
    top: 50%;
    padding: 0.5em;
    color: ${(props) => props.theme.background};
    @media ${device.tablet} {
      top: 30%;
      width: 50%;
    }
    @media ${device.desktop} {
      line-height: 2.5rem;
      font-size: 3rem;
      top: 30%;
      width: 40%;
    }
  }
`;

export default Hero;
