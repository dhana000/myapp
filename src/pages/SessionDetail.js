import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { device } from "../styles/devices";
import { useHistory } from "react-router-dom";

import TitleSection from "../components/sessionDetail/TitleSection";
import DetailSection from "../components/sessionDetail/DetailSection";
import HostDetailSection from "../components/sessionDetail/HostDetailSection";
import LearnAboutSection from "../components/sessionDetail/LearnAboutSection";
import MoreAboutHost from "../components/sessionDetail/MoreAboutHost";
import SessionCard from "../components/sessionDetail/SessionCard";
import ReviewSection from "../components/sessionDetail/ReviewSection";
import BuyButton from "../components/sessionDetail/BuyButton";
import HeaderNav from "../components/Navigation/HeaderNav";
import SlideUp from "../components/sessionDetail/SlideUp";

function SessionDetail() {
  const [showModal, setShowModal] = useState(false);
  const handleBuy = () => setShowModal(!showModal);
  console.log(showModal);
  return (
    <div style={{ marginBottom: "4em" }}>
      <HeaderNav
        left={IconComp}
        middle={() => <p>Session Detail</p>}
        right={() => <div style={{ width: "4rem" }} />}
      />
      <Container>
        <div className="col-1">
          <TitleSection />
          <DetailSection />
          <HostDetailSection />
          <LearnAboutSection />
          <MoreAboutHost />
        </div>
        <SessionCard />
      </Container>
      <ReviewSection />
      <SlideUp {...{ showModal }} />
      <BuyButton {...{ showModal, handleBuy }} />
    </div>
  );
}

const IconComp = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Link to="/" className="back">
        <AiOutlineLeft className="icon" />
        <span>Back</span>
      </Link>
    </Wrapper>
  );
};

const Container = styled.div`
  padding-top: 4em;
  @media ${device.tablet} {
    padding-top: 5em;
    display: flex;
    max-width: 760px;
    margin: auto;
  }
  @media ${device.desktop} {
    max-width: 1100px;
    margin: auto;
  }

  .col-1 {
    padding: 1.5em;

    @media ${device.tablet} {
      width: 60%;
    }
    @media ${device.desktop} {
      width: 70%;
    }
  }
`;

const Wrapper = styled.div`
  padding-right: 0.5rem;
  .icon {
    font-size: 1rem;
    margin-right: 0.1em;
    margin-bottom: -0.2em;
    stroke-width: 40;
  }
  span {
    font-weight: 600;
    text-decoration: underline;
  }
  .back {
    color: ${(props) => props.theme.onBackground};
  }
`;

export default SessionDetail;
