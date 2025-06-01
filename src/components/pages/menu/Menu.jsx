import React, { useContext } from "react";
import "./Menu.scss";
import ProductCard from "../../ui/productCard/ProductCard";
import { ProductsContext } from "../../../context";

const Menu = () => {

  const { data } = useContext(ProductsContext)

  return (
    <div id="menu">
      <div className="container">
        <center>
          <h1>MENU</h1>
        </center>
        <div className="menu">
          {data.map((el) => (
            <ProductCard key={el._id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
