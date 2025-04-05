import { useState } from "react";
import clsx from "clsx";
// GLOBAL CUSTOM COMPONENTS
import Switch from "components/reuseable/Switch";
import NextLink from "components/reuseable/links/NextLink";
import { PricingCard1 } from "components/reuseable/pricing-cards";
// CUSTOM DATA
import { pricingList1 } from "data/pricing";

export default function Pricing3() {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6 mb-16 mb-md-18">
      <div className="col-lg-4">
        <h2 className="fs-16 text-uppercase text-line text-primary mt-lg-18 mb-3">Our Pricing</h2>
        <h3 className="display-4 mb-3">We offer great and premium prices.</h3>

        <p>
          Enjoy a <NextLink title="free 30-day trial" href="#" className="hover" /> and experience the full service. No
          credit card required!
        </p>

        <NextLink href="#" title="See All Prices" className="btn btn-primary rounded mt-2" />
      </div>

      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
          <p className="mb-0 pe-3">Monthly</p>

          <Switch value={activeYearly} onChange={() => setActiveYearly((prev) => !prev)} />

          <p className="mb-0 ps-3">
            Yearly <span className="text-red">(Save 30%)</span>
          </p>
        </div>

        <div className="row gy-6 position-relative mt-5">
          <div
            className="shape rounded-circle bg-soft-primary rellax w-18 h-18"
            style={{ top: "-1rem", left: "-2rem" }}
          />

          <div className="shape bg-dot red rellax w-16 h-18" style={{ right: "-1.6rem", bottom: "-0.5rem" }} />

          {pricingList1.map((item, i) => (
            <div className={clsx({ "col-md-6": true, popular: i === 1 })} key={i}>
              <PricingCard1 roundedButton bulletBg {...item} activeYearly={activeYearly} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
