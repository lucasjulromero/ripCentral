import React from "react";
// import { RipCentralLogo, CannabisContainer } from "./Navbar.jsx";
// import { faCannabis } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lizardGreen, lightGrey, darkGrey } from "../styles/colors";

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
          gridTemplateRows: "18% 12% 70%",
          boxShadow: "4px -5px 9px -5px black",
          position: "absolute"
        }}
      >
        {/* <RipCentralLogo className="footer">
          ripCentral
          <CannabisContainer>
            <FontAwesomeIcon icon={faCannabis} />
          </CannabisContainer>
        </RipCentralLogo> */}
        <p
          style={{
            gridRow: "1 / 3",
            marginLeft: "2em",
            fontWeight: 300,
            fontFamily: "Nunito sans, sans-serif",
            color: `${lizardGreen}`
          }}
        >
          Est. 2020
        </p>
        <h3
          style={{
            gridColumn: "2 / span 2",
            fontWeight: 300,
            gridRow: "3 / 3",
            maxWidth: "25em",
            marginTop: "-2em",
            marginLeft: "12.3em",
            fontFamily: "Nunito sans, sans-serif",
            color: `${lizardGreen}`
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
            marginTop: "-0.5em",
            marginLeft: "18em",
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
            marginTop: "-2em",
            marginLeft: "8.5em",
            fontFamily: "Nunito sans, sans-serif",
            color: `${lizardGreen}`
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
            marginTop: "-0.5em",
            marginLeft: "12.7em",
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
