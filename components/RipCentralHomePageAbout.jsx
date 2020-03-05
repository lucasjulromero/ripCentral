import React from "react";
import styled from "styled-components";
import {
  darkGrey,
  lightGrey,
  mediumGrey,
  lizardGreen,
  limeGreen
} from "../styles/colors";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  margin-left: -0.5em;
  background-color: ${darkGrey};
  box-shadow: 7px 1px 7px ${darkGrey};
  clip-path: inset(6.25em 3.125em);
`;

const RipCentralHomePageAbout = () => {
  return (
    <>
      <Container>
        <h1 style={{ color: "black" }}>hello</h1>
      </Container>
    </>
  );
};
export default RipCentralHomePageAbout;
