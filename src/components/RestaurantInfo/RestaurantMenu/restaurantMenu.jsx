const RestaurantMenu = ({menu}) =>{
    return (
        <ul>
           {menu?.card?.card?.itemCards?.map((item)=>{
            return (
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - {`₹${item?.card?.info?.price/100}`}
                </li>
            )
           })}
        </ul>
    );
}
export default RestaurantMenu;