import React from "react";
import styled from "styled-components";

function Label({ title, id, info }) {
  return (
    <>
      {title && <Title htmlFor={title}>{title}</Title>}
      {info && <Info>{info}</Info>}
    </>
  );
}

const Title = styled.label`
  display: block;
  text-transform: capitalize;
`;

const Info = styled.p`
  display: block;
  font-size: 0.875rem;
  color: ${(props) => props.theme.onSecondary};
  padding-bottom: 1em;
`;
export default Label;
