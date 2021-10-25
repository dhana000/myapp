import React from "react";
import styled from "styled-components";
import { device } from "../../styles/devices";
import { sessionDetail } from "../../data/data";
import Rating from "../Rating";

function TitleSection() {
  return (
    <Container>
      <img src={sessionDetail.image} />
      <h1>{sessionDetail.title}</h1>
      <p>{sessionDetail.info}</p>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 1.6em;
  padding-bottom: 2em;
  border-bottom: 1px solid ${(props) => props.theme.border};

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 14rem;
    border-radius: 1rem;
    margin-bottom: 2em;
  
    @media ${device.desktop} {
      height: 19rem;
    }
  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 0.5em;
    line-height: 2rem;
  }

    p {
        margin-top: .5em;
        font-size: 1rem;
        line-height: 1.5rem;
    }
  }

`;

export default TitleSection;
