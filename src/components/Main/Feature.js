import React from "react";
import FeatureItem from "./FeatureItem";
import { feature } from "../../data/data";
import { device } from "../../styles/devices";
import styled from "styled-components";
import { AiOutlineNodeCollapse } from "react-icons/ai";

function Feature() {
  return (
    <MainContainer>
      <Container>
        <Title>How We Support You</Title>
        <Block>
          {feature.map((item) => (
            <FeatureItem
              key={item.id}
              title={item.title}
              info={item.info}
              icon={item.image}
            />
          ))}
        </Block>
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  @media ${device.tablet} {
    margin-bottom: 5rem;
  }
`;
const Container = styled.div`
  padding: 1.5em;
  @media ${device.tablet} {
    max-width: 760px;
    margin: auto;
    padding: 0;
  }
  @media ${device.desktop} {
    max-width: 1100px;
    margin: auto;
  }
`;

const Block = styled.div`
  @media ${device.tablet} {
    display: flex;
    gap: 1em;
  }
  @media ${device.desktop} {
    gap: 5em;
    padding: 0em 1em;
  }
`;

const Title = styled.h1`
  margin-bottom: 1em;
  font-size: 2rem;
`;

export default Feature;
