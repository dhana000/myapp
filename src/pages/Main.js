import React from "react";
import styled from "styled-components";
import Hero from "../components/Main/Hero";
import Poster from "../components/Main/Poster";
import { hero, poster } from "../data/data";
import Feature from "../components/Main/Feature";
import Category from "../components/Main/Category";
import Footer from "../components/Footer";
import heroImg from "../static/hero.png";
import MyModel from "../components/MyModel";
import LoginForm from "../components/auth/LoginForm";
import { device } from "../styles/devices";

function Main() {
  return (
    <>
      <Container>
        <Hero subTitle={hero.subtitle} title={hero.title} src={heroImg} />
        <Feature />
        <Category />
        <Poster title={poster.title} info={poster.info} src={poster.image} />
        <Footer />
      </Container>
      <MyModel heading={"Sign up or Log in"}>
        <LoginForm />
      </MyModel>
    </>
  );
}

const Container = styled.section``;
export default Main;
