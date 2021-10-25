import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

const BackBtn = ({ to }) => {
  return (
    <StyledLink to={to}>
      <AiOutlineLeft className="icon" />
      <p>Back</p>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.onBackground};
  font-weight: 600;

  .icon {
    padding-top: 0.2em;
    font-weight: 700;
  }
`;

export default BackBtn;
