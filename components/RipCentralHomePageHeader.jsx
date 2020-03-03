import React from "react";
import styled from "styled-components";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { seaGreen, peachPuff } from "../styles/colors";

const Container = styled.div`
  height: 30em;
  width: 30em;
  border: 2px solid ${peachPuff};
  border-radius: 50%;
  margin-left: 10em;
  margin-top: 10em;
`;
const HeaderIconContainer = styled.div`
  display: flex;
  margin-top: 5em;
  height: 50vh;
  width: 100%;
  color: ${peachPuff};
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
  max-width: 20em;
`;

const Slogan = styled.p`
  font-size: 1.6em;
  font-weight: 300;
  font-family: "Nunito sans", sans-serif;
  margin-left: 3.5em;
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
          </div>
        </HeaderIconContainer>
      </Container>
    </>
  );
};

export default RipCentralHomePageHeader;
