import React from "react";
import styled from "styled-components";
import {
  faCannabis
  // faSnapchat,
  // faTwitter,
  // faInstagram
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lizardGreen, limeGreen, lightGrey, darkGrey } from "../styles/colors";

export const RipCentralLogoFooter = styled.h1`
  font-family: "Nunito sans", sans-serif;
  color: ${limeGreen};
  font-size: 1.5em;
  grid-column: 1 / span 2;
  grid-row: 1 / 3;
  padding-left: 1.5em;
  padding-top: 0.6em;
  font-weight: 300;
  display: flex;
`;

export const CannabisContainer = styled.div`
  font-size: 0.6em;
  margin-left: 0.1em;
`;

export const Button = styled.button`
  color: white;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Nunito sans", sans-serif;
  font-size: 1em;
  padding: 0.3em;
  font-weight: 300;
  max-width: 6em;

  :hover {
    background-color: ${lizardGreen};
    border: 1px solid ${lizardGreen};
  }
`;
const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: `${darkGrey}`,
          marginLeft: "-0.5em",
          width: "100%",
          height: "25vh",
          display: "grid",
          gridTemplateColumns: "25% 35% 40%",
          gridTemplateRows: "18% 18% 64%",
          boxShadow: "4px -5px 9px -5px black",
          position: "absolute"
        }}
      >
        <RipCentralLogoFooter>
          ripCentral
          <CannabisContainer>
            <FontAwesomeIcon className="leaf" icon={faCannabis} />
          </CannabisContainer>
        </RipCentralLogoFooter>
        <p
          style={{
            gridColumn: "1 / span 2",
            gridRow: "1 / 3",
            marginLeft: "19em",
            marginTop: "4.9em",
            fontWeight: 300,
            fontFamily: "Nunito sans, sans-serif",
            fontSize: "0.5em",
            color: "white"
          }}
        >
          &copy; 2020 ripCentral. All rights reserved.
        </p>
        {/* THE ICONS BELOW WILL EVENTUALLY BE SNAPCHAT, TWITTER, AND INSTAGRAM */}
        <div
          style={{
            color: "lightblue",
            gridColumn: "1/2 span",
            gridRow: "3/3",
            marginLeft: "1em",
            display: "flex",
            fontSize: "2em"
          }}
        >
          <FontAwesomeIcon className="leaf" icon={faCannabis} />
          <div style={{ marginLeft: "0.5em", color: "brown" }}>
            <FontAwesomeIcon className="leaf" icon={faCannabis} />
          </div>
          <div style={{ marginLeft: "0.5em", color: "yellow" }}>
            <FontAwesomeIcon className="leaf" icon={faCannabis} />
          </div>
        </div>
        <p
          style={{
            gridColumn: "1/2 span",
            gridRow: "3/3",
            marginLeft: "2em",
            marginTop: "3.5em",
            fontWeight: 300,
            fontFamily: "Nunito sans, sans-serif",
            fontSize: "1em",
            color: `${limeGreen}`
          }}
        >
          Subscribe to our newsletter
        </p>
        <div
          style={{
            gridColumn: "1/2 span",
            gridRow: "3/3",
            marginLeft: "2em",
            marginTop: "5em"
          }}
        >
          <input
            style={{ width: "25em", height: "2em", paddingLeft: "1em" }}
            placeholder="youremail@example.com"
          />
        </div>
        <div
          style={{
            gridColumn: "1/2 span",
            gridRow: "3/3",
            marginLeft: "21em",
            marginTop: "5em"
          }}
        >
          <Button>Subscribe</Button>
        </div>
        <h3
          style={{
            gridColumn: "2 / span 2",
            fontWeight: 300,
            gridRow: "3 / 3",
            maxWidth: "25em",
            marginTop: "-2.5em",
            marginLeft: "14em",
            fontFamily: "Nunito sans, sans-serif",
            color: `${limeGreen}`
          }}
        >
          Privacy policy
        </h3>
        <p
          style={{
            fontSize: "0.8em",
            gridColumn: "2 / span 2",
            gridRow: "3 / 3",
            maxWidth: "25em",
            marginTop: "-1.5em",
            marginLeft: "20.5em",
            fontFamily: "Nunito sans, sans-serif",
            color: "white"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3
          style={{
            gridColumn: "3 / span 2",
            fontWeight: 300,
            gridRow: "3 / 3",
            maxWidth: "25em",
            marginTop: "-2.5em",
            marginLeft: "9.5em",
            fontFamily: "Nunito sans, sans-serif",
            color: `${limeGreen}`
          }}
        >
          Terms of use
        </h3>
        <p
          style={{
            fontSize: "0.8em",
            gridColumn: "3 / span 2",
            gridRow: "3 / 3",
            maxWidth: "25em",
            marginTop: "-1.5em",
            marginLeft: "14em",
            fontFamily: "Nunito sans, sans-serif",
            color: "white"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};
export default Footer;
