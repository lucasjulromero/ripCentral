import React from "react";
import styled from "styled-components";
import { lizardGreen } from "../styles/colors";

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${lizardGreen};
  margin-left: -0.5em;
`;

const RipCentralHomePageAbout = () => {
  return (
    <>
      <Container>
        <h1 style={{ color: "white" }}>hello</h1>
      </Container>
    </>
  );
};

export default RipCentralHomePageAbout;
