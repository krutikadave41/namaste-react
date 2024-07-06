import React from "react";
import ReactDOM from "react-dom/client";
import { RES_IMG_CDN } from "./config";
import { resList } from "./restaurents.js";
/**
 * Header
 * - Logo
 * - NavItems
 *
 * Body
 * - Search Component
 * - Restaurent Container
 *   - Restaurent Cards
 *      - Img
 *      - Restaurent Name, Rating, Delivery Time, Cuisine
 * Footer
 * - Copyrights
 * - Links
 * - Address
 * - Contact
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurentCard = (props) => {
  const resData = props?.resData;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = resData?.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_IMG_CDN + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resData) => (
          <RestaurentCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
