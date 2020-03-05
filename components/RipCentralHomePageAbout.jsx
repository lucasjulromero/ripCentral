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
    name: "Bong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$30.00"
  },
  {
    imgUrl:
      "https://www.water-bongs-glass-pipes.com/3965/oil-glass-smoking-pipe-green-marbles.jpg",
    name: "Piece",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$5.00"
  },
  {
    imgUrl:
      "https://i1.wp.com/cbdgreenvalley.com/wp-content/uploads/2019/12/grav-upright-pocket-bubbler.jpg?fit=400%2C500&ssl=1",
    name: "Bubbler",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$19.00"
  },
  {
    imgUrl:
      "https://www.grasscity.com/media/catalog/product/cache/efe85777930b284290f92120a6605dd3/1088.jpg",
    name: "One Hitter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$2.00"
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/2480/0092/products/1_3a3040ee-e945-4d57-8cab-12d7fe97f10c_2000x.jpg?v=1508712142",
    name: "Grinder",
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
  border: 1px solid black;
  width: 90vw;
  margin-left: 4em;
`;

const TopSellerImage = styled.img`
  object-fit: contains;
  height: 30em;
  width: 20em;
`;
const Name = styled.h3`
  font-family: "Nunito sans", sans-serif;
`;
const Description = styled.p`
  font-family: "Nunito sans", sans-serif;
`;
const Price = styled.p`
  font-family: "Nunito sans", sans-serif;
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
                <TopSellerImage src={i.image} />
                <Name>{i.name}</Name>
                <Description>{i.description}</Description>
                <Price>{i.price}</Price>
              </>
            );
          })}
        </TopSellerItemsContainer>
      </Container>
    </>
  );
};

export default RipCentralHomePageAbout;
