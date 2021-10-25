import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputContainer from "./InputContainer";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { device } from "../../styles/devices";

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be 6 characters or more")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <MainContainer>
      <Container>
        <div>
          <form novalidate="novalidate" onSubmit={formik.handleSubmit}>
            <h2>Welcome To LearnIt</h2>
            <h2>Log in or Sign up</h2>

            <Error>
              {formik.touched.email && formik.errors.email ? (
                <>
                  <AiOutlineInfoCircle className="icon" />
                  <div className="err-block">{formik.errors.email}</div>
                </>
              ) : null}
            </Error>
            <Error>
              {formik.touched.password && formik.errors.password ? (
                <>
                  <AiOutlineInfoCircle className="icon" />
                  <div className="err-block">{formik.errors.password}</div>
                </>
              ) : null}
            </Error>

            <div className="inputContainer">
              <div className="input">
                <InputContainer formik={formik} type={"email"} />
              </div>
              <InputContainer formik={formik} type={"password"} />
            </div>
            <button type="submit" className="button">
              Log in
            </button>
          </form>
        </div>
        <div>
          <OtherOption>
            <FcGoogle style={{ fontSize: "1.2rem" }} />
            <p>Continue With Google</p>
          </OtherOption>
          <OtherOption>
            <FaFacebook className="fb" />
            <p>Continue With Facebook</p>
          </OtherOption>
        </div>
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 1.5em;
  @media ${device.desktop} {
    padding: 1.5em;
    max-width: 32rem;
    margin: auto;
  }
`;

const Error = styled.div`
  margin-bottom: 1em;
  color: red;
  display: flex;
  algin-items: center;

  .icon {
    font-size: 1rem;
    margin-top: 0.1em;
  }
  .err-block {
    margin-left: 0.2em;
  }
`;

const Container = styled.div`
  & > div:first-child {
    padding-bottom: 2em;
    margin-bottom: 2em;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.8em;
    &:first-of-type {
      display: none;
    }

    @media ${device.desktop} {
      &:first-of-type {
        display: block;
      }
      &:last-of-type {
        display: none;
      }
      margin-bottom: 1em;
    }
  }

  .inputContainer {
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 0.7rem;
    .input {
      border-bottom: 1px solid ${(props) => props.theme.border};
    }
  }

  .button {
    margin-top: 1.4em;
    height: 3rem;
    width: 100%;
    border-radius: 0.7rem;
    outline: none;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme.primary};
  }
`;

const OtherOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  border-radius: 0.6rem;
  margin-bottom: 1em;
  background: none;
  font-weight: 500;
  font-size: 1rem;
  border: 2px solid ${(props) => props.theme.border};
  &:hover {
    border: 2px solid ${(props) => props.theme.onBackground};
  }

  p {
    margin-left: 0.5em;
  }
  .fb {
    font-size: 1.3rem;
    color: #3b5998;
  }
`;

export default LoginForm;
