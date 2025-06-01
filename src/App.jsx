import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Admin from "./components/pages/admin/Admin";
import { ToastContainer } from "react-toastify";
import Menu from "./components/pages/menu/Menu";
import Order from "./components/pages/orders/Order";

function App() {
  let routes = [
    {
      id: 1,
      path: "/",
      element: <Menu />,
    },
    {
      id: 2,
      path: "/orders",
      element: <Order />,
    },
    {
      id: 3,
      path: "/admin",
      element: <Admin />,
    },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
