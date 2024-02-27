import { imageCDN } from "../../utils/urlLinks";
import "./restaurantcard.css";

const RestaurantCard = ({resItem}) => {
    return (
      <div className="m-4 p-4 w-[400px] h-[400px] bg-slate-300 flex justify-center items-center flex-col hover:bg-slate-400">
        <img
          src={imageCDN + resItem?.info?.cloudinaryImageId}
          alt="restaurant-card"
          className="h-52 w-[350px] p-1"
        />
        <br />
        <div className="self-start w-full px-4">
          <h3>{resItem?.info?.name}</h3>
          <h4 className="break-words m-0 w-full whitespace-normal overflow-hidden">
            {resItem?.info?.cuisines.join(",")}
          </h4>
          <h4>{resItem?.info?.avgRatingString} stars</h4>
          <h4>{resItem?.info?.sla?.deliveryTime} minutes</h4>
        </div>
      </div>
    );
}

export default RestaurantCard;