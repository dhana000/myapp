import React from "react";
import { device } from "../../styles/devices";

import styled from "styled-components";

function FeatureItem({ title, info, icon }) {
  return (
    <Container>
      <Icon>{icon()}</Icon>
      <Header>{title}</Header>
      <Info>{info}</Info>
    </Container>
  );
}

const Header = styled.h3`
  margin-bottom: 0.5em;
  width: 80%;
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 70%;
  }
`;
const Info = styled.p`
  width: 95%;
  @media ${device.tablet} {
    width: 100%;
  }
`;

const Icon = styled.div`
  font-size: 2.4rem;
  color: ${(props) => props.theme.primary};
`;

const Container = styled.div`
  margin-bottom: 4em;

  @media ${device.tablet} {
    margin-bottom: 0em;
  }
`;
export default FeatureItem;
