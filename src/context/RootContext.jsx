import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "./index.js";

const RootContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState([]);

  async function getData() {
    const res = await axios.get(
      `https://api-crud.elcho.dev/api/v1/3babc-002f3-67ca4/foods`
    );
    setData(res.data.data);
  }

  useEffect(() => {
    getData();
    const storedOrder = localStorage.getItem("basket");
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  }, [data]);

  return (
    <ProductsContext.Provider
      value={{
        data,
        setData,
        order,
        setOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default RootContext;
