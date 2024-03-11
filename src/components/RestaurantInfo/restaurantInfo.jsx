import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { imageCDN } from "../../utils/urlLinks";
// import SpiningLoader from "../Loaders/loading1";
import ShimmerGroup from "../Loaders/shimmerGroup";
import RestaurantMenu from "./RestaurantMenu/restaurantMenu";
import "./restaurantInfo.css";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  // Lifted the state up from the RestaurantMenu component to make the accordion close once one accordion gets opened
  const [showItems, setShowItems] = useState(null);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5175862&lng=88.3494328&restaurantId=" +
        resId
    );
    const parseData = await data.json();
    setResInfo(parseData?.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleShowItems=(index)=>{
    index === showItems ? setShowItems(null) : setShowItems(index);
  }

  return resInfo ? (
    <div className="res-container">
      <div className="font-bold text-xl text-center">{resInfo?.cards[0]?.card?.card?.info?.name}</div>
      <img
        src={imageCDN + resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId}
        className="h-52 w-52 mx-auto"
      />
      <div className="text-xl font-bold text-center">
        {resInfo?.cards[0]?.card?.card?.info?.cuisines?.join(",")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </div>
      <div>
        {resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map(
          (item,index) => {
            return <RestaurantMenu key={index} index={index} menu={item} showItems={showItems} setShowItems={()=>handleShowItems(index)}/>;
          }
        )}
      </div>
    </div>
  ) : (
    <div>
      <ShimmerGroup style={{ marginTop: "10px" }} />
    </div>
  );
};

export default RestaurantInfo;
