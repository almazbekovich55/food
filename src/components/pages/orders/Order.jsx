import React, { useContext, useEffect } from "react";
import "./Order.scss";
import { ProductsContext } from "../../../context";

const Order = () => {
  const { order, setOrder } = useContext(ProductsContext);

  const getOrder = () => {
    const storedOrder = localStorage.getItem("basket");
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  };

  const deleteOrder = (id) => {
    const updatedOrder = order.filter((el) => el._id !== id);
    setOrder(updatedOrder);
    localStorage.setItem("basket", JSON.stringify(updatedOrder));
  };

  const incrementQuantity = (productId) => {
    const updatedOrder = order.map((el) =>
      el._id === productId ? { ...el, count: el.count + 1 } : el
    );
    setOrder(updatedOrder);
    localStorage.setItem("basket", JSON.stringify(updatedOrder));
  };

  const decrementQuantity = (productId) => {
    const updatedOrder = order.map((el) =>
      el._id === productId
        ? { ...el, count: el.count > 1 ? el.count - 1 : 1 }
        : el
    );
    setOrder(updatedOrder);
    localStorage.setItem("basket", JSON.stringify(updatedOrder));
  };

  const removeItems = () => {
    localStorage.removeItem("basket");
    setOrder([]);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div id="order">
      <div className="container">
        <center>
          <h1>MY ORDERS</h1>
        </center>
        <div className="order">
          {order.map((el) => (
            <div className="order--card" key={el._id}>
              <img src={el.file} alt={el.name} />
              <div className="order--card__title">
                <h1>{el.name}</h1>
                <h2>${el.price}</h2>
              </div>
              <div className="order--card__btns">
                <button className="delete" onClick={() => deleteOrder(el._id)}>
                  Delete Order
                </button>
                <div className="order--card__btn">
                  <button onClick={() => decrementQuantity(el._id)}>-</button>
                  <h3>{el.count}x</h3>
                  <button onClick={() => incrementQuantity(el._id)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="button" onClick={() => removeItems()}>
          Delete All Items
        </button>
      </div>
    </div>
  );
};

export default Order;
