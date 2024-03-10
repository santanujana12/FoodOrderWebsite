import AccordionComponent from "./AccordionComponent";

const RestaurantMenu = ({ menu }) => {
  return (
    <>
      {menu?.card?.card?.title && (
        <div className="box-content p-4 w-6/12 bg-gray-200 my-2 mx-auto shadow-md rounded-md">
          <div className="flex justify-between">
            <div className="flex-wrap font-bold text-2xl">
              {menu?.card?.card?.title} - (
              {menu?.card?.card?.itemCards
                ? menu?.card?.card?.itemCards?.length
                : menu?.card?.card?.carousel
                ? menu?.card?.card?.carousel?.length
                : menu?.card?.card?.categories?.length}
              )
            </div>
            <div className="text-2xl">⬇️</div>
          </div>
          {/* Accordion component */}
          {/* <div>
            {menu?.card?.card?.itemCards
              ? menu?.card?.card?.itemCards?.map((menu) => {
                  return (
                    <div key={menu?.card?.info?.id}>
                      <div className="py-2 text-md">
                        {menu?.card?.info?.name} - ₹
                        {menu?.card?.info?.price
                          ? menu?.card?.info?.price / 100
                          : menu?.card?.info?.defaultPrice/100}
                      </div>
                      <div className="text-sm">
                        {menu?.card?.info?.description}
                      </div>
                      
                    </div>
                  );
                })
              : menu?.card?.card?.carousel?.map((menu)=>{
                return (
                  <div key={menu?.bannerId} className="py-2">
                    <div className="text-md">
                      {menu?.dish.info?.name} - ₹
                      {menu?.dish.info?.price
                        ? menu?.dish.info?.price / 100
                        : menu?.dish?.info?.defaultPrice / 100}
                    </div>
                    <div className="text-sm">{menu?.dish.info?.description}</div>
                  </div>
                );
              })}
          </div> */}
          <AccordionComponent menu={menu}/>
        </div>
      )}
    </>
  );
};
export default RestaurantMenu;