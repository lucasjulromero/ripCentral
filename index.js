import React from "react";
import HomePageIndex from "./pages/home";
import CheckoutIndex from "./pages/checkout";
import Link from "next/link";

const App = () => {
  return (
    <>
      <Link href="/home">
        <HomePageIndex />
      </Link>
      <Link href="/checkout">
        <CheckoutIndex />
      </Link>
    </>
  );
};

export default App;
