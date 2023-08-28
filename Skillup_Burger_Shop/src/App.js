import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";// Add module imports for CART
import Shipping from "./pages/shipping/Shipping";
import Modal from "./components/modal/Modal";
import Card from "./components/card/Card";
import Register from "./pages/register/Register";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Profile from "./pages/profile/Profile";

// Add module imports for Shipping

import Login from "./pages/login/Login";
// Add module imports for MY ORDERS

import About from "./pages/about/About";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";




function App() {
  return (
    <Router>
      {/* <Header isAuthenticated={true} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/header" element={<Header />}/>
          //           Add the Route for CART
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/banner" element={<Banner/>} /> */}
          <Route path="/modal" element={<Modal />} />
          <Route path="card" element={<Card/>} />

          //           Add the Route for SHIPPING
          <Route path="/shipping" element={<Shipping />} />

        <Route path="/login" element={<Login />} />
        {<Route path="/me" element={<Profile />} /> }
         //           Add the Route for MY ORDERS
         {/* <Route path="/myOrders" element={<MyOrders />} />

        <Route path="/order/:id" element={<OrderDetails />} /> */}
        <Route path="register" element={<Register />} />




      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
