
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ResMenuDetail = ({ item }) => {
  const dispatch = useDispatch();
  const AddToCart = (item) => {
    //dispatch an Action
    dispatch(addItems(item));
    //item goes as action and we retrive that in store using action.payload
  };

  return (
    <div className="flex  justify-between  flex-col flex-wrap">
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="my-2 flex flex-row justify-between p-2 border-blue-100 border-b-2"
        >
          {/* {console.log(item.card.info.name)} */}

          <div className="flex flex-col">
            <span className="flex mb-1">
              <h1 className=" md:text-xl max-w-6/12 md:max-w-10/12 text-ellipsis whitespace-nowrap overflow-hidden">
                {item.card.info.name}
              </h1>
              <h1 className="mx-2">₹ {item.card.info.price / 100}</h1>
            </span>

            <h1 className="text-sm text-wrap w-52 font-light text-ellipsis whitespace-nowrap overflow-hidden md:max-w-10/12">
              {item.card.info.description}
            </h1>
          </div>

          <div>
            <button
              className=" font-sans font-bold bg-yellow-300 hover:bg-yellow-500 mb-1 p-1 rounded-xl text-center w-full"
              onClick={() => AddToCart(item)}
            >
              Add +
            </button>
            <img
              className="w-36 h-24 rounded-sm object-cover md:w-36 md:h-24"
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResMenuDetail;
