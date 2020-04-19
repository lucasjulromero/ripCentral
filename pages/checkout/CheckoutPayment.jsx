import React from "react";
import BillingAddressConfirmation from "../../components/checkout/CheckoutPayment/BillingAddressConfirmation";
import Payment from "../../components/checkout/CheckoutPayment/Payment";
import Navbar from "../../components/HomePage/Navbar.jsx";

const CheckoutPayment = () => {
  return (
    <>
      <Navbar />
      <BillingAddressConfirmation />
      <Payment />
    </>
  );
};
export default CheckoutPayment;
