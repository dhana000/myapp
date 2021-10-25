import React, { memo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styled from "styled-components";
import { device } from "../../styles/devices";
import SearchBar from "../SearchBar";
import NavItems from "./NavItems";
// dummy login
import { login } from "../../redux";

function Navigation() {
  const [active, setActive] = useState(login ? true : false);
  const location = useLocation();

  useScrollPosition(({ currPos }) => {
    let value = -1 * currPos.y;
    if (!login) {
      if (value > 80) setActive(true);
      else setActive(false);
    } else {
      setActive(true);
    }
  });

  return (
    <NavContainer
      className={active ? "active" : " "}
      location={location.pathname}
    >
      <Nav>
        <Link to="/" className="logo">
          <p>LearnIt</p>
        </Link>
        <NavItems active={active} />
        <SearchBar active={active} />
      </Nav>
    </NavContainer>
  );
}

const Nav = styled.div`
max-width: 1100px;
height: 100%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;

@media ${device.tablet} {
  max-width: 760px;
}
@media ${device.desktop} {
  max-width: 1100px;
}
.logo {
  font-size: 2rem;
  height: 100%:
  width: 10rem;
  text-decoration: none;
  cursor: pointer;
  color: black;
}
`;

const NavContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 100%;
    position: fixed;
    top: 1rem;
    z-index: 999;
    height: 4.4rem;
    background: transparent;
    color: ${(props) => props.theme.background};
    transition: all 0.05s ease-out;

    &.active {
      top: 0;
      box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.05);
      background: ${(props) => props.theme.background};

      .logo {
        color: black;
      }
    }
  }
`;
export default memo(Navigation);
