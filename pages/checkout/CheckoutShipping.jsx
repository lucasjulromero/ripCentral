import React from "react";
import ContactInfoConfirmation from "../../components/checkout/CheckoutShipping/ContactInfoConfirmation";
import ShippingMethod from "../../components/checkout/CheckoutShipping/ShippingMethod";

const CheckoutShipping = () => {
  return (
    <>
      <ContactInfoConfirmation />
      <ShippingMethod />
    </>
  );
};
export default CheckoutShipping;
