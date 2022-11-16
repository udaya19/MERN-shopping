import React from "react";
import "../../styles/shipping.scss";

const Shipping = () => {
  return (
    <div>
      <section className="shipping">
        <main>
          <h1>Shipping Details</h1>
          <form action="">
            <div>
              <label htmlFor="hno">H.No.</label>
              <input type="text" placeholder="Enter house number" id="hno" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input type="text" placeholder="Enter city" id="city" />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <select name="country" id="country">
                <option value="country">Country</option>
                <option value="india">India</option>
              </select>
            </div>
            <div>
              <label htmlFor="state">State</label>
              <select name="state" id="state">
                <option value="state">State</option>
                <option value="andhra">Andhra Pradesh</option>
              </select>
            </div>
            <div>
              <label htmlFor="pincode">Pincode</label>
              <input type="number" placeholder="Enter pincode" id="pincode" />
            </div>
            <div>
              <label htmlFor="number">Phone Number</label>
              <input
                type="number"
                placeholder="Enter phone number"
                id="number"
              />
            </div>
            <button type="submit">Confirm Order</button>
          </form>
        </main>
      </section>
    </div>
  );
};

export default Shipping;
