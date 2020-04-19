import React from "react";
import ContactInfoConfirmation from "../../components/checkout/CheckoutShipping/ContactInfoConfirmation";
import ShippingMethod from "../../components/checkout/CheckoutShipping/ShippingMethod";
import Navbar from "../../components/HomePage/Navbar.jsx";

const CheckoutShipping = () => {
  return (
    <>
      <Navbar />
      <ContactInfoConfirmation />
      <ShippingMethod />
    </>
  );
};
export default CheckoutShipping;
