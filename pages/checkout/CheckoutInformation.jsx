import React from "react";
import ContactInformation from "../../components/checkout/CheckoutInformation/ContactInformation";
import ShippingAddress from "../../components/checkout/CheckoutInformation/ShippingAddress";
const CheckoutInformation = () => {
  return (
    <>
      <ContactInformation />
      <ShippingAddress />
    </>
  );
};
export default CheckoutInformation;
