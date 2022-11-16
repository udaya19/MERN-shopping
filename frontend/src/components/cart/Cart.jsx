import React from "react";
import "../../styles/cart.scss";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, img, increment, decrement }) => {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};
  return (
    <div>
      <section className="cart">
        <main>
          <CartItem
            img={burger1}
            title={"Cheese Burger"}
            value={0}
            increment={() => increment(1)}
            decrement={() => decrement(1)}
          />
          <CartItem
            img={burger2}
            title={"Veg Cheese Burger"}
            value={0}
            increment={() => increment(2)}
            decrement={() => decrement(2)}
          />
          <CartItem
            img={burger3}
            title={"Cheese Burger with French Fries"}
            value={0}
            increment={() => increment(3)}
            decrement={() => decrement(3)}
          />
          <article>
            <div>
              <h4>Sub Total</h4>
              <p>₹{2000}</p>
            </div>
            <div>
              <h4>Tax</h4>
              <p>₹{2000 * 0.18}</p>
            </div>
            <div>
              <h4>Shipping charges</h4>
              <p>₹{200}</p>
            </div>
            <div>
              <h4>Net Total</h4>
              <p>₹{200 + 2000 + 2000 * 0.18}</p>
            </div>
            <Link to="/shipping">Checkout</Link>
          </article>
        </main>
      </section>
    </div>
  );
};

export default Cart;
