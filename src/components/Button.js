import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../styles/devices";

function Button({ children, to, ...restProps }) {
  return (
    <Link {...{ to }}>
      <Btn {...{ ...restProps }}>{children}</Btn>
    </Link>
  );
}

const Btn = styled.button`
  width: 100%;
  height: 2.9rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.5rem;
  outline: none;
  padding: 0em 0.5em;
  border: 1px solid ${(props) => props.border && props.theme.onBackground};
  background: ${(props) => (props.background ? props.background : "none")};

  @media ${device.tablet} {
    width: 50%;
    &:hover {
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
  @media ${device.desktop} {
    width: 40%;
  }
`;

export default Button;
