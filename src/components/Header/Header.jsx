import { Link } from "react-router-dom";

import "./header.css";
import Restaurant from "../../Static/Images/Restaurant.png";
import { useOnline } from "../../utils/CustomHooks/useOnline";

const Header = () => {

  const isOnline = useOnline();

  return (
    <div className="head-container">
      <div>
        <img
          src={Restaurant}
          alt="Restaurant-image"
          style={{ width: "150px", height: "90px" }}
        />
      </div>
      <div className="nav-head">
        <ul>
          <li>{isOnline?"🟢 Online":"🔴 Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
