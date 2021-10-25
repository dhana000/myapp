import React from "react";
import styled from "styled-components";
import { device } from "../styles/devices";

const Div = styled.div`
  padding-left: 1.5em;
  @media ${device.tablet} {
    padding-left: 0em;
  }
  @media ${device.desktop} {
    padding-left: 0em;
  }
  h1 {
    font-size: ${(props) => props.size};
    font-weight: 700;
    line-height: 2rem;
    text-transform: Capitalize;
  }
  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.2rem;
    margin-top: 0.3em;
    margin-bottom: 1.5em;
    width: 90%;
    color: ${(props) => props.theme.onSecondary};
  }
`;

function Title({ size = "1rem", heading, subHeading }) {
  return (
    <Div size={size}>
      {heading && <h1>{heading}</h1>}
      {subHeading && <p>{subHeading}</p>}
    </Div>
  );
}

export default Title;
