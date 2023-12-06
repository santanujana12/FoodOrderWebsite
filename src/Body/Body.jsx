import RestaurantCard from "../Restaurant Card/RestaurantCard";
import "./body.css";

const Body = () => {
    return (
        <div className="body-container">
            <div>
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div><br />
            <div style={{display:"flex", flexWrap:"wrap"}}>
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
}
export default Body;