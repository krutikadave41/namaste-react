import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RES_LOGO } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);
  const cartItems = useSelector((store)=> store.cart.items);
  return (
    <div className="flex justify-between bg-amber-100 shadow-lg">
      <div className="logo-container">
        <img className="w-48" src={RES_LOGO}></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
          <Link to="/cart">Cart ({cartItems.length} items) </Link>
          </li>
          <button
            className="btn-login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">
            <div className="font-bold">{userData.loggedInUser}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
