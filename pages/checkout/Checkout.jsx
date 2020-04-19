import React from "react";
import Link from "next/link";
import CheckoutInformation from "./CheckoutInformation";
import CheckoutShipping from "./CheckoutShipping";
import CheckoutPayment from "./CheckoutPayment";

const Checkout = () => {
  return (
    <>
      <Link href="/checkout/CheckoutInformation">
        <CheckoutInformation />
      </Link>
      <Link href="/checkout/CheckoutShipping">
        <CheckoutShipping />
      </Link>
      <Link href="checkout/CheckoutPayment">
        <CheckoutPayment />
      </Link>
    </>
  );
};
export default Checkout;
