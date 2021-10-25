import React, { useRef, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AiFillCloseCircle, AiOutlineFilter } from "react-icons/ai";
import { showModel } from "../../redux";
import { device } from "../../styles/devices";

function Header({ search, setSearch }) {
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const clearInput = (e) => {
    e.preventDefault();
    setSearch("");
    inputRef.current.focus();
  };
  return (
    <Container>
      <SearchContainer>
        <input
          ref={inputRef}
          value={search}
          className="search-input"
          type="search"
          placeholder="What you want to learn?"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={`icon ${search === "" ? "" : "active"}`}
          onClick={clearInput}
        >
          <AiFillCloseCircle />
        </button>
      </SearchContainer>
      <IconContainer onClick={() => dispatch(showModel())}>
        <AiOutlineFilter className="icon" />
        <p className="filter-tag">Filter</p>
      </IconContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.background};

  @media ${device.tablet} {
    width: 60%;
    top: 4.4rem;
    height: 6rem;
    margin-top: 1.3em;
  }

  @media ${device.desktop} {
    width: 40%;
  }
`;

const SearchContainer = styled.form`
  flex-basis: 80%;
  @media ${device.tablet} {
    flex-basis: 84%;
  }
  .search-input {
    width: 100%;
    outline: none;
    border: none;
    height: 2.7rem;
    font-size: 1rem;
    border-radius: 3rem;
    padding: 0em 1em;
    position: relative;
    margin-left: 1em;
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.06);
    @media ${device.tablet} {
      height: 3.3rem;
      padding-top: 0.2em;
      padding-left: 1.4rem;
      border: 1px solid ${(props) => props.theme.border};
    }
  }

  .icon {
    display: none;
    outline: none;
    border: none;
    background: none;
  }
  .icon.active {
    display: block;
    position: absolute;
    right: 22%;
    top: 35%;
    font-size: 1.3rem;
    @media ${device.tablet} {
      right: 17%;
      top: 40.5%;
      cursor: pointer;
    }
    @media ${device.desktop} {
    }
  }
`;

const IconContainer = styled.button`
  background: none;
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;

  .icon {
    font-size: 1.5rem;
    color: ${(props) => props.theme.onBackground};
  }
  .filter-tag {
    display: none;
    @media ${device.tablet} {
      display: block;
      text-decoration: underline;
    }
  }
`;

export default memo(Header);
