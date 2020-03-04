import React from "react";
import styled from "styled-components";
import RipCentralHomePageHeader from "../components/RipCentralHomePageHeader.jsx";
import RipCentralHomePageAbout from "../components/RipCentralHomePageAbout.jsx";
import Navbar from "../components/Navbar";
import { darkGrey } from "../styles/colors";

const HomePageBackgroundImage = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 0.9;
  position: static;
  margin-top: 5em;
  margin-left: -0.5em;
  margin-bottom: -1.4em;
  filter: contrast(80%);
  background-image: url("https://wallpapercave.com/wp/V5lryUt.jpg");
`;

const RipCentralHomePage = () => {
  return (
    <>
      <Navbar />
      <HomePageBackgroundImage />
      <RipCentralHomePageHeader />
      <RipCentralHomePageAbout />
    </>
  );
};
export default RipCentralHomePage;
