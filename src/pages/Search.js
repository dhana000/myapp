import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import Filter from "../components/Search/Filter";
import Header from "../components/Search/Header";
import DefaultSearchItem from "../components/Search/DefaultSearchItem";
import { device } from "../styles/devices";

function Search() {
  const [search, setSearch] = useState("");
  const [selectedDay, setSelectedDay] = useState();
  const [price, setPrice] = useState(100);
  const [hideDefaultItems, setDefaultitmes] = useState(false);

  useEffect(() => {
    if (search.length > 0) setDefaultitmes(true);
    else setDefaultitmes(false);
  }, [search]);

  const clear = useCallback(() => {
    setPrice(0);
  }, [price, selectedDay]);

  return (
    <>
      <Container>
        <Header {...{ search, setSearch }} />
        <ResultsContainer>
          <DefaultSearchItem hide={hideDefaultItems} />
        </ResultsContainer>
      </Container>
      <Filter {...{ setSelectedDay, selectedDay, price, setPrice, clear }} />
    </>
  );
}

const Container = styled.div`
  background: ${(props) => props.theme.background};
  padding-top: 4rem;

  @media ${device.tablet} {
    padding: 0em;
    padding-top: 12rem;
    max-width: 760px;
    margin: auto;
  }

  @media ${device.desktop} {
    max-width: 1100px;
    margin: auto;
  }
`;

const ResultsContainer = styled.div`
  padding: 0em 1.5em;
`;

export default Search;
