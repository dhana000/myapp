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
      <Input
        hasError={hasError}
        value={formik.values[title]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...{ ...restProps, id, name: title }}
        type="text"
      />
    </>
  );
}

const Input = styled.input`
  display: block;
  width: 100%;
  height: 3rem;
  border-radius: 0.7rem;
  border: 1px solid ${(props) => (props.hasError ? "red" : props.theme.border)};
  background: ${(props) =>
    props.hasError ? "#fff8f7" : props.theme.background};
  padding: 0em 0.7em;
  font-size: 1rem;
  outline: none;
  margin-bottom: 3em;
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
