import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";

import { resInfo } from "../../MockData/restaurantInfo"; 
import RestaurantCard from "../Restaurant Card/RestaurantCard";
import SpiningLoader from "../Loaders/loading1";
import ShimmerGroup from "../Loaders/shimmerGroup";
import "./body.css";

// Import context API
import { UserContext } from "../../utils/ContextAPIs/UserContext";



const Body = () => {
    const { loggedInUser, setUserName} = useContext(UserContext);
    const [listOfRestaurant,setlistOfRestaurant] = useState(null);
    const [searchText,setSearchText] = useState("");
    const [searchTable,setSearchTable] = useState(null);

    // API CALL to get the resstaurant details
    const fetchData=async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5175862&lng=88.3494328&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setlistOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(()=>{
        fetchData();
    },[]);


    function handleSearchTable(){
        const filteredRestaurants = listOfRestaurant.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setSearchTable(filteredRestaurants);
    }
    
    return (
      <div>
        <div className="m-3">
          <input
            className="border-2"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="ml-2 bg-green-300 w-20 h-7 whitespace-normal rounded-md"
            onClick={handleSearchTable}
          >
            Search
          </button>
          <input
            className="border-2"
            type="text"
            placeholder="UserName"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <br />
        <div className="flex flex-wrap gap-4 p-4">
          {/* To be used to render MockData */}
          {/* {resInfo.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.map((resItem)=>{
                    return (
                        <RestaurantCard key={resItem?.info?.id} resItem={resItem}/>
                    );
                })} */}
          {/* Using Live data */}
          {searchTable ? (
            searchTable.map((resItem) => {
              return (
                <Link
                  to={"/restaurants/" + resItem?.info?.id}
                  key={resItem?.info?.id}
                >
                  <RestaurantCard resItem={resItem} />
                </Link>
              );
            })
          ) : listOfRestaurant ? (
            listOfRestaurant.map((resItem) => {
              return (
                <Link
                  to={"/restaurants/" + resItem?.info?.id}
                  key={resItem?.info?.id}
                >
                  <RestaurantCard resItem={resItem} />
                </Link>
              );
            })
          ) : (
            <ShimmerGroup />
          )}
        </div>
      </div>
    );
}
export default Body;