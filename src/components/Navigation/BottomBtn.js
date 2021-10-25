import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const defaultIconStyles = {
  width: "1.8rem",
  height: "1.8rem",
  margin: "0em 2.2em",
  marginBottom: ".5em",
};

function BottomBtn(props) {
  const [active, setActive] = useState(false);

  const activeHandler = (match) => {
    if (!match) {
      setActive(false);
      return false;
    } else {
      setActive(true);
      return true;
    }
  };

  const {
    icon: Icon,
    exact,
    children,
    iconStyle = defaultIconStyles,
    to,
  } = props;

  return (
    <StyledNavLink exact to={to} isActive={activeHandler}>
      <button>
        <Icon
          style={{
            ...iconStyle,
            color: active ? "#06D6A0" : "#B0B0B0",
          }}
        />
        <p style={{ color: active ? "black" : "#B0B0B0" }}>{children}</p>
      </button>
    </StyledNavLink>
  );
}

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-size: 0.625rem;
    color: ${(props) =>
      props.active ? props.theme.onBackground : props.theme.onSecondary};
    margin-top: 0.2em;
    background: none;
    border: none;
    outline: none;
  }
`;

export default BottomBtn;
