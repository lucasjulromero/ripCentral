import React from "react";
import styled from "styled-components";
import { limeGreen, darkGrey, lizardGreen } from "../styles/colors";
import {
  faCannabis,
  faShoppingCart,
  faUserCircle,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  height: 5em;
  display: grid;
  grid-template-columns: 15% 60% 25%;
  grid-template-rows: 35%;
  box-shadow: 0px 1px 7px ${darkGrey};
  background-color: ${darkGrey};
`;

export const RipCentralLogo = styled.h1`
  font-family: "Nunito sans", sans-serif;
  color: ${lizardGreen};
  font-size: 2em;
  grid-column: 1 / span 2;
  padding-left: 1em;
  font-weight: 300;
  display: flex;
`;

export const CannabisContainer = styled.div`
  font-size: 0.6em;
  margin-left: 0.1em;
`;

const LinkContainer = styled.div`
  grid-column: 2 / span 2;
  grid-template-columns: 25% 25% 25% 25%;
  margin-left: 15em;
`;

const NavLink = styled.a`
  margin-left: 3.5em;
  font-family: "Nunito sans", sans-serif;
  font-size: 1.3em;
  font-weight: 300;
  color: white;
  cursor: pointer;

  :hover {
    color: ${limeGreen};
    border-bottom: 1px solid ${limeGreen};
  }
`;

const IconsContainer = styled.div`
  color: ${limeGreen};
  grid-column: 3 / span 2;
  font-size: 1.5em;
  margin-top: -1.5em;
  margin-left: 6em;
`;

const Icons = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin-left: 2em;
  color: white;
  cursor: pointer;
  :hover {
    color: ${limeGreen};
    border-bottom: 1px solid ${limeGreen};
  }
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
        <LinkContainer>
          <NavLink>Shop</NavLink>
          <NavLink>Learn</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Cannabis Chronicles</NavLink>
        </LinkContainer>
        <IconsContainer>
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faUserCircle} />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faSearch} />
            </Icon>
          </Icons>
        </IconsContainer>
      </NavbarContainer>
    </>
  );
};
export default Navbar;
