import React from "react";
import styled from "styled-components";
import { limeGreen, mintCream } from "../styles/colors";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarContainer = styled.div`
  background-color: ${limeGreen};
  width: 100vw;
  height: 5em;
  display: grid;
  grid-template-columns: 25% 75%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 1px 6px black;
`;

const RipCentralLogo = styled.h1`
  font-family: "Nunito sans", sans-serif;
  color: ${mintCream};
  font-size: 2em;
  grid-column: 1 / span 2;
  padding-left: 1em;
  font-weight: 500;
  display: flex;
`;

const CannabisContainer = styled.div`
  font-size: 0.6em;
  margin-left: 0.1em;
`;
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <RipCentralLogo>
          ripCentral
          <CannabisContainer>
            <FontAwesomeIcon icon={faCannabis} />
          </CannabisContainer>
        </RipCentralLogo>
      </NavbarContainer>
    </>
  );
};
export default Navbar;
