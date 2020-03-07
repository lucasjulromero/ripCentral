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
    imgUrl: "https://thumbs.dreamstime.com/b/glass-pipe-12720785.jpg",
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
      "https://lh3.googleusercontent.com/proxy/88GnbPnJAcbrfJD1oJ2659yy5TtQN90BEjGa-XVOhrRzX7JKBniS0165iQhEhaMx2LI6E3pJ0pjbXls-2kDFEFt-xzghGl0BgBFX1WCJSFMQBbwymqIhSSt_Lb6dDPvtNPQygt19BvAxG5M4hd2sMtZ-zDc",
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
  margin-left: -0.5em;

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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    marginTop: 82,
    marginLeft: 60,
    fontFamily: "Nunito sans, sans-serif"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
const RipCentralTopSellers = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <div className="header-input-container">
          <TopSellers>Top Sellers</TopSellers>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">
              View top from the past
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={3}>3 days</MenuItem>
              <MenuItem value={7}>7 days</MenuItem>
              <MenuItem value={30}>30 days</MenuItem>
            </Select>
          </FormControl>
          <div style={{ marginTop: "5.3em", marginLeft: "-1em" }}>
            <ViewButton>Filter</ViewButton>
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
