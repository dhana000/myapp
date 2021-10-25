import React, { memo } from "react";
import styled from "styled-components";
import Label from "./Label";

function RangeInput({ id, title, info, formik, ...restProps }) {
  return (
    <>
      <Label {...{ id, title, info }} />
      <Block>
        <Range
          value={formik.values[title]}
          onChange={formik.handleChange}
          {...{ ...restProps, id, name: title }}
        />
        <input
          readOnly
          className="range-shower"
          type="text"
          value={`${formik.values[title]} hours`}
        />
      </Block>
    </>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0em;
  margin-bottom: 2.5em;

  .range-shower {
    display: block;
    width: 30%;
    padding: 0.7em 1em;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 0.3em;
    font-size: 1rem;
    outline: none;
  }
`;

const Range = styled.input.attrs(() => ({
  type: "range",
}))`
  -webkit-appearance: none;
  width: 60%;
  height: 0.3rem;
  background: ${(props) => props.theme.border};
  border-radius: 1rem;
  border: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1rem;
    width: 1rem;
    background: black;
    border-radius: 50%;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    height: 1rem;
    width: 1rem;
    background: black;
    border-radius: 50%;
    cursor: pointer;
  }
`;
export default memo(RangeInput);
