import React from "react";
import "../../styles/home.scss";
import Menu from "./Menu";
const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <h1>Food Delivery</h1>
          <p>Give yourself a tasty food</p>
        </div>
        <a href="#menu">Explore </a>
      </section>
      <Menu />
    </>
  );
};

export default Home;
