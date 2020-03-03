import React from "react";
import styled from "styled-components";
import RipCentralHomePageHeader from "../components/RipCentralHomePageHeader.jsx";
import Navbar from "../components/Navbar";

const HomePageBackgroundImage = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 0.9;
  position: absolute;
  filter: contrast(80%);
  left: 0;
  margin-top: 4.6em;
  background-image: url("https://wallpapercave.com/wp/V5lryUt.jpg");
`;

const RipCentralHomePage = () => {
  return (
    <>
      <Navbar />
      <HomePageBackgroundImage>
        <RipCentralHomePageHeader />
      </HomePageBackgroundImage>
    </>
  );
};
export default RipCentralHomePage;
