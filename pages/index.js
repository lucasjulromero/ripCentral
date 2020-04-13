import Link from "next/link";
import RipCentralHomePage from "../pages/home/RipCentralHomePage";
import CheckoutInformation from "../pages/checkout/CheckoutInformation";
import CheckoutShipping from "../pages/checkout/CheckoutShipping";
import CheckoutPayment from "../pages/checkout/CheckoutPayment";

const RipCentralRoot = () => (
  <>
    <Link href="/">
      <RipCentralHomePage />
    </Link>
    <Link href="/checkout/CheckoutInformation">
      <CheckoutInformation />
    </Link>
    <Link href="/checkout/CheckoutShipping">
      <CheckoutShipping />
    </Link>
    <Link href="/checkout/CheckoutPayment">
      <CheckoutPayment />
    </Link>
  </>
);

export default RipCentralRoot;
