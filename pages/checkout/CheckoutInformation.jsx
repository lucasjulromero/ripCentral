import React from "react";
import ContactInformation from "../../components/checkout/CheckoutInformation/ContactInformation";
import ShippingAddress from "../../components/checkout/CheckoutInformation/ShippingAddress";
import Navbar from "../../components/HomePage/Navbar.jsx";

const CheckoutInformation = () => {
  return (
    <>
      <Navbar />
      <ContactInformation />
      <ShippingAddress />
    </>
  );
};
export default CheckoutInformation;
