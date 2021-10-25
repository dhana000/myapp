import React from "react";
import styled from "styled-components";

import HeaderNav from "../components/Navigation/HeaderNav";
import BackBtn from "../components/BackBtn";

export default function PaymentSettings() {
  return (
    <Container>
      <HeaderNav
        left={() => <BackBtn to={"/account/settings"} />}
        middle={() => <p>Payments</p>}
      />
      <FormContainer>form</FormContainer>
    </Container>
  );
}

const Container = styled.div``;

const FormContainer = styled.div`
  padding-top: 4rem;
`;
