import React from "react";
import BillingAddressConfirmation from "../../components/checkout/CheckoutPayment/BillingAddressConfirmation";
import Payment from "../../components/checkout/CheckoutPayment/Payment";
const CheckoutPayment = () => {
  return (
    <>
      <BillingAddressConfirmation />
      <Payment />
    </>
  );
};
export default CheckoutPayment;
