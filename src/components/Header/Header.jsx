import "./header.css";
import Restaurant from "../../Static/Images/Restaurant.png";

const Header = () => {
  return (
    <div className='head-container'>
      <div>
        <img src={Restaurant} alt="Restaurant-image" style={{width:"150px",height:"90px"}}/>
      </div>
      <div className="nav-head">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;