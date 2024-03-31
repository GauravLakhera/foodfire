import star from "../Images/star.png";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  sla,
}) => {
  return (
    <div className="flex border-b md:border-b-0 shadow-xl md:shadow-sm justify-between md:flex-col m-3 md:m-6 bg-white w-full md:w-48 hover:scale-110 p-1 md:p-0 transition duration-300 ease-in-out hover:rounded-md">
      <div className="md:rounded-t-2xl border-r flex md:flex-col md:rounded-b-xl md:shadow-lg">
        <img
          className="w-28 md:w-full h-28 md:h-48 object-cover rounded-md md:rounded-none md:rounded-t-lg "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="Restaurant Image"
        />
        <div>
          <h2 className="md:text-lg font-semibold p-2 w-48 overflow-hidden text-ellipsis md:whitespace-nowrap">
            {name}
          </h2>
          <h3 className="block md:hidden text-xs md:text-sm line-clamp-2 w-32 md:w-44 text-ellipsis md:whitespace-nowrap overflow-hidden m-2">
            {cuisines.join(", ")}
          </h3>
        </div>
      </div>
      <h3 className="hidden md:block text-xs md:text-sm line-clamp-2 w-32 md:w-44 text-ellipsis md:whitespace-nowrap overflow-hidden m-2">
        {cuisines.join(", ")}
      </h3>

      <div className="flex flex-col md:flex-row justify-between items-center md:p-2 md:border-t">
        <h1 className="text-ellipsis text-sm">{sla.slaString}</h1>

        <div className="flex justify-center items-center font-semibold">
          <h4>{avgRating}</h4>
          <img className="w-4 h-4 ml-1 " src={star}></img>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
