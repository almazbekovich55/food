import React, { useContext } from "react";
import "./ProductCard.scss";
import { ProductsContext } from "../../../context";
import {  toast, Slide } from "react-toastify";

const ProductCard = ({ el }) => {
  const { order, setOrder, data } = useContext(ProductsContext);

  function toOrder(product) {
    const find = order.find((el) => el._id === product._id);
    if (find) {
      const updatedOrder = order.map((el) =>
        el._id === product._id ? { ...el, count: el.count + 1 } : el
      );
      setOrder(updatedOrder);
      localStorage.setItem("basket", JSON.stringify(updatedOrder));
      toast.success("Продукт успешно добавлен!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,  
      });
    } else {
      const newOrder = [...order, { ...product, count: 1 }];
      setOrder(newOrder);
      localStorage.setItem("basket", JSON.stringify(newOrder));
      toast.success("Продукт успешно добавлен!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  }

  return (
    <div id="productCard">
      <div className="container">
        <div className="productCard">
          {data.map((el) => (
            <div className="productCard--card" key={el._id}>
              <img src={el.file} alt={el.name} />
              <h1>{el.name}</h1>
              <h1>${el.price}</h1>
              <button className="btn" onClick={() => toOrder(el)}>
                to order
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
