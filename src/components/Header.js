import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RES_LOGO } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);
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
          <li className="px-4">Cart</li>
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
