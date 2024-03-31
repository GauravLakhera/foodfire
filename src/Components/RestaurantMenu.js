import ResMenuDetail from "./ResMenuDetail";
import dropDown from "../Images/drop-down-arrow.png";
const RestaurentMenu = ({ data, showItem, setShowIndex }) => {
  let isToggled = true;
  // Toggeling the  isToggled variable for setting expanded vwerion true or false
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
      {/* if showItem is tru the only render restaurend expanded version */}
      {showItem && <ResMenuDetail item={data.itemCards} />}
    </div>
  );
};

export default RestaurentMenu;
