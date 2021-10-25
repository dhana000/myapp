import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import TextArea from "./TextAreaCotainer";
import Range from "./RangeInput";
import Input from "./InputContainer";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import { device } from "../../styles/devices";

function HostASessionForm() {
  const [date, setDate] = useState({});
  const [dateError, setDateError] = useState("");
  const [timings, setTimings] = useState([]);
  const [timingsError, setTimingsError] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      duration: 1,
      category: "",
      topic: "",
      learn: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("title is required"),
      description: Yup.string().required("decription is required"),
      duration: Yup.number().required("duration is required"),
      category: Yup.string().required("category is required"),
      topic: Yup.string().required("Topic is required"),
      learn: Yup.string().required("Learn field is required"),
    }),
    onSubmit: (values) => {
      const { year, month, day } = date;
      const selectedDay = new Date(year, month - 1, day).setHours(10, 0, 0);
      const today = new Date().setHours(0, 0, 0);

      if (date == null) {
        setDateError("date is required");
      } else if (selectedDay < today) {
        setDateError("your selected date is in past");
      } else if (timings.length === 0) {
        setTimingsError("You haven't selected timings");
      } else {
        setDateError("");
        setTimingsError("");
        values.date = date;
        values.timings = timings;
        console.log(values);
      }
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <TextArea
          id={"title"}
          title="title"
          info="Give simple title to your session"
          formik={formik}
        />
        <TextArea
          id={"info"}
          title={"description"}
          info={"Give more information on your session"}
          height={"6rem"}
          formik={formik}
        />
        <Range
          id="duration"
          title={"duration"}
          min={1}
          max={3}
          step={0.5}
          info={"Select a duration for your session"}
          formik={formik}
        />
        <Input
          id={"categroy"}
          title={"category"}
          info={"Specify a category for your topic"}
          placeholder={"Examples: math, coding, music.."}
          formik={formik}
        />
        <Input
          id={"topic"}
          title={"topic"}
          info={"specify a sub categroy for your session "}
          placeholder={"Example: for coding: css, regex, functions.. "}
          formik={formik}
        />
        <DatePicker
          id={"date"}
          title={"date"}
          info={"Select a date for your session"}
          handleDate={setDate}
          error={dateError}
          setError={setDateError}
        />
        <TimePicker
          id={"timing"}
          title={"timing"}
          info={"Select a Preferred timings"}
          formik={formik}
          setTimings={setTimings}
          timingsError={timingsError}
          setTimingsError={setTimingsError}
        />
        <TextArea
          id={"WhatYouLearn"}
          title={"learn"}
          info={"Describe benfits, what buyer can learn in this session"}
          height={"6rem"}
          formik={formik}
        />
        <button className="submit" type="submit">
          Host it Now
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 1.2em;

  .submit {
    width: 100%;
    padding: 1em;
    border-radius: 0.6em;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
    border: none;
    outline: none;
    font-weight: 600;
    cursor: pointer;
    @media ${device.tablet} {
      width: 35%;
      &:hover {
        background: black;
        color: white;
      }
    }
  }
`;

export default HostASessionForm;
