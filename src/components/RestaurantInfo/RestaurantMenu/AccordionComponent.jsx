import React from 'react';
import { imageCDN } from '../../../utils/urlLinks';

const AccordionComponent = ({menu}) => {
  return (
    <div>
      {menu?.card?.card?.itemCards? 
      menu?.card?.card?.itemCards?.map((menu) => {
            return (
              <>
                <div key={menu?.card?.info?.id} className="flex">
                  <div className="flex-1">
                    <div className="py-2 text-md">
                      {menu?.card?.info?.name} - ₹
                      {menu?.card?.info?.price
                        ? menu?.card?.info?.price / 100
                        : menu?.card?.info?.defaultPrice / 100}
                    </div>
                    <div className="text-sm">
                      {menu?.card?.info?.description}
                    </div>
                  </div>
                  <div>
                    <img
                      src={imageCDN + menu?.card?.info?.imageId}
                      className="w-24"
                    />
                  </div>
                </div>
                <hr className="border-2 border-gray-200 dark:border-gray-300" />
              </>
            );
          })
        : menu?.card?.card?.carousel?
        menu?.card?.card?.carousel.map((menu) => {
            return (
              <>
                <div key={menu?.bannerId} className="py-2 flex">
                  <div className="flex-1">
                    <div className="text-md">
                      {menu?.dish.info?.name} - ₹
                      {menu?.dish.info?.price
                        ? menu?.dish.info?.price / 100
                        : menu?.dish?.info?.defaultPrice / 100}
                    </div>
                    <div className="text-sm">
                      {menu?.dish.info?.description}
                    </div>
                  </div>
                  <div>
                    <img
                      src={imageCDN + menu?.dish?.info?.imageId}
                      className="w-24"
                    />
                  </div>
                  <hr className="border-2 border-gray-400 dark:border-gray-300 " />
                </div>
                <hr className="border-2 border-gray-200 dark:border-gray-300" />
              </>
            );
          })
          :
          menu?.card?.card?.categories?.map((eachMenu,index)=>{
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
            })  
          }
          
    </div>
  );
}

export default AccordionComponent;