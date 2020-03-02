import React from "react";
import styled from "styled-components";
import RipCentralHomePageHeader from "../components/RipCentralHomePageHeader.jsx";
import Navbar from "../components/Navbar";

const NavContainer = styled.div`
  margin-bottom: 8em;
`;

const RipCentralHomePage = () => {
  return (
    <>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <RipCentralHomePageHeader />
    </>
  );
};
export default RipCentralHomePage;
