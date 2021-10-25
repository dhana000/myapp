import React from "react";
import styled from "styled-components";

function SubTitle({ children }) {
  return <Title>{children}</Title>;
}

const Title = styled.h2`
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 600;
  margin-bottom: 1em;
`;

export default SubTitle;
