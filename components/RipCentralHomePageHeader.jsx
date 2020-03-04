import React from "react";
import styled from "styled-components";
import { faCannabis, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { limeGreen, lizardGreen } from "../styles/colors";

const Container = styled.div`
  height: 30em;
  width: 30em;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  top: 0;
  margin-top: 15em;
  margin-left: 7em;
`;
const HeaderIconContainer = styled.div`
  display: flex;
  margin-top: 5em;
  height: 50vh;
  width: 100%;
  color: ${limeGreen};
`;
const RipCentralHomeHeader = styled.h1`
  font-family: "Nunito sans", sans-serif;
  font-weight: 300;
  font-size: 4em;
  margin-left: 1.4em;

  .icon {
    font-size: 0.5em;
    margin-left: 0.2em;
    margin-bottom: 0.9em;
  }
`;

const SloganContainer = styled.div`
  max-width: 25em;
  margin-top: -0.8em;
`;

const Slogan = styled.p`
  font-size: 1.6em;
  font-weight: 300;
  font-family: "Nunito sans", sans-serif;
  margin-left: 5em;
  color: white;
`;
const Button = styled.button`
  color: ${limeGreen};
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px solid ${limeGreen};
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  font-family: "Nunito sans", sans-serif;
  font-size: 1.5em;
  padding: 0.3em;
  font-weight: 300;
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
            <div style={{ marginLeft: "11em" }}>
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
