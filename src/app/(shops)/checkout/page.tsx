import { Fragment } from "react";
// CUSTOM UTILS LIBRARY FUNCTIONS
import currency from "utils/currency";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { ProductCard2 } from "components/reuseable/product-cards";
import { Checkbox, Input, Select } from "components/elements/checkout-form";
// CUSTOM DATA
import { breadcrumb, orderProducts, orderSummeryRow } from "data/checkout-page";

export default function Checkout() {
  return (
    <Fragment>
      {/* ========== breadcrumb section ========== */}
      <section className="wrapper bg-gray">
        <div className="container py-3 py-md-5">
          <Breadcrumb data={breadcrumb} className="mb-0" />
        </div>
      </section>

      <div className="wrapper bg-light">
        <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
          <div className="row gx-md-8 gx-xl-12 gy-12">
            {/* ========== shipping section ========== */}
            <div className="col-lg-8">
              <div className="alert alert-primary alert-icon mb-6" role="alert">
                <i className="uil uil-exclamation-circle"></i> Already have an account?{" "}
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  className="alert-link hover"
                  data-bs-target="#modal-signin">
                  Sign in
                </a>{" "}
                for faster checkout experience.
              </div>

              <h3 className="mb-4">Billing address</h3>

              <form className="needs-validation">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <Input type="text" id="firstName" placeholder="First name" label="First name" />
                  </div>

                  <div className="col-sm-6">
                    <Input type="text" id="lastName" placeholder="Last name" label="Last name" />
                  </div>

                  <div className="col-12">
                    <Input type="email" id="email" placeholder="you@example.com" label="Email" />
                  </div>

                  <div className="col-12">
                    <Input type="text" id="address" placeholder="1234 Main St" label="Address" />
                  </div>

                  <div className="col-12">
                    <Input type="text" id="address2" placeholder="Apartment or suite" label="Address 2 (Optional)" />
                  </div>

                  <div className="col-md-5">
                    <Select
                      required
                      id="country"
                      label="Country"
                      options={[{ title: "United States", value: "usa" }]}
                    />
                  </div>

                  <div className="col-md-4">
                    <Select
                      required
                      id="state"
                      label="State"
                      options={[{ title: "California", value: "california" }]}
                    />
                  </div>

                  <div className="col-md-3">
                    <Input type="text" id="zip" placeholder="Zip Code" label="Zip Code" />
                  </div>
                </div>

                <hr className="mt-7 mb-6" />

                <Checkbox defaultChecked id="same-address" label="Shipping address is the same as my billing address" />
                <Checkbox id="save-info" label="Save this information for next time" />

                <hr className="mt-7 mb-6" />
                <h3 className="mb-4">Payment</h3>

                <div className="mt-3 mb-6">
                  <Checkbox required id="credit" type="radio" defaultChecked label="Credit card" name="paymentMethod" />
                  <Checkbox type="radio" name="paymentMethod" id="debit" label="Debit card" required />
                  <Checkbox type="radio" name="paymentMethod" id="paypal" label="PayPal" required />
                </div>

                <div className="row gy-3 gx-3">
                  <div className="col-md-12">
                    <Input
                      required
                      type="text"
                      id="cc-number"
                      label="Credit card number"
                      placeholder="Credit card number"
                    />
                  </div>

                  <div className="col-md-6">
                    <Input required type="text" id="cc-name" label="Credit card number" placeholder="Name on card" />
                  </div>

                  <div className="col-md-3">
                    <Input required type="text" id="cc-expiration" placeholder="Expiration" label="Expiration date" />
                  </div>

                  <div className="col-md-3">
                    <Input required type="text" id="cc-cvv" placeholder="CVV" label="Security code" />
                  </div>
                </div>
              </form>
            </div>

            {/* ========== order summary section ========== */}
            <div className="col-lg-4">
              <h3 className="mb-4">Order Summary</h3>

              <div className="shopping-cart mb-7">
                {orderProducts.map((item) => (
                  <ProductCard2 {...item} key={item.id} />
                ))}
              </div>

              <hr className="my-4" />
              <h3 className="mb-2">Shipping</h3>

              <div className="mb-5">
                <div className="form-check mb-2">
                  <input id="standard" name="shippingMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="standard">
                    Free - Standard delivery
                  </label>
                  <small className="text-muted d-block">Shipment may take 5-6 business days</small>
                </div>

                <div className="form-check">
                  <input
                    required
                    id="express"
                    type="radio"
                    defaultChecked
                    name="shippingMethod"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="express">
                    $10 - Express delivery
                  </label>
                  <small className="text-muted d-block">Shipment may take 2-3 business days</small>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-order">
                  <tbody>
                    {orderSummeryRow.map(({ name, value }) => (
                      <tr key={name}>
                        <td className="ps-0">
                          <strong className="text-dark">{name}</strong>
                        </td>

                        <td className={value.parentClass}>
                          <p className={value.childClass}>
                            {name === "Discount" && "-"}
                            {currency(value.amount)}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button type="submit" className="btn btn-primary rounded w-100 mt-4">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
