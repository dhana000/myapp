import React, { memo } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import Label from "./Label";

function InputContainer({ id, title, info, formik, ...restProps }) {
  const hasError = formik.touched[title] && formik.errors[title];
  return (
    <>
      <Label {...{ id, title, info }} />
      {hasError ? (
        <Error>
          <AiOutlineInfoCircle className="icon" />
          <p>{formik.errors[title]}</p>
        </Error>
      ) : null}
      <TextArea
        hasError={hasError}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[title]}
        {...{ ...restProps, id, name: title }}
      />
    </>
  );
}

const TextArea = styled.textarea`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "4rem")};
  border: 1px solid ${(props) => (props.hasError ? "red" : props.theme.border)};
  background: ${(props) =>
    props.hasError ? "#fff8f7" : props.theme.background};
  border-radius: 0.7rem;
  font-size: 1rem;
  padding: 0.5em;
  outline: none;
  resize: none;
  font-family: inherit;
  font-weight: inherit;
  margin-bottom: 2.5em;
  &:focus {
    border-color: black;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1em;
  display: flex;
  align-items: center;

  p {
    margin-left: 0.3em;
  }
  .icon {
    margin-top: 0.1em;
  }
`;

export default memo(InputContainer);
