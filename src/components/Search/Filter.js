import React, { memo } from "react";
import styled from "styled-components";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import MyModel from "../../components/MyModel";
import { device } from "../../styles/devices";

const MIN = 0;
const MAX = 500;
const STEP = 50;

function Filter({ price, setPrice, selectedDay, setSelectedDay, clear }) {
  return (
    <MyModel heading="Filter" right={ClearComponent(clear)}>
      <Content>
        <form>
          <InputContainer>
            <label htmlFor="price">Select Price Range</label>
            <PriceContainer>
              <input
                min={MIN}
                max={MAX}
                step={STEP}
                value={price}
                className="slider"
                type="range"
                id="price"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <p className="price-tag">&#8377; {price}</p>
            </PriceContainer>
          </InputContainer>
          <CalenderContainer>
            <label htmlFor="calender">Select A Date For Session</label>
            <Calendar
              value={selectedDay}
              colorPrimary="black"
              calendarClassName="calender"
              onChange={setSelectedDay}
            />
          </CalenderContainer>
        </form>
      </Content>
    </MyModel>
  );
}

function ClearComponent(clear) {
  return (
    <>
      <Clear onClick={clear}>clear</Clear>
    </>
  );
}

const Clear = styled.button`
  text-decoration: underline;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 0em 0.5em;
  padding-bottom: 4rem;
  @media ${device.tablet} {
    width: 70%;
    margin: auto;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 2em;
  margin-top: 1.5em;

  label {
    display: block;
    padding: 0em 1.5em;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  padding-bottom: 0.5em;

  .slider {
    -webkit-appearance: none;
    flex-basis: 60%;
    height: 0.5rem;
    background: ${(props) => props.theme.shadow};
    outline: none;
    border-radius: 0.2rem;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1rem;
      height: 1rem;
      border-radius: 2rem;
      cursor: pointer;
      background: ${(props) => props.theme.onBackground};
    }
    &::-moz-range-thumb {
      width: 1rem;
      height: 1rem;
      border-radius: 2rem;
      cursor: pointer;
      background: ${(props) => props.theme.onBackground};
    }
  }

  .price-tag {
    font-weight: 600;
    border: 1px solid ${(props) => props.theme.border};
    min-width: 5rem;
    padding: 0.5em 0em;
    text-align: center;
    border-radius: 0.4em;
  }
`;

const CalenderContainer = styled.div`
  label {
    padding: 0.5em 1.5em;
    padding-bottom: 2em;
    display: block;
  }

  .calender {
    width: 90%;
    border: 1px solid #dddddd;
    box-shadow: none;
    margin: auto;
    font-size: 11px;
  }
`;

export default memo(Filter);
