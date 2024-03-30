import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenuInfo from "../utils/useRestaurantMenuInfo";
import star from "../Images/star.png";
// import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
import delivery from "../Images/shipping-fast.png";
import RestaurentMenu from "./RestaurantMenu";
const RestaurantMenu = () => {
  const { Resid } = useParams(); //reading the Resid perameter send from the App.js

    const resInfo = useRestaurantMenuInfo(Resid);

    const [showIndex, setShowIndex] = useState();

    if (resInfo == null) return <Shimmer />;

  const {
    name,
    city,
    areaName,
    cuisines,
    avgRating,
    isOpen,
    costForTwoMessage,
  } = resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  const category =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (items) =>
        items.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(category[0].card.card.title);

  return (
    <div className="flex flex-col justify-center">
      <div className="w-10/12 md:w-6/12 h-fit my-1 m-auto flex flex-col justify-start items-start">
        <h1 className="text-2xl font-bold mt-2 p-2">{name}</h1>
        <div className="w-full p-2 bg-gradient-to-t from-gray-300 rounded-3xl my-1">
          <div className="border rounded-3xl my-1 w-full p-2 bg-white">
            <div className="flex ">
              <div className="flex p-1 items-center justify-center ">
                <img className="w-5 h-5" src={star}></img>
                <h4 className=" font-semibold m-1 p-1">{avgRating}</h4>
                <h3 className="text-center m-1 font-semibold">
                  : {costForTwoMessage}
                </h3>
              </div>
            </div>
            <div className="p-1 underline text-yellow-700 font-semibold">
              <h1>Chinese,Indian</h1>
            </div>
            <div className="flex items-end p-1">
              <h1 className="text-xl">{city}</h1>
              <h1 className="text-slate-700 text-xs">{areaName}</h1>
            </div>
            <div className="border-b mb-1">
              {isOpen ? (
                <h1 className="p-1 text-green-800 text-sm">Open</h1>
              ) : (
                <h1 className="p-1 text-red-700">Close</h1>
              )}
            </div>
            <div className="flex p-1 items-center">
              <img className="w-5 h-5" src={delivery} />
              <h1 className="ml-2 text-xs">
                Order above 149 for discounted delivery fee
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-gray-200 flex flex-col flex-wrap justify-center w-full md:w-8/12 m-auto items-center">
        {category.map((item, index) => (
          <RestaurentMenu
            key={item.card.card.title}
            data={item.card.card}
            showItem={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>

      {/* <ul>
        {itemCards.map((item) => (
          <li key = {item.card}>{item.card.info.name} - {" Rs."}
          {item.card.info.price/100||item.card.info.defaultprice}</li>
          
))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
