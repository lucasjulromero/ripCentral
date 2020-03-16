import React from "react";
import styled from "styled-components";
import {
  darkGrey,
  lightGrey,
  mediumGrey,
  lizardGreen,
  limeGreen
} from "../styles/colors";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Pagination } from "@material-ui/lab";
import { red } from "@material-ui/core/colors";

const topSellers = [
  {
    imgUrl:
      "https://thumbs.nosto.com/quick/magento-grassus/8/10636/18592e3a4d4960598603f5509cd2ee82b7432de55cd354810186f5e839e3bb4fa/A",
    name: "Sus Bong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$30.00"
  },
  {
    imgUrl:
      "https://media.gettyimages.com/photos/smoking-glass-pipe-picture-id496888034?b=1&k=6&m=496888034&s=612x612&w=0&h=vNSnB6z0px0Fsc4xBXslnmzkggaCm9dFyi2tq-do2Jk=",
    name: "Extra Piece",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$5.00"
  },
  {
    imgUrl:
      "https://i1.wp.com/cbdgreenvalley.com/wp-content/uploads/2019/12/grav-upright-pocket-bubbler.jpg?fit=400%2C500&ssl=1",
    name: "A Bubbler fs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$19.00"
  },
  {
    imgUrl:
      "https://www.grasscity.com/media/catalog/product/cache/efe85777930b284290f92120a6605dd3/1088.jpg",
    name: "One Hit Wonder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$2.00"
  },
  {
    imgUrl:
      "https://i1.wp.com/cbdgreenvalley.com/wp-content/uploads/2019/12/grav-upright-pocket-bubbler.jpg?fit=400%2C500&ssl=1",
    name: "Grind City All Stars",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$2.50"
  },
  {
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71Beu60TDVL._AC_SX425_.jpg",
    name: "Pre-Rolled Cone Filler",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$10.50"
  }
];

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  margin-bottom: 8em;

  .header-input-container {
    display: flex;
    margin-left: 11em;
    margin-top: 3em;
  }
`;

const TopSellers = styled.h1`
  color: ${lizardGreen};
  font-family: "Nunito sans", sans-serif;
  font-weight: 300;
  font-size: 3em;
  text-align: center;
  margin-top: 1.8em;
`;

const TopSellerItemsContainer = styled.div`
  width: 90vw;
  margin-left: 4em;
  font-weight: 300;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const TopSellerImage = styled.img`
  object-fit: contains;
  height: 20em;
  width: 20em;
`;
const Name = styled.p`
  color: ${lightGrey};
  font-weight: 300;
  font-size: 2em;
  font-family: "Nunito sans", sans-serif;
`;
const Description = styled.p`
  color: ${lightGrey};
  max-width: 20em;
  font-family: "Nunito sans", sans-serif;
`;
const Price = styled.p`
  color: ${limeGreen};
  max-width: 20em;
  font-size: 1.5em;
  font-family: "Nunito sans", sans-serif;
`;
const ViewButton = styled.button`
  font-weight: 300;
  border: 1px solid ${limeGreen};
  color: ${limeGreen};
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 4px;
  font-family: "Nunito sans", sans-serif;
  font-size: 1.2em;
  margin-top: 1em;
  margin-left: 1.5em;
  padding: auto;
  max-height: 1.5em;
  :hover {
    background-color: ${lizardGreen};
    color: white;
    border: 1px solid ${lizardGreen};
  }
`;
const RipCentralTopSellers = () => {
  return (
    <>
      <Container>
        <div className="header-input-container">
          <TopSellers>Top Sellers</TopSellers>
          <div style={{ display: "flex", marginLeft: "40em" }}>
            <div style={{ marginTop: "2.2em", marginLeft: "2em" }}>
              <p
                style={{
                  fontFamily: "Nunito sans, sans-serif",
                  color: `${lizardGreen}`,
                  fontWeight: "300"
                }}
              >
                View the past
              </p>
              <select
                style={{
                  width: "20em",
                  height: "3em",
                  fontSize: "1em",
                  color: `${lizardGreen}`,
                  fontWeight: "300",
                  border: `${lizardGreen}`
                }}
              >
                <option>24 hours</option>
                <option>3 days</option>
                <option>7 days</option>
                <option>30 days</option>
              </select>
            </div>
            <div style={{ marginTop: "5.2em" }}>
              <ViewButton>Filter</ViewButton>
            </div>
          </div>
        </div>
        <TopSellerItemsContainer>
          {topSellers.map(i => {
            return (
              <>
                <div style={{ marginLeft: "7.5em" }}>
                  <TopSellerImage src={i.imgUrl} />
                  <Name>{i.name}</Name>
                  <Description>{i.description}</Description>
                  <div style={{ display: "flex" }}>
                    <Price>{i.price}</Price>
                    <ViewButton>Bookmark</ViewButton>
                    <ViewButton>View</ViewButton>
                  </div>
                </div>
              </>
            );
          })}
          {/* <Pagination count={3} variant="outlined" /> */}
        </TopSellerItemsContainer>
      </Container>
    </>
  );
};

export default RipCentralTopSellers;
