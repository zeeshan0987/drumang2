import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";
import { FaCircle,FaRegCircle } from "react-icons/fa";

const Payment = () => {
  return (
    <>
      <Header />
      <section className="payment-main">
      <div className="shipping-1">
                  <div className="shipping-2">
                  <FaCircle/>
                  <Link className="" href="">Sign In</Link>
                  </div>
                  <div className="shipping-2">
                  <FaCircle/>
                  <Link className="" href="">Shipping</Link>
                  </div>
                  <div className="shipping-2">
                  <FaCircle/>
                  <Link className="" href="" >Payment</Link>
                  </div>
                  <div className="shipping-2">
                  <FaRegCircle/>
                  <Link className="" href="">Place Order</Link>
                  </div>
        </div>
              <h1>Payment Method</h1>
              <div className="payment-1">
              <input type="radio" id="Credit/Debit-Card" name="Credit/Debit-Card" value="Credit/Debit Card" checked onChange={()=>handleChange()} />
              <label >Credit/Debit Card</label><br/>
              <input type="radio" id="PayPal-Account" name="Credit/Debit-Card" value="PayPal-Account"/>
              <label >PayPal Account</label><br/>
              </div>
              <Link href="/Placeorder" className="btn-grad"> Continue </Link>
      </section>
      <Footer />
    </>
  );
};

export default Payment;
