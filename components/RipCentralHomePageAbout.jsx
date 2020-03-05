import React from "react";
import styled from "styled-components";
import {
  darkGrey,
  lightGrey,
  mediumGrey,
  lizardGreen,
  limeGreen
} from "../styles/colors";

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
      "https://www.water-bongs-glass-pipes.com/3965/oil-glass-smoking-pipe-green-marbles.jpg",
    name: "Extra piece",
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
      "https://cdn.shopify.com/s/files/1/2480/0092/products/1_3a3040ee-e945-4d57-8cab-12d7fe97f10c_2000x.jpg?v=1508712142",
    name: "Grinder City All Stars",
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
  margin-left: -0.5em;
`;

const TopSellers = styled.h1`
  color: ${lizardGreen};
  font-family: "Nunito sans", sans-serif;
  font-weight: 300;
  font-size: 5em;
  text-align: center;
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
const Button = styled.button`
  color: white;
  font-weight: 300;
  background-color: ${limeGreen};
  background-color: ${limeGreen};
  background-repeat: no-repeat;
  border: 1px solid ${limeGreen};
  cursor: pointer;
  border-radius: 4px;
  font-family: "Nunito sans", sans-serif;
  font-size: 1.2em;
  margin-top: 1em;
  margin-left: 9.5em;
  padding: auto;
  max-height: 1.5em;
  :hover {
    border: 1px solid ${limeGreen};
  }
`;
const RipCentralHomePageAbout = () => {
  return (
    <>
      <Container>
        <TopSellers>Top Sellers</TopSellers>
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
                    <Button>View</Button>
                  </div>
                </div>
              </>
            );
          })}
        </TopSellerItemsContainer>
      </Container>
    </>
  );
};

export default RipCentralHomePageAbout;
