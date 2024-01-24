import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

import { imageCDN } from "../../utils/urlLinks";
// import SpiningLoader from "../Loaders/loading1";
import ShimmerGroup from "../Loaders/shimmerGroup";
import RestaurantMenu from "./RestaurantMenu/restaurantMenu";
import "./restaurantInfo.css";

const RestaurantInfo = () =>{
    const { resId } = useParams();
    const [resInfo,setResInfo] = useState(null);

    const fetchdata = async()=>{
        const data = await fetch(
          "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5175862&lng=88.3494328&restaurantId="+resId
        );
        const parseData = await data.json();
        setResInfo(parseData?.data);
    }

    useEffect(()=>{
        fetchdata();
    },[])

    return resInfo ? (
      <div className="res-container">
        <h3>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
        <img
          src={imageCDN + resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId}
          style={{ height: "250px", width: "250px" }}
        />
        <p>
          {resInfo?.cards[0]?.card?.card?.info?.cuisines?.join(",")} - {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </p>
        {resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map((item)=>{
          return (
            <ul>
              <li>
                <RestaurantMenu menu={item} />
              </li>
            </ul>
          );
        })}
      </div>
    ) : (
      <div>
        <ShimmerGroup style={{ marginTop: "10px" }} />
      </div>
    );
}

export default RestaurantInfo;