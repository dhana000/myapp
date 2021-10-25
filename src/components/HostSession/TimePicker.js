import React, { memo, useState, setTimings } from "react";
import styled from "styled-components";
import Label from "./Label";
import { AiFillCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { device } from "../../styles/devices";
import { useEffect } from "react";

function TimePicker({
  id,
  title,
  info,
  setTimings,
  timingsError,
  setTimingsError,
}) {
  const [time, setTime] = useState({
    hr: 1,
    min: 0,
    merdian: "Pm",
  });
  const [err, setErr] = useState("");
  const [PreferredTimingsList, setPrefferedTimings] = useState([]);

  const changeTime = (e) => {
    setTime({ ...time, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setTimings(PreferredTimingsList);
  });

  const AddTimeForPreference = (e) => {
    e.preventDefault();
    setTimingsError("");
    if (PreferredTimingsList.length < 4) {
      setPrefferedTimings((prevState) => [...prevState, time]);
    } else {
      setErr("Exceeded maxmium Preferred timings, maximun 4");
      setTimeout(() => {
        setErr("");
      }, 5000);
    }
  };

  const removePreferredTiming = (e) => {
    e.preventDefault();
    const removedList = PreferredTimingsList.filter(
      (i, index) => e.target.getAttribute("data-id") != index
    );
    setPrefferedTimings(removedList);
    setErr("");
  };

  return (
    <Container>
      <Label {...{ id, title, info }} />
      {err && (
        <Error>
          <AiOutlineInfoCircle />
          <p>{err}</p>
        </Error>
      )}
      {timingsError && (
        <Error>
          <AiOutlineInfoCircle />
          <p>{timingsError}</p>
        </Error>
      )}
      <Wrapper>
        <Block>
          <select id="hr" name="hr" value={time.hr} onChange={changeTime}>
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <option key={index} value={index + 1}>{`${
                  index + 1
                } Hr`}</option>
              ))}
          </select>
        </Block>
        <Block>
          <select value={time.min} name="min" id="min" onChange={changeTime}>
            <option value={0}>00 Mins</option>
            <option value={15}>15 Mins</option>
            <option value={30}>30 Mins</option>
            <option value={45}>45 Mins</option>
          </select>
        </Block>
        <Block>
          <select
            value={time.merdian}
            name="merdian"
            onChange={changeTime}
            id="a"
          >
            <option value={"Pm"}>Pm</option>
            <option value={"Am"}>Am</option>
          </select>
        </Block>
        <Button onClick={AddTimeForPreference}>Add</Button>
      </Wrapper>
      <Collector>
        {PreferredTimingsList.map((time, index) => {
          return (
            <Tag key={index}>
              <span>{`${time.hr <= 9 ? `0${time.hr}` : time.hr}:${
                time.min == 0 ? "00" : time.min
              } ${time.merdian}`}</span>
              <button data-id={index} onClick={removePreferredTiming}>
                <AiFillCloseCircle className="icon" />
              </button>
            </Tag>
          );
        })}
      </Collector>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1.5em;
  margin-bottom: 2.5em;
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.desktop} {
    width: 45%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.4em;
  height: 3rem;
  width: 100%;
  margin-left: -0.5em;
`;

const Block = styled.div`
  border-right: 1px solid ${(props) => props.theme.border};
  padding: 0.6em 0.4em;
  position: relative;

  &:last-of-type {
    border-right: none;
  }

  select {
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: inherit;
    padding-right: 0.6em;
    background: ${(props) => props.theme.background};
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 0.6em 1.4em;
  font-size: 1rem;
  border-radius: 0.4rem;
  outline: none;
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.onBackground};
  border: none;
  cursor: pointer;
`;

const Collector = styled.div`
  width: 100%;
  padding: 1em 0em;
  diaplay: flex;
  flex-wrap: wrap;
  transition: all 0.3s;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 0.4em;
  margin-right: 1em;
  margin-bottom: 1em;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
  letter-spacing: 0.08em;

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    margin-left: 0.5em;
    margin-bottom: -0.2em;
  }

  .icon {
    width: 1.2rem;
    height: 1.3rem;
    pointer-events: none;
  }
`;

const Error = styled.div`
  font-size: 0.875rem;
  padding: 0em;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  color: red;
  transition: 2s ease-in;
  p {
    margin-left: 0.3em;
  }
`;

export default memo(TimePicker);
