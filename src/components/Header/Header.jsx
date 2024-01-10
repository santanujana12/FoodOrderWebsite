import { Link } from "react-router-dom";

import "./header.css";
import Restaurant from "../../Static/Images/Restaurant.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
