import React from "react";
import styled from "styled-components";
import { faCannabis, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { limeGreen, lizardGreen } from "../styles/colors";

const Container = styled.div`
  position: absolute;
  top: 0;
  text-align: center;
  margin-top: 15em;
  margin-left: 7em;
`;
const HeaderIconContainer = styled.div`
  display: flex;
  margin-top: 3em;
  height: 50vh;
  width: 100%;
  color: ${limeGreen};
`;
const RipCentralHomeHeader = styled.h1`
  font-family: "Nunito sans", sans-serif;
  font-weight: 300;
  font-size: 2.5em;
  .icon {
    font-size: 0.5em;
    margin-bottom: 0.9em;
  }
`;

const SloganContainer = styled.div`
  max-width: 40em;
  margin-top: -2em;
`;

const Slogan = styled.p`
  font-size: 3em;
  font-weight: 300;
  font-family: "Nunito sans", sans-serif;
  color: white;
`;
const Button = styled.button`
  color: white;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 8px;
  font-family: "Nunito sans", sans-serif;
  font-size: 1.5em;
  padding: 0.3em;
  font-weight: 300;
  margin-top: -2em;
  margin-left: -10em;

  :hover {
    background-color: ${limeGreen};
    border: 1px solid ${limeGreen};
  }
`;

const RipCentralHomePageHeader = () => {
  return (
    <>
      <Container>
        <HeaderIconContainer>
          <div>
            <RipCentralHomeHeader>
              ripCentral
              <FontAwesomeIcon className="icon" icon={faCannabis} />
            </RipCentralHomeHeader>
            <SloganContainer>
              <Slogan>
                Unifying marijuana accessories and unbeatable prices.
              </Slogan>
            </SloganContainer>
            <div style={{ marginLeft: "14.5em" }}>
              <Button>
                More <FontAwesomeIcon className="icon" icon={faArrowDown} />
              </Button>
            </div>
          </div>
        </HeaderIconContainer>
      </Container>
    </>
  );
};

export default RipCentralHomePageHeader;
