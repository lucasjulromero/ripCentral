import React from "react";
import styled from "styled-components";
import RipCentralHomePageHeader from "../components/RipCentralHomePageHeader.jsx";
import RipCentralTopSellers from "../components/RipCentralTopSellers";
import RipCentralHomePageAbout from "../components/RipCentralHomePageAbout";
import Navbar from "../components/Navbar";
import { darkGrey } from "../styles/colors";

const HomePageBackgroundImage = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 0.9;
  box-shadow: 0px 1px 7px ${darkGrey};
  margin-left: -0.5em;
  margin-bottom: -1.4em;
  filter: contrast(90%);
  background-image: url("https://images.unsplash.com/photo-1564171149171-1b0e8c0e0bef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2310&q=80");
`;

const RipCentralHomePage = () => {
  return (
    <>
      <Navbar />
      <HomePageBackgroundImage />
      <RipCentralHomePageHeader />
      <RipCentralHomePageAbout />
      <RipCentralTopSellers />
    </>
  );
};
export default RipCentralHomePage;
