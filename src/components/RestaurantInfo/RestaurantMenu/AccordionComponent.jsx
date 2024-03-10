import React from "react";
import { imageCDN } from "../../../utils/urlLinks";

const AccordionComponent = ({ menu }) => {
  return (
    <div>
      {menu?.card?.card?.itemCards
        ? menu?.card?.card?.itemCards?.map((menu) => {
            return (
              <div key={menu?.card?.info?.id}>
                <div className="flex">
                  <div className="w-9/12">
                    <div className="py-2 text-lg font-semibold">
                      {menu?.card?.info?.name} - ₹
                      {menu?.card?.info?.price
                        ? menu?.card?.info?.price / 100
                        : menu?.card?.info?.defaultPrice / 100}
                    </div>
                    <div className="text-sm">
                      {menu?.card?.info?.description}
                    </div>
                  </div>
                  <div className="relative w-3/12">
                    <img
                      src={imageCDN + menu?.card?.info?.imageId}
                      className="w-auto py-4"
                    />
                    <button className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                      Add
                    </button>
                  </div>
                </div>
                <hr className="border-2 border-gray-200 dark:border-gray-300" />
              </div>
            );
          })
        : menu?.card?.card?.carousel
        ? menu?.card?.card?.carousel.map((menu) => {
            return (
              <div key={menu?.bannerId}>
                <div className="py-2 flex ">
                  <div className="w-9/12">
                    <div className="text-lg font-semibold">
                      {menu?.dish.info?.name} - ₹
                      {menu?.dish.info?.price
                        ? menu?.dish.info?.price / 100
                        : menu?.dish?.info?.defaultPrice / 100}
                    </div>
                    <div className="text-sm">
                      {menu?.dish.info?.description}
                    </div>
                  </div>
                  <div className="relative w-3/12">
                    <img
                      src={imageCDN + menu?.dish?.info?.imageId}
                      className="w-auto py-4"
                    />
                    <button className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                      Add
                    </button>
                  </div>
                  <hr className="border-2 border-gray-400 dark:border-gray-300 " />
                </div>
                <hr className="border-2 border-gray-200 dark:border-gray-300" />
              </div>
            );
          })
        : menu?.card?.card?.categories?.map((eachMenu, index) => {
            return (
              <div key={index}>
                {console.log(eachMenu)}
                <div>{eachMenu?.title}</div>
                <div>
                  {eachMenu?.card?.card?.itemCards?.map((item) => {
                    return (
                      <div key={item?.info?.id}>
                        <div>
                          {item?.info?.name} - ₹{item?.info?.price / 100}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default AccordionComponent;
