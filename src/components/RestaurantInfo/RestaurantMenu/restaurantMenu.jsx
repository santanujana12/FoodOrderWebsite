const RestaurantMenu = ({menu}) =>{
    return (
        <>
           {menu?.card?.card?.itemCards?.map((item)=>{
            return (
                <p>{console.log(item)}</p>
            )
           })}
        </>
    );
}
export default RestaurantMenu;