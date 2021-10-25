import React from "react";
import { FiSearch } from "react-icons/fi";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineBulb,
} from "react-icons/ai";
import styled from "styled-components";
import { device } from "../../styles/devices";
import BottomBtn from "./BottomBtn";


// dummy login
import { login } from "../../redux";

function BottomNavigation() {
  return (
    <NavContainer>
    {login ? (
      <Nav>
        <BottomBtn exact to="/" icon={AiOutlineHome}>
          Explore
        </BottomBtn>
        <BottomBtn exact to="/search" icon={FiSearch}>
          Search
        </BottomBtn>
        <BottomBtn exact to="/sessions" icon={AiOutlineBulb}>
          Sessions
        </BottomBtn>
        <BottomBtn exact to="/account/notifications" icon={AiOutlineBell}>
          Notification
        </BottomBtn>
        <BottomBtn exact to="/santhosh" icon={AiOutlineUser}>
          Profile
        </BottomBtn>
      </Nav>
    ) : (
      <Nav>
        <BottomBtn exact to="/" icon={AiOutlineHome}>
          Explore
        </BottomBtn>
        <BottomBtn exact to="/search" icon={FiSearch}>
          Search
        </BottomBtn>
        <BottomBtn exact to="/login" icon={AiOutlineUser}>
          Log In
        </BottomBtn>
      </Nav>
    )}
  </NavContainer>
  );
}

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  background: ${(props) => props.theme.background};
  height: 4.1rem;
  box-shadow: 0px 0px 2px 1px rgba(113, 113, 113, 0.1);
  width: 100%;
  z-index: 100;

  @media ${device.mobile} {
    display: none;
  }
`;

const Nav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BottomNavigation;
