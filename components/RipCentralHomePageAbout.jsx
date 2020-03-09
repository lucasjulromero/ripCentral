import React from "react";
import styled from "styled-components";
import {
  faCannabis,
  faHandRock,
  faBong
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  darkGrey,
  lightGrey,
  mediumGrey,
  lizardGreen,
  limeGreen
} from "../styles/colors";

const Container = styled.div`
  min-height: 60vh;
  width: 90vw;
  display: grid;
  justify-content: space-between;
  margin-left: -0.5em;
  grid-template-columns: 46% 5% 46%;
  margin-top: 8em;
`;

const RipCentralHomePageAbout = () => {
  return (
    <>
      <Container>
        <div
          style={{
            marginLeft: "11em",
            maxWidth: "35em",
            backgroundColor: `${darkGrey}`,
            borderRadius: "8px"
          }}
        >
          <h1
            style={{
              gridColumn: "2 / span 2",
              color: "white",
              textAlign: "center",
              fontWeight: "300",
              fontFamily: "Nunito sans, sans-serif"
            }}
          >
            Our mission
          </h1>
          <div style={{ maxWidth: "80%", marginLeft: "3em" }}>
            <p
              style={{
                color: `${limeGreen}`,
                textAlign: "center",
                fontWeight: "300",
                fontFamily: "Nunito sans, sans-serif",
                fontSize: "1.5em"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div
          style={{
            marginLeft: "0.9em",
            fontSize: "6em",
            marginTop: "2em",
            color: `${limeGreen}`
          }}
        >
          <FontAwesomeIcon icon={faCannabis} />
        </div>
        <div
          style={{
            marginLeft: "12.5em",
            maxWidth: "35em",
            backgroundColor: `${limeGreen}`,
            borderRadius: "8px"
          }}
        >
          <h1
            style={{
              gridColumn: "1 / span 2",
              color: "white",
              textAlign: "center",
              fontWeight: "300",
              fontFamily: "Nunito sans, sans-serif"
            }}
          >
            The process
          </h1>
          <div style={{ maxWidth: "80%", marginLeft: "3em" }}>
            <p
              style={{
                color: `${darkGrey}`,
                textAlign: "center",
                fontWeight: "300",
                fontFamily: "Nunito sans, sans-serif",
                fontSize: "1.5em"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
export default RipCentralHomePageAbout;
