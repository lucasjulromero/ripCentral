import React from "react";
import Link from "next/link";
import Checkout from "../checkout/Checkout";

const CheckoutIndex = () => (
  <>
    <Link href="/checkout/Checkout">
      <Checkout />
    </Link>
  </>
);

export default CheckoutIndex;
