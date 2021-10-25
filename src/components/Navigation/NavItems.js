import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { Link } from "react-router-dom";
// dummy login
import { login, showModel } from "../../redux";
import useHideOnUrl from "../../hooks/useHideOnUrl";

function NavItems({ active }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const hideBtn = useHideOnUrl(["hostsession"]);
  const dropDownDiv = useRef();

  return (
    <NavLinks {...{ active, hideBtn }}>

      {login && <Link to="/hostsession" className="link">
        <li>Host a session</li>
      </Link>}
      {login && (
        <Link to="/account/notifications">
          <li className="icon-wrapper">
            <AiOutlineBell className="icon" />
          </li>
        </Link>
      )}
      <li className="profile" onClick={() => setOpen(!open)}>
        <AiOutlineUser className="icon" />
        <DropDown ref={dropDownDiv} className={open ? "open" : ""}>
          <div className="container">
            {login ? (
              <>
                <DropItem to="/Profile">Profile</DropItem>
                <DropItem to="/sessions">My Sessions</DropItem>
                <DropItem to="/account/settings">Settings</DropItem>
                <DropItem to="/">Payments</DropItem>
                <DropItem to="/">Help</DropItem>
                <DropItem to="/">Log Out</DropItem>
              </>
            ) : (
              <>
                <DropItem to="/" onClick={() => dispatch(showModel())}>
                  Log In
                </DropItem>
                <DropItem to="/" onClick={() => dispatch(showModel())}>
                  Sign Up
                </DropItem>
                <DropItem to="/">About</DropItem>
                <DropItem to="/">Help</DropItem>
              </>
            )}
          </div>
        </DropDown>
      </li>
    </NavLinks>
  );
}

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  .link {
    text-decoration: none;
    li {
      display: ${(props) => (props.hideBtn ? "none" : "block")};
    }
  }
  li {
    font-size: 1rem;
    margin-left: 1.4em;
    color: ${(props) =>
      props.active ? props.theme.onBackground : props.theme.background};
    font-weight: 600;
  }
  li:hover {
    text-decoration: underline;
  }

  .icon-wrapper {
    width: 2.1rem;
    height: 2.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    &:hover {
      background: ${(props) => props.theme.shadow};
    }
  }

  .icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.background};
    box-shadow: 0px 0px 5px 6px rgba(0, 0, 0, 0.04);
    color: ${(props) => props.theme.onBackground};
  }
`;

const DropDown = styled.div`
  display: none;
  &.open {
    display: block;
    position: absolute;
    top: 0rem;
    bottom: -1200px;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .container {
    width: 13rem;
    position: absolute;
    top: 4rem;
    right: 0;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.06);
    background: ${(props) => props.theme.background};
    padding: 0.5em 0em;
    transition: all 0.1s ease-out;
  }
`;

const DropItem = styled(Link)`
  display: block;
  color: ${(props) => props.theme.onBackground};
  text-decoration: none;
  padding: 0.8em 1em;
  margin: 0.2em 0em;
  font-size: 0.875rem;
  font-weight: 500;

  &:last-child {
    font-weight: 600;
  }

  &:hover {
    background: ${(props) => props.theme.shadow};
  }
`;

export default NavItems;
