import React from "react";
import styled from "styled-components";
import RipCentralHomePageHeader from "../components/RipCentralHomePageHeader.jsx";
import RipCentralTopSellers from "../components/RipCentralTopSellers";
import RipCentralHomePageAbout from "../components/RipCentralHomePageAbout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import { darkGrey } from "../styles/colors";
const HomePageBackgroundImage = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 0.9;
  box-shadow: 0px 1px 15px ${darkGrey};
  margin-left: -0.5em;
  margin-bottom: -1.4em;
  filter: contrast(90%);
  background-color: black;
`;

const RipCentralHomePage = () => {
  return (
    <>
      <Navbar />
      <HomePageBackgroundImage />
      <RipCentralHomePageHeader />
      <RipCentralHomePageAbout />
      <RipCentralTopSellers />
      <Footer />
    </>
  );
};
export default RipCentralHomePage;
