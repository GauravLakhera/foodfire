import { IMG_CDN_URL } from "../constant";
import star from "../images/star.png";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  sla,
}) => {
  return (
    <div className="flex md:flex-col rounded-lg m-3 md:m-5 shadow-xl bg-slate-50 w-full md:max-w-52 hover:scale-110  transition duration-300 ease-in-out hover:rounded-md">
      <img
        className="w-28 md:w-full h-24 md:h-56 object-cover rounded-t-lg "
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Restaurant Image"
      />
      <div className="flex flex-col">
        <h2 className="md:text-lg font-semibold md:text-center p-2 line-clamp-2 w-32 md:w-44 overflow-hidden text-ellipsis md:whitespace-nowrap">
          {name}
        </h2>
        <h3 className="text-xs md:text-sm line-clamp-2 w-32 md:w-44 text-ellipsis md:whitespace-nowrap overflow-hidden m-2">
          {cuisines.join(", ")}
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center md:p-2 md:border-t-2">
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
