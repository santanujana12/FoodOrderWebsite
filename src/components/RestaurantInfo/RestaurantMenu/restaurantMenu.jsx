import { useState } from "react";
// Local imports
import AccordionComponent from "./AccordionComponent";

const RestaurantMenu = ({ menu, index, showItems, setShowItems }) => {

  // Maintains the local state of the accordion
  // const [showItems,setShowItems] = useState(false);

  // function handleclick(){
  //   setShowItems(!showItems);
  // }

  return (
    <>
      {menu?.card?.card?.title && (
        <div className="box-content p-4 w-6/12 bg-gray-200 my-2 mx-auto shadow-md rounded-md">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => setShowItems()}
          >
            <div className="flex-wrap font-bold text-2xl">
              {menu?.card?.card?.title} - (
              {menu?.card?.card?.itemCards
                ? menu?.card?.card?.itemCards?.length
                : menu?.card?.card?.carousel
                ? menu?.card?.card?.carousel?.length
                : menu?.card?.card?.categories?.length}
              )
            </div>
            <div className="text-2xl">{showItems ? "⬆️" : "⬇️"}</div>
          </div>
          {/* Accordion component */}
          {showItems === index && <AccordionComponent menu={menu} />}
        </div>
      )}
    </>
  );
};
export default RestaurantMenu;