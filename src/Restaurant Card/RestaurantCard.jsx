import "./restaurantcard.css";

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
                alt="restaurant-card" style={{ width: "200px", height: "150px", marginLeft: "20px", marginTop: "5px" }} />
            <h3 style={{margin:0}}>KFC</h3>
            <h4 style={{margin:0}}>Chicken Fry</h4>
            <h4 style={{margin:0}}>4.4 stars</h4>
            <h4 style={{margin:0}}>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard;