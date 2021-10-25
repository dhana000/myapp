import React, { memo, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { device } from "../styles/devices";
import { Link } from "react-router-dom";
import useHideOnUrl from "../hooks/useHideOnUrl";

const urlNameList = ["search", "Profile", "hostsession", "about"];

function SearchBar({ active }) {
  const [selectedDate, setSelectedDate] = useState(null);
  let hidebar = useHideOnUrl(urlNameList);

  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref}
      placeholder="Pick a date for session"
      value={selectedDate ? getDayFormat(selectedDate) : ""}
      className="date-input"
    />
  );

  const getDayFormat = (date) => `${date.day}/${date.month}/${date.year}`;
  return (
    <SearchContainer className={active ? "active" : ""} {...{ hidebar }}>
      <div>
        <InputContainer>
          <label>Topic</label>
          <input type="search" placeholder="What you want to learn?" />
        </InputContainer>
        <span className="hr"></span>
        <InputContainer className="date-container">
          <label>Date</label>
          <DatePicker
            value={selectedDate}
            onChange={setSelectedDate}
            renderInput={renderCustomInput}
            colorPrimary="black"
          />
        </InputContainer>
      </div>
      <Link to="/search" className="icon">
        <FiSearch />
      </Link>
    </SearchContainer>
  );
}

const InputContainer = styled.div`
  border-radius: 3rem;
  width: 14.5rem;
  height: 100%;
  padding: 0.5em 1em;
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    box-shadow: 1px 0px 10px 7px rgba(0, 0, 0, 0.13);
  }

  label {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(props) => props.theme.onBackground};
  }
  input {
    height: 1.7rem;
    border: none;
    outline: none;
    background: transparent;
    font-size: 0.875rem;
  }
`;

const SearchContainer = styled.div`
  position: absolute;
  height: 4.4rem;
  background: white;
  top: 4rem;
  border-radius: 3rem;
  box-shadow: 0px 0px 3px 4px rgba(0, 0, 0, 0.05);
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  display: ${(props) => (props.hidebar ? "none" : "flex")};

  @media ${device.tablet} {
    width: 20rem;
    left: 2rem;

    .date-container {
      padding-right: 0;
    }
  }
  @media ${device.tablet} {
    width: 31rem;
    left: calc(50% - 15.5rem);
  }

  .hr {
    width: 1px;
    height: 60%;
    background: none;
    border-right: 1px solid ${(props) => props.theme.border};
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 85%;
    &:hover .hr {
      visibility: hidden;
    }
  }

  .date-input {
    height: 1.6rem;
    border: none;
    outline: none;
    background: transparent;
  }

  .icon {
    width: 3rem;
    height: 3rem;
    border-radius: 4rem;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    margin-right: 0.3em;
    transition: width 0.4s, height 0.4s ease-out;
    &:hover {
      background: ${(props) => props.theme.onBackground};
    }
  }

  &.active {
    width: 19rem;
    top: 0.7rem;
    left: calc(50% - 9.5rem);
    height: 3rem;
    box-shadow: 0px 0px 10px 6px rgba(10, 10, 10, 0.03);
    border: 1px solid ${(props) => props.theme.border};
    .icon {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1rem;
    }

    .hr {
      display: none;
    }

    label {
      display: none;
    }
    .date-container {
      display: none;
    }
  }
`;
export default memo(SearchBar);
