import React from "react";
import { useRef } from "react";
import styled from "styled-components";

function InputContainer({ type, formik }) {
  const inputRef = useRef(null);
  const value = formik.values[type];

  function focusHandler() {
    if (!value) {
      inputRef.current.classList.add("active");
    }
  }

  function removeFocusHandler() {
    if (!value) {
      inputRef.current.classList.remove("active");
      return formik.handleBlur;
    }
  }

  return (
    <Container>
      <div className="input-container" ref={inputRef}>
        <label htmlFor={type}>{type}</label>
        <input
          id={type}
          name={type}
          onBlur={removeFocusHandler}
          onFocus={focusHandler}
          value={value}
          type={type}
          onChange={formik.handleChange}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.6rem;
  .input-container {
    padding: 0.2em;
    position: relative;
    height: 3.5rem;
    label {
      position: absolute;
      top: 1em;
      left: 1em;
      font-size: 1.05rem;
      text-transform: Capitalize;
      color: ${(props) => props.theme.onSecondary};
      transition: all 0.2s ease;
    }
    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
    }
  }

  .input-container.active {
    label {
      top: 0.2em;
      left: 1em;
      font-size: 0.875rem;
    }

    input {
      margin-top: 0.8em;
      padding: 0em 0.8em;
      font-weight: 400;
      font-size: 1rem;
      height: 2.4rem;
    }
  }
`;

export default InputContainer;
