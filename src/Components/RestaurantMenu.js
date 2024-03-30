import ResMenuDetail from "./ResMenuDetail";
import dropDown from "../Images/drop-down-arrow.png";
import { useState } from "react";
const RestaurentMenu = ({ data, showItem, setShowIndex }) => {
  let isToggled = true;
  const handelClick = () => {
    setShowIndex();
    isToggled = !isToggled;
  };
  return (
    <div className="bg-slate-50 rounded-md mt-2 flex flex-col w-11/12 mb-4 p- md:p-2 shadow-2xl ">
      <div
        className=" cursor-pointer justify-between content-center
      flex "
        onClick={handelClick}
      >
        <h1 className="text-lg md:text-xl font-semibold m-2">
          {data.title} ({data.itemCards.length})
        </h1>
        <img className="w-5 h-7 mx-2" src={dropDown}></img>
      </div>
      {showItem && <ResMenuDetail item={data.itemCards} />}
    </div>
  );
};

export default RestaurentMenu;
