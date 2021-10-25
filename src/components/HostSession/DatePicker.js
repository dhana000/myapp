import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Label from "./Label";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import Calendar from "@hassanmojab/react-modern-calendar-datepicker";
import { device } from "../../styles/devices";

function DatePicker({ id, title, info, handleDate, error, setError }) {
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    handleDate(selectedDay);
    setError("");
  }, [selectedDay]);

  const renderCustomInput = ({ ref }) => (
    <Input
      hasError={error}
      readOnly
      ref={ref}
      placeholder="Select a preferred day"
      value={
        selectedDay
          ? `${MonthFormater(selectedDay.month)}, ${selectedDay.day}`
          : ""
      }
    />
  );
  return (
    <>
      <Label {...{ id, title, info }} />
      {error ? (
        <Error>
          <AiOutlineInfoCircle className="icon" />
          <p>{error}</p>
        </Error>
      ) : (
        ""
      )}
      <Container>
        <Calendar
          value={selectedDay}
          onChange={setSelectedDay}
          renderInput={renderCustomInput}
          colorPrimary={"black"}
        />
      </Container>
    </>
  );
}

function MonthFormater(month) {
  const mlist = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return mlist[month - 1];
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 2.5em;
  @media ${device.tablet} {
    width: 28%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  border: 1px solid ${(props) => (props.hasError ? "red" : props.theme.border)};
  border-radius: 0.7rem;
  outline: none;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  background: ${(props) =>
    props.hasError ? "#fff8f7" : props.theme.background};
`;

const Error = styled.div`\
  display: flex;
  align-items: center;
  color: red;
  margin-bottom: 1em;
  font-size: 0.875rem;
  .icon {
    margin-top: .1em;
  }
  p {
    margin-left: .3em;
  }
`;

export default memo(DatePicker);
