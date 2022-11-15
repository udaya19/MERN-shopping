import React from "react";
import "../../styles/menu.scss";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
const Menu = () => {
  return (
    <>
      <section id="menu">
        <h1>MENU</h1>
        <div>
          <MenuCard
            itemNum={1}
            burgerSrc={burger1}
            price={20}
            title={"Cheese Burger"}
          />
          <MenuCard
            itemNum={2}
            burgerSrc={burger2}
            price={500}
            title="Veg Cheese Burger"
            delay={0.5}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            price={1800}
            title="Cheese Burger with French Fries"
            delay={0.8}
          />
        </div>
      </section>
    </>
  );
};

export default Menu;
