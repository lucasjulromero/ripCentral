import React from "react";
import Link from "next/link";
import RipCentralHomePage from "./RipCentralHomePage";

const HomePageIndex = () => (
  <>
    <Link href="/home">
      <RipCentralHomePage />
    </Link>
  </>
);

export default HomePageIndex;
