import { imageCDN } from "../../utils/urlLinks";
import "./restaurantcard.css";

const RestaurantCard = ({resItem}) => {
    return (
        <div className="restaurant-card">
            <img src={imageCDN+resItem?.info?.cloudinaryImageId}
                alt="restaurant-card" style={{ width: "250px", height: "150px", marginLeft: "20px", marginTop: "5px" }} />
                <br />
            <h3 style={{margin:0}}>{resItem?.info?.name}</h3>
            <h4 style={{margin:0}}>{resItem?.info?.cuisines.join(",")}</h4>
            <h4 style={{margin:0}}>{resItem?.info?.avgRatingString} stars</h4>
            <h4 style={{margin:0}}>{resItem?.info?.sla?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;